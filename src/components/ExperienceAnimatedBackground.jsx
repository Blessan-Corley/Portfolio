import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ExperienceAnimatedBackground = ({ className = "" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  
  const FloatingShape = ({ delay = 0, duration = 20, startX = 0, startY = 0, shape = "circle" }) => (
    <motion.div
      className="absolute"
      initial={{ x: startX, y: startY, rotate: 0 }}
      animate={{
        x: [startX, startX + 80, startX - 40, startX],
        y: [startY, startY - 60, startY + 40, startY],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {shape === "circle" ? (
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-400/40 to-purple-500/30 shadow-lg backdrop-blur-sm border border-white/10" />
      ) : shape === "square" ? (
        <div className="w-3 h-3 bg-gradient-to-br from-purple-400/40 to-pink-500/30 shadow-lg backdrop-blur-sm border border-white/10 rotate-45" />
      ) : (
        <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-orange-400/40 shadow-lg" />
      )}
    </motion.div>
  );

  
  const CodeParticle = ({ delay = 0, startX = 0, startY = 0, symbol = "{}" }) => (
    <motion.div
      className="absolute text-orange-400/30 font-mono text-sm font-bold"
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        x: [startX, startX + 50, startX - 25, startX],
        y: [startY, startY - 40, startY + 30, startY],
        opacity: [0, 0.6, 0.3, 0],
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {symbol}
    </motion.div>
  );

  
  const AnimatedGridDot = ({ delay = 0, x, y }) => (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{ left: x, top: y }}
      initial={{ opacity: 0.1, scale: 0.5 }}
      animate={{
        opacity: [0.1, 0.4, 0.1],
        scale: [0.5, 1.2, 0.5]
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-purple-400/60 to-pink-400/40 rounded-full shadow-sm" />
    </motion.div>
  );

  
  const gridDots = [];
  for (let x = 0; x < window.innerWidth; x += 80) {
    for (let y = 0; y < window.innerHeight; y += 80) {
      gridDots.push({
        x,
        y,
        delay: Math.random() * 4,
      });
    }
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Gradient that transitions from black at top/bottom to magenta in middle */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/12 to-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/6 to-transparent" />

      {/* Center magenta glow - reduced intensity */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(199,21,133,0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 70% 45% at 50% 50%, rgba(147,51,234,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 65% 42% at 50% 50%, rgba(168,85,247,0.10) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(199,21,133,0.08) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Timeline-complementary vertical lines - reduced opacity */}
      <motion.div
        className="absolute left-1/4 top-0 w-px h-full opacity-12"
        animate={{
          background: [
            "linear-gradient(to bottom, transparent 0%, rgba(199,21,133,0.25) 50%, transparent 100%)",
            "linear-gradient(to bottom, transparent 0%, rgba(147,51,234,0.20) 50%, transparent 100%)",
            "linear-gradient(to bottom, transparent 0%, rgba(168,85,247,0.30) 50%, transparent 100%)",
            "linear-gradient(to bottom, transparent 0%, rgba(199,21,133,0.25) 50%, transparent 100%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-1/4 top-0 w-px h-full opacity-12"
        animate={{
          background: [
            "linear-gradient(to bottom, transparent 0%, rgba(147,51,234,0.20) 50%, transparent 100%)",
            "linear-gradient(to bottom, transparent 0%, rgba(168,85,247,0.25) 50%, transparent 100%)",
            "linear-gradient(to bottom, transparent 0%, rgba(199,21,133,0.22) 50%, transparent 100%)",
            "linear-gradient(to bottom, transparent 0%, rgba(147,51,234,0.20) 50%, transparent 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating geometric shapes */}
      <FloatingShape delay={0} duration={20} startX={100} startY={150} shape="circle" />
      <FloatingShape delay={3} duration={25} startX={window.innerWidth - 150} startY={300} shape="square" />
      <FloatingShape delay={6} duration={18} startX={200} startY={500} shape="triangle" />
      <FloatingShape delay={9} duration={22} startX={window.innerWidth - 100} startY={100} shape="circle" />
      <FloatingShape delay={12} duration={28} startX={50} startY={400} shape="square" />
      <FloatingShape delay={15} duration={16} startX={window.innerWidth - 250} startY={600} shape="triangle" />

      {/* Code-like particles */}
      <CodeParticle delay={0} startX={150} startY={200} symbol="{}" />
      <CodeParticle delay={5} startX={window.innerWidth - 200} startY={350} symbol="</>" />
      <CodeParticle delay={10} startX={300} startY={550} symbol="[]" />
      <CodeParticle delay={15} startX={window.innerWidth - 120} startY={180} symbol="()" />
      <CodeParticle delay={20} startX={80} startY={450} symbol="{}" />

      {/* Enhanced animated grid dots */}
      {gridDots.slice(0, 25).map((dot, i) => (
        <AnimatedGridDot key={i} delay={dot.delay} x={dot.x} y={dot.y} />
      ))}

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Central timeline glow with reduced magenta intensity */}
      <motion.div
        className="absolute left-1/2 top-0 w-32 h-full -translate-x-1/2"
        animate={{
          background: [
            "radial-gradient(ellipse 60px 100% at 50% 40%, rgba(199,21,133,0.04) 0%, transparent 70%)",
            "radial-gradient(ellipse 80px 100% at 50% 50%, rgba(147,51,234,0.03) 0%, transparent 70%)",
            "radial-gradient(ellipse 70px 100% at 50% 60%, rgba(168,85,247,0.05) 0%, transparent 70%)",
            "radial-gradient(ellipse 60px 100% at 50% 40%, rgba(199,21,133,0.04) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ExperienceAnimatedBackground;