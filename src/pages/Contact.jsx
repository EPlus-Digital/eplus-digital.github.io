import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Intersection Observer for scroll animations
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -100px 0px',
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          if (observerRef.current) {
            observerRef.current.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-in-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isInViewport = rect.top < viewportHeight * 1.5 && rect.bottom > -100;
        
        if (isInViewport) {
          setTimeout(() => {
            el.classList.add('fade-in-visible');
          }, 100);
        } else if (observerRef.current) {
          observerRef.current.observe(el);
        }
      });
    };

    const timer = setTimeout(() => {
      observeElements();
      setTimeout(observeElements, 200);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    const message = language === 'en'
      ? 'Thank you for your message! We will get back to you soon.'
      : 'Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağız.';
    alert(message);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                {t.contact.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gray-800/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="group relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 fade-in-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                    <FiMessageCircle className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {language === 'en' ? 'Send us a Message' : 'Bize Mesaj Gönderin'}
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder={language === 'en' ? 'Your name' : 'Adınız'}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                      placeholder={language === 'en' ? 'Tell us about your project...' : 'Projeniz hakkında bize bilgi verin...'}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group/btn w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105"
                  >
                    {t.contact.form.send}
                    <FiSend className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="group relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 fade-in-on-scroll" style={{ transitionDelay: '0.15s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {language === 'en' ? 'Get in Touch' : 'İletişime Geçin'}
                  </h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {language === 'en'
                      ? "We're here to help! Reach out to us through any of the following channels, and we'll get back to you as soon as possible."
                      : 'Yardımcı olmak için buradayız! Aşağıdaki kanallardan herhangi biriyle bizimle iletişime geçin, en kısa sürede size dönüş yapacağız.'}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:infoeplusdigital@gmail.com"
                  className="group relative flex items-center gap-4 bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 fade-in-on-scroll"
                  style={{ transitionDelay: '0.2s' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-4 w-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                      <FiMail className="text-white" size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {t.contact.info.email}
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-primary transition-colors">
                        infoeplusdigital@gmail.com
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+905378529502"
                  className="group relative flex items-center gap-4 bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 fade-in-on-scroll"
                  style={{ transitionDelay: '0.3s' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-4 w-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                      <FiPhone className="text-white" size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {t.contact.info.phone}
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-primary transition-colors">
                        +90 537 852 95 02
                      </p>
                    </div>
                  </div>
                </a>

                <div className="group relative flex items-center gap-4 bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 fade-in-on-scroll" style={{ transitionDelay: '0.4s' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-4 w-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                      <FiMapPin className="text-white" size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {t.contact.info.address}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Trabzon, Turkey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

        /* Scroll-based animations */
        .fade-in-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-on-scroll.fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Contact;
