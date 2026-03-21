import { motion } from "framer-motion";
import ExperienceAnimatedBackground from './ExperienceAnimatedBackground';
import { TextGenerateEffect } from './TextGenerateEffect';
import ExperienceCard from './experience/ExperienceCard';
import { experiences } from '../data/experience';
import { useExperienceTimeline } from '../hooks/useExperienceTimeline';

const Experience = () => {
  const { containerRef, currentIndex, isInExperience } = useExperienceTimeline(experiences.length);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative bg-black text-white w-full overflow-hidden min-h-screen"
      style={{ fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      <ExperienceAnimatedBackground className="z-0" />
      <div className="relative z-10 h-screen flex flex-col">
        <div className="pt-20 pb-10 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center px-6"
          >
            <div className="text-4xl md:text-5xl font-bold mb-6">
              <div className="flex flex-wrap justify-center items-baseline gap-3 md:gap-4">
                <TextGenerateEffect words="My" className="text-white" filter={true} duration={0.8} />
                <motion.span
                  className="inline-block font-bold"
                  style={{
                    background: 'linear-gradient(90deg, #ff7b54, #ffb347, #ffd700, #4fc3f7, #42a5f5)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%'
                  }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Experience
                </motion.span>
              </div>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl">
              The timeline behind the coursework, internship, shipped products, and problem-solving grind
            </p>
          </motion.div>
        </div>

        <div className="flex-1 flex items-start justify-center pt-12 min-h-0">
          {isInExperience ? (
            <div className="w-full" style={{ minHeight: '60vh' }}>
              <ExperienceCard experience={experiences[currentIndex]} isActive={true} />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white/60 flex-1 flex items-center justify-center"
            >
              <p className="text-lg">Scroll to explore my experience</p>
            </motion.div>
          )}
        </div>

        <div className="flex-shrink-0 pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex justify-center items-center gap-4"
          >
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <span className="text-white/60 text-sm">Scroll to navigate</span>
              <motion.div
                animate={{ y: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-white/60"
              />
            </div>
            <div className="flex gap-2">
              {experiences.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: index === currentIndex ? '#ffffff' : 'rgba(255,255,255,0.3)'
                  }}
                  animate={{
                    scale: index === currentIndex ? 1.2 : 1
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
