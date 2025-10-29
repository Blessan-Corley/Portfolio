import { motion } from "framer-motion";
import { memo, useState, useEffect } from "react";
import TextType from "./TextType";
import Aurora from "./Aurora";
import GradientText from "./GradientText";
import { HoverBorderGradient } from './HoverBorderGradient';

const slideFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

const slideFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.3 }
  }
};

const MemoizedAurora = memo(Aurora);

const MemoizedGlowEffect = memo(() => (
  <motion.div
    className="absolute w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[160px] opacity-10 top-[-100px] left-[10%] -z-10 pointer-events-none"
    animate={{
      x: [0, 50, -50, 0],
      y: [0, -30, 30, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    aria-hidden="true"
  />
));

MemoizedGlowEffect.displayName = 'MemoizedGlowEffect';

const Hero = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    
    const handleChange = () => setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-black text-white pt-24 md:pt-32 py-12 md:py-20 w-full overflow-hidden min-h-screen flex items-center"
      aria-labelledby="hero-heading"
    >
      {!reduceMotion && (
        <>
          <MemoizedAurora
            colorStops={["#1a1a40", "#ff6a00", "#1a1a40"]}
            blend={0.4}
            amplitude={0.8}
            speed={0.4}
            aria-hidden="true"
          />
          <MemoizedGlowEffect />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full gap-8">
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          animate="visible"
          className="md:w-1/2 w-full"
        >
          <h1 
            id="hero-heading"
            className="sr-only"
          >
            Hi, I'm Blessan Corley — AI & Data Science Student and Full Stack Developer
          </h1>

          <GradientText
            colors={["#ffffffff", "#375d7fff", "#785e42ff", "#ffffffff"]}
            animationSpeed={reduceMotion ? 0 : 7}
            showBorder={false}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="font-extrabold font-sans">
              Hi, I'm Blessan
            </span>
          </GradientText>

          <div className="text-xl md:text-2xl text-gray-300 font-medium mb-6 font-mono min-h-[60px]">
            <TextType
              text={["AI&DS Student | Full Stack Developer"]}
              typingSpeed={reduceMotion ? 0 : 60}
              pauseDuration={4000}
              showCursor={!reduceMotion}
              cursorCharacter="_"
              className="text-xl md:text-2xl text-gray-300 font-medium font-mono"
            />
          </div>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg font-medium mb-8">
            3rd-year AI&DS student who actually enjoys solving LeetCode problems (okay, maybe not all of them).
            Building stuff with Python, React, and whatever shiny new framework catches my eye.
            Currently on a quest to understand AWS without breaking the bank.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <HoverBorderGradient
              as="a"
              href="#contact"
              containerClassName="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              className="bg-black/80 backdrop-blur-sm font-semibold px-8 py-4 text-pink-400"
              duration={reduceMotion ? 0 : 2}
            >
              Let's Talk Code
            </HoverBorderGradient>

            <HoverBorderGradient
              as="a"
              href="#projects"
              containerClassName="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              className="bg-black/80 backdrop-blur-sm font-semibold px-8 py-4 text-purple-400"
              duration={reduceMotion ? 0 : 2}
              clockwise={false}
            >
              See What I've Built
            </HoverBorderGradient>
          </div>
        </motion.div>

        <motion.div
          variants={slideFromRight}
          initial="hidden"
          animate="visible"
          className="md:w-1/2 w-full flex justify-center md:justify-end"
        >
          <div className="relative">
            {!imageLoaded && (
              <div 
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-full animate-pulse"
                aria-hidden="true"
              />
            )}

            <motion.img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="Blessan Corley, full stack developer and AI student"
              loading="lazy"
              decoding="async"
              className={`w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] object-cover object-center shadow-2xl rounded-full transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              whileHover={!reduceMotion ? { scale: 1.05 } : {}}
            />

            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-xl -z-10"
              animate={!reduceMotion ? {
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              } : {}}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;