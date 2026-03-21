import { motion } from 'framer-motion';

const FloatingParticle = ({ delay = 0, startX = 0, startY = 0, color = '#00ffff', size = 'small' }) => {
  const sizeMap = {
    small: 'w-1.5 h-1.5',
    medium: 'w-2 h-2',
    large: 'w-3 h-3'
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        x: [startX, startX + 80, startX - 40, startX],
        y: [startY, startY - 60, startY + 30, startY],
        opacity: [0, 0.8, 0.4, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className={`${sizeMap[size]} rounded-full shadow-lg backdrop-blur-sm`}
        style={{
          backgroundColor: `${color}60`,
          boxShadow: `0 0 10px ${color}40`
        }}
      />
    </motion.div>
  );
};

const BackgroundIcon = ({ delay = 0, startX = 0, startY = 0, icon, color = '#00ffff' }) => (
  <motion.div
    className="absolute pointer-events-none text-4xl opacity-10"
    initial={{ x: startX, y: startY, rotate: 0 }}
    animate={{
      x: [startX, startX + 30, startX - 15, startX],
      y: [startY, startY - 20, startY + 10, startY],
      rotate: [0, 90, 180, 270, 360],
      opacity: [0.05, 0.20, 0.10, 0.05],
    }}
    transition={{
      duration: 20,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{ color: `${color}40` }}
  >
    {icon}
  </motion.div>
);

const CircuitPattern = ({ delay = 0, startX = 0, startY = 0, color = '#00ffff' }) => (
  <motion.div
    className="absolute pointer-events-none opacity-15"
    initial={{ x: startX, y: startY, opacity: 0 }}
    animate={{
      opacity: [0, 0.20, 0.08, 0.20, 0],
      scale: [1, 1.1, 0.9, 1.1, 1],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path
        d="M10 10h15v15M45 10h-15v15M10 50h15v-15M45 50h-15v-15M25 25h10v10"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.7"
      />
      <circle cx="25" cy="25" r="2" fill={color} opacity="0.9" />
      <circle cx="35" cy="35" r="2" fill={color} opacity="0.9" />
    </svg>
  </motion.div>
);

const SkillsBackground = ({ particles, backgroundIcons, circuitPatterns }) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />

    <motion.div
      className="absolute inset-0"
      animate={{
        background: [
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,255,0.06) 0%, transparent 60%)",
          "radial-gradient(ellipse 85% 65% at 50% 50%, rgba(255,107,53,0.05) 0%, transparent 60%)",
          "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(78,205,196,0.07) 0%, transparent 60%)",
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,255,0.06) 0%, transparent 60%)",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {particles.map((particle, index) => (
      <FloatingParticle key={`particle-${index}`} {...particle} />
    ))}

    {backgroundIcons.map((iconData, index) => (
      <BackgroundIcon key={`bg-icon-${index}`} {...iconData} />
    ))}

    {circuitPatterns.map((pattern, index) => (
      <CircuitPattern key={`circuit-${index}`} {...pattern} />
    ))}

    <motion.div
      className="absolute inset-0"
      animate={{ opacity: [0.08, 0.15, 0.08] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,255,255,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,107,53,0.10) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}
    />

    <motion.div
      className="absolute top-1/3 left-0 w-full h-px opacity-20"
      animate={{
        background: [
          "linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.4) 50%, transparent 100%)",
          "linear-gradient(90deg, transparent 0%, rgba(255,107,53,0.35) 50%, transparent 100%)",
          "linear-gradient(90deg, transparent 0%, rgba(78,205,196,0.4) 50%, transparent 100%)",
        ],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute top-2/3 left-0 w-full h-px opacity-20"
      animate={{
        background: [
          "linear-gradient(90deg, transparent 0%, rgba(78,205,196,0.4) 50%, transparent 100%)",
          "linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.4) 50%, transparent 100%)",
          "linear-gradient(90deg, transparent 0%, rgba(255,107,53,0.35) 50%, transparent 100%)",
        ],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
    />

    <motion.div
      className="absolute top-0 left-0 w-full h-full opacity-8"
      style={{
        background: `
          linear-gradient(45deg, transparent 0%, rgba(0,255,255,0.08) 1px, transparent 2px),
          linear-gradient(-45deg, transparent 0%, rgba(255,107,53,0.06) 1px, transparent 2px)
        `,
        backgroundSize: '100px 100px'
      }}
      animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export default SkillsBackground;
