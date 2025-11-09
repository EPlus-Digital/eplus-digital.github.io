import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiArrowRight, FiStar } from 'react-icons/fi';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Dark Background with Gradient - matching navbar */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/98 to-gray-900"></div>
      
      {/* Static Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Static Background Shapes - subtle accent colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      </div>

      {/* Static Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary text-sm font-medium">
            <FiStar />
            <span>Leading Mobile App Development</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              {t.home.hero.headline}
            </span>
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed min-h-[4.5rem] md:min-h-[5rem] lg:min-h-[6rem] flex items-center justify-center">
            <p className="w-full">
              {subheadlineText}
              <span className={`inline-block w-0.5 h-[1em] bg-primary ml-2 align-middle ${showCursor && isTypingSubheadline && subheadlineText && subheadlineText.length < subheadlineVariations[subheadlineIndex]?.length ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}>|</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all transform hover:scale-105 shadow-2xl shadow-primary/50 hover:shadow-primary/70 text-lg"
            >
              {t.home.hero.cta1}
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 text-lg"
            >
              {t.home.hero.cta2}
            </Link>
          </div>

          {/* Key Focus Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-all">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400 text-sm">Cutting-edge solutions</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-all">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
              <p className="text-gray-400 text-sm">Excellence in code</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-all">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Partnership</h3>
              <p className="text-gray-400 text-sm">Your success is ours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="scroll-indicator-wrapper">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm bg-white/5 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="scroll-dot"></div>
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
        }
        
        .scroll-dot {
          width: 4px;
          height: 10px;
          background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.5) 100%);
          border-radius: 9999px;
          margin-top: 8px;
          animation: scrollDown 2s infinite ease-in-out;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
        }
        
        .scroll-indicator-wrapper:hover .scroll-dot {
          background: linear-gradient(180deg, #2A73FF 0%, rgba(42, 115, 255, 0.5) 100%);
          box-shadow: 0 0 12px rgba(42, 115, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Hero;
