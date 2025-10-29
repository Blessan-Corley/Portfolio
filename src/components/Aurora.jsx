import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef, useMemo } from "react";

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Simplified manual interpolation (more GPU-compatible)
vec3 getColorRamp(float t, vec3[3] colors) {
    if (t < 0.5) {
        return mix(colors[0], colors[1], t * 2.0);
    } else {
        return mix(colors[1], colors[2], (t - 0.5) * 2.0);
    }
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  vec3 rampColor = getColorRamp(uv.x, uColorStops);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

export default function Aurora({ 
  colorStops = ["#5227FF", "#7cff67", "#5227FF"], 
  amplitude = 1.0, 
  blend = 0.5,
  speed = 1.0
}) {
  const ctnDom = useRef(null);
  const stateRef = useRef({
    amplitude,
    blend,
    speed,
    colorStops,
    time: 0
  });

  // Update ref on prop change
  useEffect(() => {
    stateRef.current = { amplitude, blend, speed, colorStops, time: stateRef.current.time };
  }, [amplitude, blend, speed, colorStops]);

  // Precompute color stops as RGB arrays (memoized)
  const colorStopsRGB = useMemo(() => {
    return colorStops.map(hex => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    });
  }, [colorStops]);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: true
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    let program;
    let mesh;

    const resize = () => {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      renderer.setSize(width, height);
      if (program) {
        program.uniforms.uResolution.value = [width, height];
      }
    };

    window.addEventListener("resize", resize);

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorStopsRGB },
        uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
        uBlend: { value: blend }
      }
    });

    mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let animateId = 0;
    const update = (timestamp) => {
      animateId = requestAnimationFrame(update);
      
      const { amplitude, blend, speed, colorStops } = stateRef.current;
      stateRef.current.time = timestamp;

      program.uniforms.uTime.value = timestamp * 0.001 * speed;
      program.uniforms.uAmplitude.value = amplitude;
      program.uniforms.uBlend.value = blend;

      // Only update color stops if changed (but we memoized, so this is rare)
      program.uniforms.uColorStops.value = colorStops.map(hex => {
        const c = new Color(hex);
        return [c.r, c.g, c.b];
      });

      renderer.render({ scene: mesh });
    };

    animateId = requestAnimationFrame(update);
    resize();

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      if (ctn.contains(gl.canvas)) {
        ctn.removeChild(gl.canvas);
      }
      // Clean up OGL resources
      geometry.destroy?.();
      program?.destroy?.();
      renderer?.destroy?.();
    };
  }, []); // Run once on mount

  return (
    <div
      ref={ctnDom}
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}