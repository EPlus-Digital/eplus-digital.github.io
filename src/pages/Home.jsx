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
  FiArrowRight,
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

      {/* Featured Projects */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.home.projects.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-primary/50 transition-all hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="aspect-video bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="text-white text-5xl font-bold opacity-20 group-hover:opacity-30 transition-opacity">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary font-medium hover:text-cyan-400 transition-colors"
                  >
                    View Case Study →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.home.why.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Technologies */}
      <section className="py-16 bg-gray-900 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 font-semibold text-lg hover:border-primary/50 hover:text-primary transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.home.testimonials.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20"
              >
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.home.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into exceptional digital experiences?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl text-lg"
          >
            {t.home.cta.button}
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
