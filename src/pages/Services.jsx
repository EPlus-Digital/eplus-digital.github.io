import React from 'react';
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
  const { t } = useLanguage();

  const services = [
    {
      icon: FiSmartphone,
      title: t.services.mobile.title,
      description: t.services.mobile.desc,
      features: t.services.mobile.features,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FiCpu,
      title: t.services.ai.title,
      description: t.services.ai.desc,
      features: t.services.ai.features,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FiGlobe,
      title: t.services.web.title,
      description: t.services.web.desc,
      features: t.services.web.features,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FiTrendingUp,
      title: t.services.consulting.title,
      description: t.services.consulting.desc,
      features: t.services.consulting.features,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.services.title}
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive digital solutions to help your business thrive
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <service.icon className="text-white" size={36} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <FiCheck className="text-primary mr-3 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div
                    className={`aspect-video bg-gradient-to-br ${service.color} rounded-xl shadow-xl flex items-center justify-center`}
                  >
                    <service.icon className="text-white opacity-20" size={120} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.services.cta}
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
