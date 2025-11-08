import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiExternalLink, FiSmartphone } from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'A modern shopping experience with seamless checkout and real-time inventory management.',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      problem: 'Business needed a mobile-first shopping experience to reach more customers.',
      solution: 'Built a cross-platform app with React Native, integrated payment processing, and real-time inventory sync.',
      result: 'Increased mobile sales by 150% and improved customer satisfaction scores.',
      image: null,
    },
    {
      title: 'Healthcare Management Platform',
      description: 'Comprehensive solution for patient management, appointment scheduling, and medical records.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'AWS'],
      problem: 'Healthcare providers needed a unified platform to manage patients and appointments.',
      solution: 'Developed a secure, HIPAA-compliant platform with real-time scheduling and patient portal.',
      result: 'Reduced administrative time by 40% and improved patient engagement.',
      image: null,
    },
    {
      title: 'Finance Dashboard',
      description: 'Real-time analytics and reporting platform for financial institutions.',
      technologies: ['React', 'Python', 'PostgreSQL', 'D3.js'],
      problem: 'Financial teams needed better visibility into their data and performance metrics.',
      solution: 'Created an interactive dashboard with real-time data visualization and custom reports.',
      result: 'Improved decision-making speed by 60% and enhanced data-driven insights.',
      image: null,
    },
    {
      title: 'Fitness Tracking App',
      description: 'Personalized workout plans and progress tracking for fitness enthusiasts.',
      technologies: ['React Native', 'GraphQL', 'Firebase', 'Charts'],
      problem: 'Users wanted a personalized fitness app that adapts to their goals and progress.',
      solution: 'Built an AI-powered app with personalized workout plans and comprehensive progress tracking.',
      result: 'Achieved 50k+ downloads and 4.8-star rating in app stores.',
      image: null,
    },
    {
      title: 'Food Delivery Platform',
      description: 'On-demand food delivery service with real-time tracking and multiple restaurant options.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io'],
      problem: 'Restaurants needed a platform to reach customers and manage deliveries efficiently.',
      solution: 'Developed a multi-vendor platform with real-time order tracking and driver management.',
      result: 'Processed 10k+ orders monthly and expanded to 5 cities.',
      image: null,
    },
    {
      title: 'Educational Learning Platform',
      description: 'Interactive e-learning platform with video courses, quizzes, and progress tracking.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Video Streaming'],
      problem: 'Educational institution needed a platform to deliver courses online.',
      solution: 'Built a comprehensive LMS with video streaming, interactive quizzes, and student progress tracking.',
      result: 'Enabled 5k+ students to access courses remotely with 95% satisfaction rate.',
      image: null,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.portfolio.title}
            </h1>
            <p className="text-xl text-gray-600">
              Explore our successful projects and see how we've helped businesses achieve their goals
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100"
              >
                <div className="aspect-video bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <FiSmartphone className="text-white opacity-30" size={80} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4 space-y-2">
                    <div>
                      <span className="text-sm font-semibold text-gray-700">
                        {t.portfolio.problem}:
                      </span>
                      <p className="text-sm text-gray-600">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">
                        {t.portfolio.solution}:
                      </span>
                      <p className="text-sm text-gray-600">{project.solution}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">
                        {t.portfolio.result}:
                      </span>
                      <p className="text-sm text-gray-600 font-medium text-primary">
                        {project.result}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us
            <FiExternalLink className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
