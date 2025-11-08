import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  FiTarget,
  FiEye,
  FiZap,
  FiShield,
  FiUsers,
  FiTrendingUp,
} from 'react-icons/fi';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: FiZap,
      title: t.about.values.innovation,
      description: 'We stay ahead of the curve with the latest technologies and best practices.',
    },
    {
      icon: FiShield,
      title: t.about.values.reliability,
      description: 'We deliver consistent, high-quality solutions you can depend on.',
    },
    {
      icon: FiUsers,
      title: t.about.values.partnership,
      description: 'We build long-term relationships based on trust and mutual success.',
    },
    {
      icon: FiTrendingUp,
      title: t.about.values.growth,
      description: 'We help our clients grow by delivering scalable, future-proof solutions.',
    },
  ];

  const techStack = [
    'React Native',
    'Flutter',
    'React',
    'Node.js',
    'TypeScript',
    'Firebase',
    'AWS',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'GraphQL',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-600">
              {t.about.story.content}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.about.story.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t.about.story.content}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                <FiTarget className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.about.mission.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.about.mission.content}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                <FiEye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.about.vision.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.about.vision.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.about.values.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Tech Stack
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-lg shadow-md border border-gray-100 text-gray-700 font-semibold"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.about.team.title}
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Our team consists of experienced developers, designers, and product strategists
              who are passionate about creating exceptional digital experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">T{member}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Team Member {member}
                  </h3>
                  <p className="text-gray-600">Role Description</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
