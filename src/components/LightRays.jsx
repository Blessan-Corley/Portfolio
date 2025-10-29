import { useRef, useEffect, useState, useCallback, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const LightRays = memo(
  ({
    raysOrigin = "top-center",
    raysColor = "#ffffff",
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
    const [isVisible, setIsVisible] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
      if (!containerRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          setIsVisible(entries[0].isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, []);

    if (!isVisible || prefersReducedMotion) {
      return (
        <div
          ref={containerRef}
          className={`w-full h-full pointer-events-none z-[3] overflow-hidden relative ${className}`.trim()}
        />
      );
    }

    const rayCount = 4;
    const rays = Array.from({ length: rayCount }, (_, i) => ({
      id: i,
      angle: (i / rayCount) * 360,
      delay: i * 0.2,
    }));

    return (
      <div
        ref={containerRef}
        className={`w-full h-full pointer-events-none z-[3] overflow-hidden relative ${className}`.trim()}
      >
        {/* Base gradient glow */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at center, ${raysColor}30 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6 / raysSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Ray beams */}
        {rays.map((ray) => (
          <motion.div
            key={ray.id}
            className="absolute inset-0"
            animate={{
              opacity: pulsating 
                ? [0.3, 0.7, 0.3]
                : [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 4 / raysSpeed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: ray.delay,
            }}
            style={{
              background: `conic-gradient(from ${ray.angle}deg, ${raysColor}${Math.round(40 - ray.id * 5)}, transparent ${50 + ray.id * 8}%)`,
            }}
          />
        ))}

        {/* Animated light waves */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={`wave-${index}`}
            className="absolute top-0 left-1/2 w-96 h-full -translate-x-1/2"
            style={{
              background: `linear-gradient(180deg, ${raysColor}${30 - index * 10} 0%, transparent 60%)`,
              filter: `blur(${20 + index * 10}px)`,
            }}
            animate={{
              y: [-100, 200, -100],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 / raysSpeed + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}

        {/* Particle system */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full blur-sm"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              background: raysColor,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -300, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    );
  }
);

LightRays.displayName = "LightRays";

export default LightRays;