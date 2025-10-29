import { useRef, useEffect, useState, useCallback, memo } from "react";

// SSR Guard
const isClient = typeof window !== "undefined";
const Renderer = isClient ? require("ogl").Renderer : null;
const Program = isClient ? require("ogl").Program : null;
const Triangle = isClient ? require("ogl").Triangle : null;
const Mesh = isClient ? require("ogl").Mesh : null;

const DEFAULT_COLOR = "#ffffff";

const hexToRgb = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m
    ? [
        parseInt(m[1], 16) / 255,
        parseInt(m[2], 16) / 255,
        parseInt(m[3], 16) / 255,
      ]
    : [1, 1, 1];
};

const getAnchorAndDir = (origin, w, h) => {
  const outside = 0.2;
  const anchors = {
    "top-left": { anchor: [0, -outside * h], dir: [0, 1] },
    "top-right": { anchor: [w, -outside * h], dir: [0, 1] },
    "left": { anchor: [-outside * w, 0.5 * h], dir: [1, 0] },
    "right": { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] },
    "bottom-left": { anchor: [0, (1 + outside) * h], dir: [0, -1] },
    "bottom-center": { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] },
    "bottom-right": { anchor: [w, (1 + outside) * h], dir: [0, -1] },
    "top-center": { anchor: [0.5 * w, -outside * h], dir: [0, 1] },
  };
  return anchors[origin] || anchors["top-center"];
};

// Debounce helper
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const LightRays = memo(
  ({
    raysOrigin = "top-center",
    raysColor = DEFAULT_COLOR,
    raysSpeed = 1,
    lightSpread = 1,
    rayLength = 2,
    pulsating = false,
    fadeDistance = 1.0,
    saturation = 1.0,
    followMouse = true,
    mouseInfluence = 0.1,
    noiseAmount = 0.0,
    distortion = 0.0,
    className = "",
  }) => {
    const containerRef = useRef(null);
    const stateRef = useRef({
      renderer: null,
      mesh: null,
      program: null,
      geometry: null,
      animationId: null,
      mouse: { x: 0.5, y: 0.5 },
      smoothMouse: { x: 0.5, y: 0.5 },
    });

    const [isVisible, setIsVisible] = useState(false);
    const [webglSupported, setWebglSupported] = useState(true);

    // Intersection Observer
    useEffect(() => {
      if (!isClient || !containerRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          setIsVisible(entries[0].isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, []);

    // Mouse handler
    const handleMouseMove = useCallback(
      (e) => {
        if (!followMouse || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        stateRef.current.mouse = {
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        };
      },
      [followMouse]
    );

    // Cleanup WebGL resources
    const destroyWebGL = useCallback(() => {
      const s = stateRef.current;
      if (!s.renderer) return;

      if (s.animationId) {
        cancelAnimationFrame(s.animationId);
        s.animationId = null;
      }

      // Dispose OGL objects
      if (s.mesh) s.mesh.geometry.dispose?.();
      if (s.program) s.program.dispose?.();
      if (s.renderer) {
        const gl = s.renderer.gl;
        const loseContextExt = gl.getExtension("WEBGL_lose_context");
        if (loseContextExt) loseContextExt.loseContext();
        s.renderer = null;
      }

      // Remove canvas
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    }, []);

    // Initialize WebGL
    const initWebGL = useCallback(() => {
      if (!isClient || !containerRef.current || !webglSupported) return;

      try {
        const renderer = new Renderer({
          dpr: Math.min(window.devicePixelRatio, 1.5),
          alpha: true,
          antialias: true,
          premultipliedAlpha: true,
        });

        const gl = renderer.gl;
        if (!gl) {
          setWebglSupported(false);
          return;
        }

        gl.canvas.style.width = "100%";
        gl.canvas.style.height = "100%";
        gl.canvas.style.display = "block";
        containerRef.current.appendChild(gl.canvas);

        const vert = `attribute vec2 position; varying vec2 vUv; void main() { vUv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }`;

        const frag = `precision highp float;
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 rayPos;
uniform vec2 rayDir;
uniform vec3 raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2 mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;
varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);
  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0) * 0.15;
  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));
  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 2.0)) : 1.0;
  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );
  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);
  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }
  vec4 rays1 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349, 1.3 * raysSpeed);
  vec4 rays2 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234, 0.9 * raysSpeed);
  fragColor = rays1 * 0.5 + rays2 * 0.4;
  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }
  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;
  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }
  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color; mainImage(color, gl_FragCoord.xy); gl_FragColor = color;
}`;

        const uniforms = {
          iTime: { value: 0 },
          iResolution: { value: [1, 1] },
          rayPos: { value: [0, 0] },
          rayDir: { value: [0, 1] },
          raysColor: { value: hexToRgb(raysColor) },
          raysSpeed: { value: raysSpeed },
          lightSpread: { value: lightSpread },
          rayLength: { value: rayLength },
          pulsating: { value: pulsating ? 1.0 : 0.0 },
          fadeDistance: { value: fadeDistance },
          saturation: { value: saturation },
          mousePos: { value: [0.5, 0.5] },
          mouseInfluence: { value: mouseInfluence },
          noiseAmount: { value: noiseAmount },
          distortion: { value: distortion },
        };

        const geometry = new Triangle(gl);
        const program = new Program(gl, { vertex: vert, fragment: frag, uniforms });
        const mesh = new Mesh(gl, { geometry, program });

        stateRef.current = {
          ...stateRef.current,
          renderer,
          mesh,
          program,
          geometry,
          uniforms,
        };

        const updatePlacement = debounce(() => {
          if (!containerRef.current || !renderer) return;
          const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current;
          renderer.setSize(wCSS, hCSS);
          const dpr = renderer.dpr;
          const w = wCSS * dpr;
          const h = hCSS * dpr;
          uniforms.iResolution.value = [w, h];
          const { anchor, dir } = getAnchorAndDir(raysOrigin, w, h);
          uniforms.rayPos.value = anchor;
          uniforms.rayDir.value = dir;
        }, 100);

        const loop = (t) => {
          const s = stateRef.current;
          if (!s.renderer || !s.uniforms || !s.mesh) return;

          s.uniforms.iTime.value = t * 0.001;

          if (followMouse && mouseInfluence > 0.0) {
            const smooth = 0.88;
            s.smoothMouse.x = s.smoothMouse.x * smooth + s.mouse.x * (1 - smooth);
            s.smoothMouse.y = s.smoothMouse.y * smooth + s.mouse.y * (1 - smooth);
            s.uniforms.mousePos.value = [s.smoothMouse.x, s.smoothMouse.y];
          }

          s.renderer.render({ scene: s.mesh });
          s.animationId = requestAnimationFrame(loop);
        };

        window.addEventListener("resize", updatePlacement);
        updatePlacement();
        stateRef.current.animationId = requestAnimationFrame(loop);

        // Store cleanup
        stateRef.current.cleanup = () => {
          window.removeEventListener("resize", updatePlacement);
          destroyWebGL();
        };
      } catch (err) {
        console.warn("Failed to initialize WebGL LightRays:", err);
        setWebglSupported(false);
        destroyWebGL();
      }
    }, [
      raysOrigin,
      raysColor,
      raysSpeed,
      lightSpread,
      rayLength,
      pulsating,
      fadeDistance,
      saturation,
      followMouse,
      mouseInfluence,
      noiseAmount,
      distortion,
    ]);

    // Visibility & init
    useEffect(() => {
      if (isVisible && webglSupported) {
        initWebGL();
      } else {
        destroyWebGL();
      }

      return () => destroyWebGL();
    }, [isVisible, webglSupported, initWebGL, destroyWebGL]);

    // Mouse listener (only when visible & following)
    useEffect(() => {
      if (isVisible && followMouse) {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }
    }, [isVisible, followMouse, handleMouseMove]);

    // Fallback UI if WebGL not supported
    if (!webglSupported) {
      return <div className={`w-full h-full ${className}`} />;
    }

    return (
      <div
        ref={containerRef}
        className={`w-full h-full pointer-events-none z-[3] overflow-hidden relative ${className}`.trim()}
      />
    );
  }
);

export default LightRays;