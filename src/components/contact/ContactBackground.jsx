import { motion } from 'framer-motion';

const ContactBackground = ({ particles }) => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-black" />

    <motion.div
      className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-gray-800/8 to-gray-700/6 rounded-full blur-3xl"
      animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-900/10 to-gray-800/8 rounded-full blur-3xl"
      animate={{
        x: [0, -25, 0],
        y: [0, 30, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-zinc-800/6 to-stone-800/4 rounded-full blur-3xl"
      animate={{
        x: [0, 20, -15, 0],
        y: [0, -15, 10, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>

    <motion.div
      className="absolute inset-0"
      animate={{ opacity: [0.02, 0.04, 0.02] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    />
  </div>
);

export default ContactBackground;
