
import { useState, useEffect, useRef } from 'react';

// Inject global keyframes only once (outside component to avoid re-creation)
const injectKeyframes = () => {
  if (typeof document === 'undefined') return;
  if (document.querySelector('#navbar-keyframes')) return; // Prevent duplication

  const style = document.createElement('style');
  style.id = 'navbar-keyframes';
  style.textContent = `
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
  `;
  document.head.appendChild(style);
};

// Call once on module load (safe in SSR if guarded)
if (typeof window !== 'undefined') {
  injectKeyframes();
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change (optional: integrate with router later)
  const closeMenu = () => setIsMenuOpen(false);

  // Accessibility: close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && isMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Accessibility: lock scroll or manage focus (basic version)
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

  // Navigation items
  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[96%] max-w-7xl transition-all duration-500 ease-in-out"
      aria-label="Main navigation"
    >
      {/* Main Navbar Container */}
      <div className="relative backdrop-blur-sm bg-black/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Glass reflection overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/8 via-white/4 to-transparent opacity-30 pointer-events-none" />

        <div className="relative px-6 py-4 flex justify-between items-center font-sans">
          {/* Logo */}
          <a
            href="/"
            className="tracking-wide relative z-10 text-2xl font-bold transition-transform duration-300 hover:scale-105"
            aria-label="Go to homepage"
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent bg-[200%_100%] animate-gradient-shift">
              Blessan Corley
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-cyan-50 font-semibold text-base transition-all duration-300 hover:scale-105 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-300 group-hover:w-full rounded-full" />
                  <span className="absolute inset-0 bg-cyan-300/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 transition-colors duration-300 hover:bg-cyan-300/20"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full mt-2 opacity-100 translate-y-0 visible transition-all duration-300 ease-out"
          role="menu"
        >
          <div className="backdrop-blur-sm bg-black/15 border border-white/20 rounded-2xl shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/4 to-transparent opacity-30 pointer-events-none" />
            <ul className="relative flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item} role="none">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="block px-6 py-4 text-cyan-50 font-semibold text-base transition-colors duration-300 hover:bg-cyan-300/10 border-b border-white/10 last:border-b-0 group"
                    role="menuitem"
                  >
                    <div className="flex items-center justify-between">
                      <span>{item}</span>
                      <span className="text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Background blur layer (optional, may be redundant) */}
      <div className="absolute inset-0 -z-10 rounded-2xl backdrop-blur-sm bg-black/8 pointer-events-none" />
    </nav>
  );
};

// Add animation via Tailwind (requires config) or use global CSS class
// If you can't use Tailwind arbitrary values, define this in global CSS:
// .animate-gradient-shift { animation: gradientShift 3s ease-in-out infinite; }

export default Navbar;