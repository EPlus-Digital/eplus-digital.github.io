import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle, FiCheckCircle, FiAlertCircle, FiLoader, FiX } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }
  const toastTimeoutRef = useRef(null);
  const lastSubmissionTimeRef = useRef(0);

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

  useEffect(() => {
    // Initialize EmailJS with public key from environment variable
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast) {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
      toastTimeoutRef.current = setTimeout(() => {
        setToast(null);
      }, 5000);
    }
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, [toast]);

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  const hideToast = () => {
    setToast(null);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Rate limiting: Prevent too many submissions (max 1 per 10 seconds)
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTimeRef.current;
    const minTimeBetweenSubmissions = 10000; // 10 seconds
    
    if (timeSinceLastSubmission < minTimeBetweenSubmissions) {
      const remainingTime = Math.ceil((minTimeBetweenSubmissions - timeSinceLastSubmission) / 1000);
      showToast(
        'error',
        language === 'en'
          ? `Please wait ${remainingTime} second${remainingTime > 1 ? 's' : ''} before submitting again.`
          : `Lütfen tekrar göndermeden önce ${remainingTime} saniye bekleyin.`
      );
      return;
    }
    
    // Get EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      const missingVars = [];
      if (!serviceId) missingVars.push('VITE_EMAILJS_SERVICE_ID');
      if (!templateId) missingVars.push('VITE_EMAILJS_TEMPLATE_ID');
      if (!publicKey) missingVars.push('VITE_EMAILJS_PUBLIC_KEY');
      
      showToast(
        'error',
        language === 'en'
          ? `Email service is not configured. Missing: ${missingVars.join(', ')}. Please check your .env file and restart the dev server.`
          : `E-posta servisi yapılandırılmamış. Eksik: ${missingVars.join(', ')}. Lütfen .env dosyanızı kontrol edin ve dev server'ı yeniden başlatın.`
      );
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'infoeplusdigital@gmail.com',
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Update last submission time
      lastSubmissionTimeRef.current = Date.now();

      // Success - show toast notification
      showToast(
        'success',
        language === 'en'
          ? 'Thank you for your message! We will get back to you soon.'
          : 'Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağız.'
      );

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast(
        'error',
        language === 'en'
          ? 'Sorry, there was an error sending your message. Please try again later or contact us directly at infoeplusdigital@gmail.com'
          : 'Üzgünüz, mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin veya doğrudan infoeplusdigital@gmail.com adresinden bizimle iletişime geçin.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed bottom-4 right-4 z-50 max-w-md w-full mx-4 toast-notification toast-${toast.type}`}>
          <div className={`relative flex items-start gap-4 p-5 rounded-2xl border backdrop-blur-xl shadow-2xl ${
            toast.type === 'success'
              ? 'bg-gradient-to-br from-green-500/20 via-green-500/10 to-green-500/5 border-green-500/30 text-green-100'
              : 'bg-gradient-to-br from-red-500/20 via-red-500/10 to-red-500/5 border-red-500/30 text-red-100'
          }`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:16px_16px] rounded-2xl opacity-50"></div>
            
            {/* Icon */}
            <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
              toast.type === 'success'
                ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30'
                : 'bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-500/30'
            }`}>
              {toast.type === 'success' ? (
                <FiCheckCircle className="text-white" size={20} />
              ) : (
                <FiAlertCircle className="text-white" size={20} />
              )}
            </div>
            
            {/* Message */}
            <div className="relative z-10 flex-1 pt-1">
              <p className="text-sm font-medium leading-relaxed">{toast.message}</p>
            </div>
            
            {/* Close Button */}
            <button
              onClick={hideToast}
              className={`relative z-10 flex-shrink-0 p-1.5 rounded-lg transition-all hover:bg-white/10 ${
                toast.type === 'success'
                  ? 'text-green-300 hover:text-green-100'
                  : 'text-red-300 hover:text-red-100'
              }`}
              aria-label="Close"
            >
              <FiX size={18} />
            </button>
            
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-2xl overflow-hidden">
              <div
                className={`h-full ${
                  toast.type === 'success'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                    : 'bg-gradient-to-r from-red-500 to-rose-500'
                } toast-progress`}
              ></div>
            </div>
          </div>
        </div>
      )}

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
                    disabled={isSubmitting}
                    className={`group/btn w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <FiLoader className="mr-2 animate-spin" />
                        {language === 'en' ? 'Sending...' : 'Gönderiliyor...'}
                      </>
                    ) : (
                      <>
                        {t.contact.form.send}
                        <FiSend className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
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

        /* Toast Notification Animations */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(100%);
          }
        }

        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        .toast-notification {
          animation: slideInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .toast-notification.toast-hiding {
          animation: slideOutDown 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }

        .toast-progress {
          animation: progress 5s linear forwards;
        }

        @media (max-width: 640px) {
          .toast-notification {
            bottom: 1rem;
            right: 1rem;
            left: 1rem;
            max-width: none;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
