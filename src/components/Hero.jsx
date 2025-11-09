import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiArrowRight, FiStar, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  const { t, language } = useLanguage();
  
  // Subheadline variations - only subheadline will change
  const subheadlineVariations = useMemo(() => language === 'en'
    ? [
        "E+ Digital helps startups and enterprises build exceptional mobile apps, faster.",
        "Transform your business with cutting-edge mobile solutions and AI technology.",
        "From concept to launch, we deliver scalable and innovative digital products.",
        "Your trusted partner for mobile app development and digital transformation.",
      ]
    : [
        "E+ Digital, girişimlerin ve kuruluşların olağanüstü mobil uygulamaları daha hızlı geliştirmesine yardımcı olur.",
        "İşletmenizi son teknoloji mobil çözümler ve AI teknolojisi ile dönüştürün.",
        "Konseptten lansaşım, ölçeklenebilir ve yenilikçi dijital ürünler sunuyoruz.",
        "Mobil uygulama geliştirme ve dijital dönüşüm için güvenilir ortağınız.",
      ], [language]);
  
  const [subheadlineIndex, setSubheadlineIndex] = useState(0);
  const [subheadlineText, setSubheadlineText] = useState('');
  const [isTypingSubheadline, setIsTypingSubheadline] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Typewriter effect for subheadline only
  useEffect(() => {
    const currentSubheadline = subheadlineVariations[subheadlineIndex];
    let currentIndex = 0;
    setSubheadlineText('');
    setIsTypingSubheadline(true);
    
    const typeInterval = setInterval(() => {
      if (currentIndex < currentSubheadline.length) {
        setSubheadlineText(currentSubheadline.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTypingSubheadline(false);
        clearInterval(typeInterval);
        
        // Wait before switching to next subheadline
        setTimeout(() => {
          setSubheadlineIndex((prev) => (prev + 1) % subheadlineVariations.length);
        }, 4000);
      }
    }, 35);
    
    return () => clearInterval(typeInterval);
  }, [subheadlineIndex, subheadlineVariations]);
  
  // Reset when language changes
  useEffect(() => {
    setSubheadlineIndex(0);
    setSubheadlineText('');
    setIsTypingSubheadline(true);
  }, [language]);

  // Check if mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll down on click
  const handleScrollDown = () => {
    const nextSection = document.querySelector('section:not(:first-child)') || 
                       document.querySelector('main > div:first-child') ||
                       document.body.children[1];
    
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll by viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  // Generate static star positions - mostly edges, some in center
  const stars = useMemo(() => {
    return Array.from({ length: 120 }, (_, i) => {
      // Distribute stars: 70% edges, 30% center
      let left, top;
      const zone = Math.random();
      
      if (zone < 0.2) {
        // Left edge (0-25%)
        left = Math.random() * 25;
        top = Math.random() * 100;
      } else if (zone < 0.4) {
        // Right edge (75-100%)
        left = 75 + Math.random() * 25;
        top = Math.random() * 100;
      } else if (zone < 0.6) {
        // Top edge (0-25%)
        top = Math.random() * 25;
        left = Math.random() * 100;
        // Prefer edges horizontally for top/bottom edge stars
        if (left > 30 && left < 70 && Math.random() > 0.3) {
          left = Math.random() < 0.5 ? Math.random() * 30 : 70 + Math.random() * 30;
        }
      } else if (zone < 0.8) {
        // Bottom edge (75-100%)
        top = 75 + Math.random() * 25;
        left = Math.random() * 100;
        // Prefer edges horizontally for top/bottom edge stars
        if (left > 30 && left < 70 && Math.random() > 0.3) {
          left = Math.random() < 0.5 ? Math.random() * 30 : 70 + Math.random() * 30;
        }
      } else {
        // Center area (30-70% both directions) - fewer stars
        left = 30 + Math.random() * 40;
        top = 30 + Math.random() * 40;
      }
      
      return {
        id: i,
        left: `${left}%`,
        top: `${top}%`,
        size: Math.random() * 3 + 1, // 1-4px
        opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8
        delay: Math.random() * 3, // For subtle twinkle effect
      };
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-x-hidden overflow-y-visible bg-gray-900 pt-6 sm:pt-10 md:pt-12 lg:pt-16 w-full">
      {/* Dark Background with Gradient - matching navbar */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/98 to-gray-900"></div>
      
      {/* Static Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Static Background Shapes - subtle accent colors - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        <div className="absolute top-40 right-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      </div>

      {/* Static Stars - reduced on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.slice(0, isMobile ? 60 : 120).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white star-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 sm:pt-8 md:pt-12 pb-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary text-xs sm:text-sm font-medium animate-slide-down-delay-1">
            <FiStar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Leading Mobile App Development</span>
            <span className="xs:hidden">Mobile App Development</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0 animate-slide-down-delay-2">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              {t.home.hero.headline}
            </span>
          </h1>
          <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed min-h-[3rem] xs:min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem] lg:min-h-[5rem] flex items-center justify-center px-4 sm:px-0 animate-slide-down-delay-3">
            <p className="w-full">
              {subheadlineText}
              <span className={`inline-block w-0.5 h-[1em] bg-primary ml-1 sm:ml-2 align-middle ${showCursor && isTypingSubheadline && subheadlineText && subheadlineText.length < subheadlineVariations[subheadlineIndex]?.length ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}>|</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0 animate-slide-down-delay-4">
            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all transform hover:scale-105 shadow-2xl shadow-primary/50 hover:shadow-primary/70 text-base sm:text-lg"
            >
              {t.home.hero.cta1}
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 text-base sm:text-lg"
            >
              {t.home.hero.cta2}
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="relative z-20 flex flex-col items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 animate-slide-down-delay-5">
            <button
              onClick={handleScrollDown}
              className="scroll-indicator-wrapper cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full mb-2 sm:mb-3"
              aria-label="Scroll down"
            >
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm bg-white/5 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="scroll-dot"></div>
              </div>
            </button>
            <div className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer" onClick={handleScrollDown}>
              <span className="text-[10px] xs:text-xs font-medium tracking-wider uppercase">Scroll</span>
              <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm">
                <FiChevronDown className="animate-bounce w-3 h-3 sm:w-4 sm:h-4" />
                <FiChevronDown className="animate-bounce w-3 h-3 sm:w-4 sm:h-4" style={{ animationDelay: '0.1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .star-twinkle {
          animation: twinkle 3s infinite ease-in-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down-delay-1 {
          animation: slideDown 0.8s ease-out 0.1s both;
        }
        
        .animate-slide-down-delay-2 {
          animation: slideDown 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-down-delay-3 {
          animation: slideDown 0.8s ease-out 0.4s both;
        }
        
        .animate-slide-down-delay-4 {
          animation: slideDown 0.8s ease-out 0.6s both;
        }
        
        .animate-slide-down-delay-5 {
          animation: slideDown 0.8s ease-out 0.8s both;
        }
        
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(12px);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        
        .scroll-indicator-wrapper {
          animation: pulse 2s infinite ease-in-out;
          transition: transform 0.3s ease;
        }
        
        .scroll-indicator-wrapper:hover {
          transform: translateY(5px);
        }
        
        .scroll-indicator-wrapper:active {
          transform: translateY(8px) scale(0.95);
        }
        
        .scroll-dot {
          width: 3px;
          height: 8px;
          background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.5) 100%);
          border-radius: 9999px;
          margin-top: 6px;
          animation: scrollDown 2s infinite ease-in-out;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .scroll-dot {
            width: 4px;
            height: 10px;
            margin-top: 8px;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
        }
        
        .scroll-indicator-wrapper:hover .scroll-dot {
          background: linear-gradient(180deg, #2A73FF 0%, rgba(42, 115, 255, 0.5) 100%);
          box-shadow: 0 0 12px rgba(42, 115, 255, 0.5);
          animation-duration: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
