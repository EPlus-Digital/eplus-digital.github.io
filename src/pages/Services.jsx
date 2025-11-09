import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  FiSmartphone,
  FiCpu,
  FiGlobe,
  FiTrendingUp,
  FiCheck,
  FiArrowRight,
} from 'react-icons/fi';

const Services = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: FiSmartphone,
      title: t.services.mobile.title,
      description: t.services.mobile.desc,
      features: t.services.mobile.features,
    },
    {
      icon: FiCpu,
      title: t.services.ai.title,
      description: t.services.ai.desc,
      features: t.services.ai.features,
    },
    {
      icon: FiGlobe,
      title: t.services.web.title,
      description: t.services.web.desc,
      features: t.services.web.features,
    },
    {
      icon: FiTrendingUp,
      title: t.services.consulting.title,
      description: t.services.consulting.desc,
      features: t.services.consulting.features,
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-900/98 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                {t.services.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
              {language === 'en'
                ? 'Comprehensive digital solutions to help your business thrive'
                : 'İşletmenizin büyümesine yardımcı olacak kapsamlı dijital çözümler'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 bg-gray-800/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up"
                style={{
                  animationDelay: `${0.2 + index * 0.15}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                    <service.icon className="text-white" size={28} />
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                            <FiCheck className="text-white" size={12} />
                          </div>
                        </div>
                        <span className="text-gray-300 ml-3 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Accent Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-cyan-500/20 opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              {language === 'en' ? 'Ready to Get Started?' : 'Başlamaya Hazır mısınız?'}
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
              {language === 'en'
                ? "Let's discuss how we can help bring your digital vision to life."
                : 'Dijital vizyonunuzu hayata geçirmenize nasıl yardımcı olabileceğimizi görüşelim.'}
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105 text-lg animate-fade-in-up-delay-2"
            >
              {t.services.cta}
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
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

        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
};

export default Services;
