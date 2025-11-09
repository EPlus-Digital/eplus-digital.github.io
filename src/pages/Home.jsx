import React from 'react';
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
    <div className="bg-gray-900">
      <Hero />

      {/* Services Preview */}
      <section className="py-24 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.home.services.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-primary/50 transition-all hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 to-cyan-500/0 group-hover:from-primary/10 group-hover:to-cyan-500/10 transition-all opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.home.why.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg shadow-primary/50">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
