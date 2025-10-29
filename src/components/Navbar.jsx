import { useState, useEffect, useRef, memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const injectKeyframes = () => {
  if (typeof document === 'undefined') return;
  if (document.querySelector('#navbar-keyframes')) return;

  const style = document.createElement('style');
  style.id = 'navbar-keyframes';
  style.textContent = `
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient-shift {
      animation: gradientShift 3s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
};

if (typeof window !== 'undefined') {
  injectKeyframes();
}

const Navbar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && isMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[96%] max-w-7xl transition-all duration-500 ease-in-out"
      aria-label="Main navigation"
    >
      <motion.div
        className="relative backdrop-blur-sm bg-black/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/8 via-white/4 to-transparent opacity-30 pointer-events-none" />

        <div className="relative px-6 py-4 flex justify-between items-center font-sans">
          <motion.a
            href="/"
            className="tracking-wide relative z-10 text-2xl font-bold transition-transform duration-300 hover:scale-105"
            aria-label="Go to homepage"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent animate-gradient-shift">
              Blessan Corley
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: -20 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? {} : { delay: index * 0.1, duration: 0.5 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-cyan-50 font-semibold text-base transition-all duration-300 hover:scale-105 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-300 group-hover:w-full rounded-full" />
                  <span className="absolute inset-0 bg-cyan-300/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 transition-colors duration-300 hover:bg-cyan-300/20"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <motion.span
              className="block w-5 h-0.5 bg-white transition-all duration-300"
              animate={isMenuOpen ? { rotate: 45, translateY: 6 } : { rotate: 0, translateY: 0 }}
              transition={shouldReduceMotion ? {} : { duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-white transition-all duration-300"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={shouldReduceMotion ? {} : { duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-white transition-all duration-300"
              animate={isMenuOpen ? { rotate: -45, translateY: -6 } : { rotate: 0, translateY: 0 }}
              transition={shouldReduceMotion ? {} : { duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full mt-2 opacity-100 translate-y-0 visible transition-all duration-300 ease-out"
          role="menu"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: -10, scale: 0.95 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? {} : { opacity: 0, y: -10, scale: 0.95 }}
          transition={shouldReduceMotion ? {} : { duration: 0.2 }}
        >
          <div className="backdrop-blur-sm bg-black/15 border border-white/20 rounded-2xl shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/4 to-transparent opacity-30 pointer-events-none" />
            <ul className="relative flex flex-col py-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  role="none"
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                  transition={shouldReduceMotion ? {} : { delay: index * 0.05, duration: 0.3 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="block px-6 py-4 text-cyan-50 font-semibold text-base transition-colors duration-300 hover:bg-cyan-300/10 border-b border-white/10 last:border-b-0 group"
                    role="menuitem"
                  >
                    <div className="flex items-center justify-between">
                      <span>{item}</span>
                      <motion.span
                        className="text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={shouldReduceMotion ? {} : { x: -10 }}
                        whileHover={shouldReduceMotion ? {} : { x: 5 }}
                        transition={shouldReduceMotion ? {} : { duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      <div className="absolute inset-0 -z-10 rounded-2xl backdrop-blur-sm bg-black/8 pointer-events-none" />
    </nav>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;