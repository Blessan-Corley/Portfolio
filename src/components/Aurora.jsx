import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Aurora({ 
  colorStops = ["#5227FF", "#7cff67", "#5227FF"], 
  amplitude = 1.0, 
  blend = 0.5,
  speed = 1.0
}) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    );
  }

  if (shouldReduceMotion) {
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: 0,
          pointerEvents: "none",
          background: `linear-gradient(180deg, ${colorStops[0]}10 0%, ${colorStops[1]}05 50%, ${colorStops[2]}10 100%)`,
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Background base gradient */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `linear-gradient(180deg, ${colorStops[0]}08 0%, transparent 40%)`,
        }}
      />

      {/* Main aurora wave */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${colorStops[0]}20 0%, ${colorStops[1]}15 50%, transparent 100%)`,
          mixBlendMode: "screen",
        }}
        animate={{
          y: [0, -80, 0],
          opacity: [0.4, 0.8, 0.4],
          scaleY: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 10 / speed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary aurora wave */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${colorStops[1]}15 20%, ${colorStops[2]}10 60%, transparent 100%)`,
          mixBlendMode: "screen",
        }}
        animate={{
          y: [20, -60, 20],
          opacity: [0.3, 0.7, 0.3],
          scaleY: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 12 / speed,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Tertiary wave for depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${colorStops[2]}10 0%, ${colorStops[0]}05 50%, transparent 100%)`,
          mixBlendMode: "screen",
        }}
        animate={{
          y: [-20, 60, -20],
          opacity: [0.2, 0.6, 0.2],
          scaleY: [0.7, 1.3, 0.7],
        }}
        transition={{
          duration: 14 / speed,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(ellipse 150% 100% at 50% 0%, ${colorStops[0]}30 0%, transparent 60%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8 / speed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full blur"
          style={{
            background: colorStops[i % colorStops.length],
            left: `${(i * 8.33) % 100}%`,
            top: `${Math.random() * 60 + 20}%`,
          }}
          animate={{
            y: [0, -150 - i * 20, 0],
            x: [0, Math.sin(i) * 80, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Light leak effect */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-30"
        style={{
          background: `radial-gradient(circle, ${colorStops[0]}40 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 15 / speed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}