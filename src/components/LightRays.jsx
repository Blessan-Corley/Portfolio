import { useRef, useEffect, useState, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const LightRays = memo(({
  raysOrigin = "top-center",
  raysColor = "#ffffff",
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 2,
  pulsating = false,
  fadeDistance = 1.0,
  saturation = 1.0,
  followMouse = false,
  mouseInfluence = 0.1,
  noiseAmount = 0.0,
  distortion = 0.0,
  className = "",
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    if (!followMouse) return;
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [followMouse]);

  if (!isVisible || prefersReducedMotion) {
    return (
      <div
        ref={containerRef}
        className={`w-full h-full pointer-events-none z-[3] overflow-hidden relative ${className}`.trim()}
      />
    );
  }

  const baseSpeed = raysSpeed || 1;
  const duration = 8 / baseSpeed;

  return (
    <div
      ref={containerRef}
      className={`w-full h-full pointer-events-none z-[3] overflow-hidden relative ${className}`.trim()}
    >
      {/* Main gradient glow */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle at center, ${raysColor}30 0%, ${raysColor}10 30%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: duration + 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Wave 1 - Fast */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${raysColor}25 0%, ${raysColor}12 40%, transparent 70%)`,
          mixBlendMode: "screen",
          filter: `blur(${20 * lightSpread}px)`,
        }}
        animate={{
          y: [0, -120 * rayLength, 0],
          opacity: [0.2, 0.7, 0.2],
          scaleY: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Wave 2 - Medium */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${raysColor}18 20%, ${raysColor}10 60%, transparent 80%)`,
          mixBlendMode: "screen",
          filter: `blur(${30 * lightSpread}px)`,
        }}
        animate={{
          y: [20, -100 * rayLength, 20],
          opacity: [0.15, 0.6, 0.15],
          scaleY: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: duration + 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      {/* Wave 3 - Slow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${raysColor}12 0%, ${raysColor}6 50%, transparent 90%)`,
          mixBlendMode: "screen",
          filter: `blur(${40 * lightSpread}px)`,
        }}
        animate={{
          y: [-20, 80 * rayLength, -20],
          opacity: [0.1, 0.5, 0.1],
          scaleY: [0.7, 1.3, 0.7],
        }}
        transition={{
          duration: duration + 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      />

      {/* Pulsing particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: "4px",
            height: "4px",
            background: raysColor,
            left: `${(i / 8) * 100}%`,
            top: `${20 + Math.random() * 60}%`,
            filter: `blur(2px)`,
          }}
          animate={{
            y: [0, -150 - i * 15, 0],
            x: [0, Math.sin(i) * 60, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}

      {/* Central glow effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${raysColor}40 0%, transparent 70%)`,
          filter: "blur(80px)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: duration + 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
});

LightRays.displayName = "LightRays";
export default LightRays;