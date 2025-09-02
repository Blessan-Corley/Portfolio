import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[96%] max-w-7xl transition-all duration-500 ease-in-out">
      {/* Main Navbar Container with Subtle Glass Morphism */}
      <div className="relative backdrop-filter backdrop-blur-sm bg-black/10 border border-white/20 rounded-2xl shadow-2xl">
        
        {/* Subtle glass reflection overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/8 via-white/4 to-transparent opacity-30"></div>
        
        {/* Navbar content */}
        <div className="relative px-6 py-4 flex justify-between items-center font-[Inter,sans-serif]">
          
          {/* Logo/Name with animated gradient */}
          <a 
            href="/blessan-portfolio"
            className="tracking-wide relative z-10 transition-all duration-300 hover:scale-105"
            style={{
              fontSize: '1.75rem',
              lineHeight: '2.25rem',
              fontWeight: '700',
              margin: '0',
              textDecoration: 'none'
            }}
          >
            <span 
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 100%',
                animation: 'gradientShift 3s ease-in-out infinite'
              }}
            >
              Blessan Corley
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-8">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative transition-all duration-300 hover:scale-105 group"
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#E6F9FF', 
                    textDecoration: 'none'
                  }}
                >
                  {item}
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  {/* Hover glow effect */}
                  <span className="absolute inset-0 bg-cyan-300/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button with glass effect */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl transition-all duration-300 hover:bg-cyan-300/20"
            aria-label="Toggle menu"
          >
            <span
              className={`transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#ffffff',
                display: 'block',
                filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))'
              }}
            ></span>
            <span
              className={`transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#ffffff',
                display: 'block',
                filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))'
              }}
            ></span>
            <span
              className={`transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#ffffff',
                display: 'block',
                filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))'
              }}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu with enhanced glass morphism */}
      <div
        className={`md:hidden absolute top-full left-0 w-full mt-2 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="backdrop-filter backdrop-blur-sm bg-black/15 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Subtle glass reflection overlay for mobile menu */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/4 to-transparent opacity-30"></div>
          
          <ul className="relative flex flex-col py-2">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="block px-6 py-4 transition-all duration-300 hover:bg-cyan-300/10 border-b border-white/10 last:border-b-0 group"
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#E6F9FF', 
                    textDecoration: 'none'
                  }}
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

      {/* Subtle background blur layer */}
      <div className="absolute inset-0 -z-10 rounded-2xl backdrop-filter backdrop-blur-sm bg-black/8"></div>
    </nav>
  );
};

export default Navbar;