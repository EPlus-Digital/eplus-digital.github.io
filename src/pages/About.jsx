import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  FiTarget,
  FiEye,
  FiZap,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiCode,
  FiDatabase,
  FiCloud,
  FiCpu,
  FiBarChart2,
  FiServer,
  FiSmartphone,
  FiGitBranch,
} from 'react-icons/fi';

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: FiZap,
      title: t.about.values.innovation,
      description: language === 'en' 
        ? 'We stay ahead of the curve with the latest technologies and best practices.'
        : 'En son teknolojiler ve en iyi uygulamalarla çizginin önünde kalıyoruz.',
    },
    {
      icon: FiShield,
      title: t.about.values.reliability,
      description: language === 'en'
        ? 'We deliver consistent, high-quality solutions you can depend on.'
        : 'Güvenebileceğiniz tutarlı, yüksek kaliteli çözümler sunuyoruz.',
    },
    {
      icon: FiUsers,
      title: t.about.values.partnership,
      description: language === 'en'
        ? 'We build long-term relationships based on trust and mutual success.'
        : 'Güven ve karşılıklı başarıya dayalı uzun vadeli ilişkiler kuruyoruz.',
    },
    {
      icon: FiTrendingUp,
      title: t.about.values.growth,
      description: language === 'en'
        ? 'We help our clients grow by delivering scalable, future-proof solutions.'
        : 'Ölçeklenebilir, geleceğe dönük çözümler sunarak müşterilerimizin büyümesine yardımcı oluyoruz.',
    },
  ];

  const techStack = [
    // AI & Data Science
    { name: 'Python', icon: FiCpu, category: 'ai' },
    { name: 'PyTorch', icon: FiCpu, category: 'ai' },
    { name: 'TensorFlow', icon: FiCpu, category: 'ai' },
    { name: 'Scikit-Learn', icon: FiCpu, category: 'ai' },
    { name: 'MLflow', icon: FiCpu, category: 'ai' },
    { name: 'PySpark', icon: FiCpu, category: 'ai' },
    { name: 'Machine Learning', icon: FiCpu, category: 'ai' },
    { name: 'Deep Learning', icon: FiCpu, category: 'ai' },
    { name: 'NLP', icon: FiCpu, category: 'ai' },
    { name: 'LLM', icon: FiCpu, category: 'ai' },
    { name: 'RAG', icon: FiCpu, category: 'ai' },
    { name: 'Vector Databases', icon: FiDatabase, category: 'ai' },
    { name: 'XAI', icon: FiCpu, category: 'ai' },
    { name: 'Data Analysis', icon: FiBarChart2, category: 'ai' },
    { name: 'Data Visualization', icon: FiBarChart2, category: 'ai' },
    { name: 'Power BI', icon: FiBarChart2, category: 'ai' },
    
    // Backend & API
    { name: 'FastAPI', icon: FiServer, category: 'backend' },
    { name: 'Flask', icon: FiServer, category: 'backend' },
    { name: 'Go (Golang)', icon: FiServer, category: 'backend' },
    { name: 'PostgreSQL', icon: FiDatabase, category: 'backend' },
    { name: 'SQL', icon: FiDatabase, category: 'backend' },
    { name: 'RabbitMQ', icon: FiServer, category: 'backend' },
    { name: 'Docker', icon: FiCloud, category: 'backend' },
    { name: 'CI/CD', icon: FiCloud, category: 'backend' },
    { name: 'MLOps', icon: FiCloud, category: 'backend' },
    { name: 'AWS', icon: FiCloud, category: 'backend' },
    { name: 'GCP', icon: FiCloud, category: 'backend' },
    { name: 'OOP', icon: FiCode, category: 'backend' },
    { name: 'RESTful API', icon: FiServer, category: 'backend' },
    
    // Mobile & Web
    { name: 'Flutter (Dart)', icon: FiSmartphone, category: 'mobile' },
    { name: 'React.js', icon: FiCode, category: 'mobile' },
    { name: 'JavaScript', icon: FiCode, category: 'mobile' },
    { name: 'Responsive UI/UX', icon: FiSmartphone, category: 'mobile' },
    { name: 'Mobile App Development', icon: FiSmartphone, category: 'mobile' },
    { name: 'API Integration', icon: FiCode, category: 'mobile' },
    
    // Project Management
    { name: 'Agile/Scrum', icon: FiGitBranch, category: 'pm' },
    { name: 'Agile Software Development', icon: FiGitBranch, category: 'pm' },
    { name: 'Sprint Planning', icon: FiGitBranch, category: 'pm' },
    { name: 'Trello/Jira', icon: FiGitBranch, category: 'pm' },
    { name: 'Team Coordination', icon: FiGitBranch, category: 'pm' },
    { name: 'Git/GitHub', icon: FiGitBranch, category: 'pm' },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-900/98 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                {t.about.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.about.story.content}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-16 bg-gray-800/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {t.about.story.title}
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {t.about.story.content}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiTarget className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.about.mission.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.about.mission.content}
                </p>
              </div>
            </div>
            <div className="group relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiEye className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.about.vision.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.about.vision.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 bg-gray-800/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.about.values.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-primary/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-cyan-500 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="text-primary group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'en' ? 'Our Tech Stack' : 'Teknoloji Yığınımız'}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Modern tools and technologies we use to build exceptional digital products.'
                : 'Olağanüstü dijital ürünler inşa etmek için kullandığımız modern araçlar ve teknolojiler.'}
            </p>
          </div>

          {/* Tech Stack Categories */}
          <div className="max-w-7xl mx-auto space-y-12">
            {/* AI & Data Science */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiCpu className="text-primary" size={24} />
                <h3 className="text-2xl font-bold text-white">
                  {language === 'en' ? 'Artificial Intelligence & Data Science' : 'Yapay Zeka & Veri Bilimi'}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.filter(tech => tech.category === 'ai').map((tech, index) => (
                  <div
                    key={index}
                    className="group px-4 py-2.5 bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-primary/50 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <tech.icon className="text-primary opacity-70 group-hover:opacity-100 transition-opacity" size={16} />
                      <span>{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend & API */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiServer className="text-primary" size={24} />
                <h3 className="text-2xl font-bold text-white">
                  {language === 'en' ? 'Backend / API Development' : 'Backend / API Geliştirme'}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.filter(tech => tech.category === 'backend').map((tech, index) => (
                  <div
                    key={index}
                    className="group px-4 py-2.5 bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-primary/50 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <tech.icon className="text-primary opacity-70 group-hover:opacity-100 transition-opacity" size={16} />
                      <span>{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile & Web */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiSmartphone className="text-primary" size={24} />
                <h3 className="text-2xl font-bold text-white">
                  {language === 'en' ? 'Mobile & Web Development' : 'Mobil & Web Geliştirme'}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.filter(tech => tech.category === 'mobile').map((tech, index) => (
                  <div
                    key={index}
                    className="group px-4 py-2.5 bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-primary/50 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <tech.icon className="text-primary opacity-70 group-hover:opacity-100 transition-opacity" size={16} />
                      <span>{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Management */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiGitBranch className="text-primary" size={24} />
                <h3 className="text-2xl font-bold text-white">
                  {language === 'en' ? 'Project Management & Methodologies' : 'Proje Yönetimi & Metodolojiler'}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.filter(tech => tech.category === 'pm').map((tech, index) => (
                  <div
                    key={index}
                    className="group px-4 py-2.5 bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-primary/50 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <tech.icon className="text-primary opacity-70 group-hover:opacity-100 transition-opacity" size={16} />
                      <span>{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-gray-800/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.about.team.title}
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our team consists of experienced developers, designers, and product strategists who are passionate about creating exceptional digital experiences.'
                : 'Ekibimiz, olağanüstü dijital deneyimler yaratmaya tutkulu deneyimli geliştiriciler, tasarımcılar ve ürün stratejistlerinden oluşmaktadır.'}
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 md:p-12 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-primary/30">
                <FiUsers className="text-white" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === 'en' ? 'Growing Team' : 'Büyüyen Ekip'}
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'We are a dedicated team of professionals committed to delivering excellence in every project. Our collaborative approach ensures that we bring the best solutions to our clients.'
                  : 'Her projede mükemmelliği sunmaya kararlı, profesyonel ve adanmış bir ekibiz. İşbirlikçi yaklaşımımız, müşterilerimize en iyi çözümleri getirmemizi sağlar.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
