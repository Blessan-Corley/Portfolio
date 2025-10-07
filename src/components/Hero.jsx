import { motion } from "framer-motion";

import TextType from "./TextType";
import Aurora from "./Aurora";
import GradientText from "./GradientText";
import { HoverBorderGradient } from './HoverBorderGradient'; 
import profileImage from '/images/Blessan_profile.jpg';



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

const Hero = () => {
    return (
        <section
            id="home"
            className="relative bg-black text-white pt-24 md:pt-32 py-12 md:py-20 w-full overflow-hidden"
        >
            {/* Aurora Background */}
            <Aurora
                colorStops={["#1a1a40", "#ff6a00", "#1a1a40"]}
                blend={0.4}
                amplitude={0.8}
                speed={0.4}
            />
            {/* Minimal animated glow background */}
            <motion.div
                className="absolute w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[160px] opacity-10 top-[-100px] left-[10%] -z-10 pointer-events-none"
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -30, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Main Layout */}
            <div className="relative z-10  max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full">

                {/* LEFT: Text Section */}
                <motion.div
                    variants={slideFromLeft}
                    initial="hidden"
                    animate="visible"
                    className="md:w-1/2 w-full mb-10 md:mb-0 md:pr-8"
                >
                    <GradientText
                        colors={["#ffffffff", "#375d7fff", "#785e42ff", "#ffffffff"]}
                        animationSpeed={7}
                        showBorder={false}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        <span style={{ fontWeight: 800, fontFamily: "Inter, sans-serif" }}>
                            Hi, I'm Blessan
                        </span>
                    </GradientText>

                    <div className="text-xl md:text-2xl text-gray-300 font-medium mb-6 font-mono">
                        <TextType
                            text={["AI&DS Student | Full Stack Developer"]}
                            typingSpeed={60}
                            pauseDuration={4000}
                            showCursor={true}
                            cursorCharacter="_"
                            className="text-xl md:text-2xl text-gray-300 font-medium font-mono"
                        />

                        {/* <TypeWriter text="Software Engineer at BNP Paribas" /> */}
                    </div>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg font-medium">
                    3rd-year AI&DS student who actually enjoys solving LeetCode problems (okay, maybe not all of them).
                    Building stuff with Python, React, and whatever shiny new framework catches my eye.
                    Currently on a quest to understand AWS without breaking the bank.
                    </p>

                    {/* Aceternity UI Animated Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                        <HoverBorderGradient
                            as="a"
                            href="#contact"
                            containerClassName="rounded-full"
                            className="bg-black/80 backdrop-blur-sm font-semibold px-8 py-4"
                            style={{
                                fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                                fontWeight: 600,
                                textDecoration: 'none',
                                color: '#ec4899' 
                            }}
                            duration={2}
                        >
                            Let's Talk Code
                        </HoverBorderGradient>

                        <HoverBorderGradient
                            as="a"
                            href="#projects"
                            containerClassName="rounded-full"
                            className="bg-black/80 backdrop-blur-sm font-semibold px-8 py-4"
                            style={{
                                fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                                fontWeight: 600,
                                textDecoration: 'none',
                                color: '#8b5cf6' 
                            }}
                            duration={2}
                            clockwise={false}
                        >
                            See What I've Built
                        </HoverBorderGradient>
                    </div>

                </motion.div>

                {/* RIGHT: Image Section */}
                <motion.div
                    variants={slideFromRight}
                    initial="hidden"
                    animate="visible"
                    className="md:w-1/2 w-full flex justify-center md:justify-end"
                >
                    <div className="relative">
                        <img
                            src={profileImage}
                            alt="Blessan Corley"
                            className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] object-cover object-center shadow-2xl rounded-full"
                            style={{
                                filter: 'contrast(1.05) saturate(1.1)',
                                imageRendering: 'auto',
                                WebkitBackfaceVisibility: 'hidden',
                                backfaceVisibility: 'hidden',
                                transform: 'translateZ(0)',
                            }}
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-xl -z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;