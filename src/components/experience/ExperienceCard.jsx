import { motion, AnimatePresence } from "framer-motion";

const ExperienceCard = ({ experience, isActive }) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        key={experience.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto px-6"
      >
        <div className="flex flex-col lg:flex-row lg:gap-16 items-center lg:items-start">
          <div className="lg:w-1/3 flex flex-col items-center lg:items-end mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center lg:text-right"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #ff6b35, #f7931e, #ffdd00, #4fc3f7)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 200%'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {experience.period}
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-0.5 mx-auto lg:ml-auto lg:mr-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #ff7b54, #42a5f5)'
                }}
              />
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span className="inline-block px-3 py-1 text-sm font-medium text-gray-300 bg-white/10 rounded-full border border-white/20">
                  {experience.duration}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.4 },
                  y: { duration: 0.4, delay: 0.4 },
                  backgroundPosition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                }}
                className="text-2xl md:text-3xl font-bold"
                style={{
                  background: 'linear-gradient(90deg, #ff7b54, #ffb347, #ffd700, #4fc3f7, #42a5f5)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 200%'
                }}
              >
                {experience.role}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-lg md:text-xl font-medium text-gray-300"
              >
                {experience.company}
              </motion.p>

              <motion.div
                className="space-y-3 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                {experience.description.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                      style={{
                        background: 'linear-gradient(45deg, #ff7b54, #42a5f5)'
                      }}
                    />
                    <p className="text-white/80 text-base leading-relaxed">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ExperienceCard;
