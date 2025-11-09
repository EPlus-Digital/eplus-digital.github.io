import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/Hero';
import {
  FiSmartphone,
  FiCpu,
  FiGlobe,
  FiTrendingUp,
  FiCheckCircle,
  FiZap,
  FiCode,
  FiMessageCircle,
} from 'react-icons/fi';

const Home = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: FiSmartphone,
      title: t.home.services.mobile.title,
      description: t.home.services.mobile.desc,
      link: '/services',
    },
    {
      icon: FiCpu,
      title: t.home.services.ai.title,
      description: t.home.services.ai.desc,
      link: '/services',
    },
    {
      icon: FiGlobe,
      title: t.home.services.web.title,
      description: t.home.services.web.desc,
      link: '/services',
    },
    {
      icon: FiTrendingUp,
      title: t.home.services.consulting.title,
      description: t.home.services.consulting.desc,
      link: '/services',
    },
  ];

  const whyChoose = [
    {
      icon: FiCheckCircle,
      title: t.home.why.quality,
      description: t.home.why.qualityDesc,
    },
    {
      icon: FiZap,
      title: t.home.why.fast,
      description: t.home.why.fastDesc,
    },
    {
      icon: FiCode,
      title: t.home.why.modern,
      description: t.home.why.modernDesc,
    },
    {
      icon: FiMessageCircle,
      title: t.home.why.transparent,
      description: t.home.why.transparentDesc,
    },
  ];

  return (
    <div className="bg-gray-900 w-full overflow-x-hidden">
      <Hero />

      {/* Services Preview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-800 relative overflow-x-hidden overflow-y-visible">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0 animate-fade-in-up">
              {t.home.services.title}
            </h2>
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto animate-fade-in-up-delay-1"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-primary/50 transition-all hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up"
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 gradient-primary rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white w-5 h-5 sm:w-7 sm:h-7" size={28} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{service.description}</p>
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/0 to-cyan-500/0 group-hover:from-primary/10 group-hover:to-cyan-500/10 transition-all opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 relative overflow-x-hidden overflow-y-visible">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0 animate-fade-in-up">
              {t.home.why.title}
            </h2>
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto animate-fade-in-up-delay-1"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 max-w-6xl mx-auto">
            {whyChoose.map((item, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up px-2 sm:px-0"
                style={{
                  animationDelay: `${0.3 + index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg shadow-primary/50">
                  <item.icon className="text-white w-6 h-6 sm:w-8 sm:h-8" size={32} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-fade-in-up-delay-1 {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default Home;
