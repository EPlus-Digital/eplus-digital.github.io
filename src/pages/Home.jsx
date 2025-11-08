import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import {
  FiSmartphone,
  FiLayers,
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
      icon: FiLayers,
      title: t.home.services.design.title,
      description: t.home.services.design.desc,
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

  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'A modern shopping experience with seamless checkout and real-time inventory.',
      technologies: ['React Native', 'Firebase', 'Stripe'],
    },
    {
      title: 'Healthcare Management Platform',
      description: 'Comprehensive solution for patient management and appointment scheduling.',
      technologies: ['Flutter', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Finance Dashboard',
      description: 'Real-time analytics and reporting for financial institutions.',
      technologies: ['React', 'Python', 'PostgreSQL'],
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

  const testimonials = [
    {
      quote: 'Eplus Digital transformed our idea into a beautiful, functional app. Their expertise and dedication are unmatched.',
      author: 'John Doe',
      role: 'CEO, Startup Inc.',
    },
    {
      quote: 'Working with Eplus Digital was a game-changer. They delivered on time and exceeded our expectations.',
      author: 'Jane Smith',
      role: 'Product Manager, Tech Corp',
    },
  ];

  const technologies = [
    'React Native',
    'Flutter',
    'Firebase',
    'AWS',
    'Node.js',
    'TypeScript',
  ];

  return (
    <div className="bg-white">
      <Hero />

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.home.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.home.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.home.why.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {technologies.map((tech, index) => (
              <div key={index} className="text-gray-700 font-semibold text-lg">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.home.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
              >
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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
            {t.home.cta.title}
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.home.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
