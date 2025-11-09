import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out overflow-x-hidden ${
        isScrolled 
          ? 'bg-gray-900/98 backdrop-blur-xl border-b border-gray-800/60 shadow-2xl shadow-black/20' 
          : 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/40 shadow-lg shadow-black/10'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group relative"
          >
            <div className="relative transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110 group-active:scale-95 will-change-transform">
              <img 
                src="/logo-bg.png" 
                alt="E+ Digital Logo" 
                className="h-11 w-auto object-contain relative z-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
              <div className="absolute inset-0 bg-primary/30 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] blur-xl"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent hidden sm:block relative overflow-hidden">
              <span className="block transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:opacity-0 absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                E+ Digital
              </span>
              <span className="block transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                E+ Digital
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-5 py-2.5 text-sm font-medium group"
                style={{
                  animation: `fadeInDown 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Hover Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-cyan-500/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-95 group-hover:scale-100"></span>
                
                {/* Active Underline */}
                {isActive(item.path) ? (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-primary rounded-full animate-pulse"></span>
                ) : (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-full group-hover:w-3/4 transition-all duration-500 ease-out"></span>
                )}
                
                {/* Text */}
                <span
                  className={`relative z-10 inline-block transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-primary transform scale-105'
                      : 'text-gray-300 group-hover:text-white group-hover:transform group-hover:scale-105'
                  }`}
                >
                  {item.label}
                </span>
                
                {/* Active Indicator Glow */}
                {isActive(item.path) && (
                  <span className="absolute inset-0 bg-primary/5 rounded-xl blur-md animate-pulse"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="relative px-4 py-3 text-sm font-semibold text-gray-300 bg-gray-800/60 border border-gray-700/60 rounded-md overflow-hidden group transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:text-white hover:shadow-lg hover:shadow-primary/20"
            >
              <span className="relative z-10 flex items-center space-x-1.5 transition-transform duration-300 group-active:scale-95">
                <span className="inline-block transition-transform duration-300 group-hover:scale-110">{language === 'en' ? 'TR' : 'EN'}</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-2.5 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:bg-gray-800/60 active:scale-95 group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <FiMenu 
                  size={22} 
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <FiX 
                  size={22} 
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`}
                />
              </div>
              <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-4'
          }`}
        >
          <div className="py-4 border-t border-gray-800/60 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 transform ${
                  isActive(item.path)
                    ? 'text-primary bg-gradient-to-r from-primary/20 to-cyan-500/20 border-l-4 border-primary shadow-lg shadow-primary/20 scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/60 hover:translate-x-2 hover:scale-105 active:scale-95'
                }`}
                style={{
                  animation: isMenuOpen ? `slideInLeft 0.4s ease-out ${index * 0.1 + 0.2}s both` : 'none'
                }}
              >
                <span className="flex items-center space-x-2">
                  {isActive(item.path) && (
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                  )}
                  <span>{item.label}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
