import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiLinkedin, FiInstagram, FiGithub, FiMail, FiPhone, FiArrowRight, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 border-t-2 border-slate-800/80">
      {/* Top Gradient Border - More Prominent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(42,115,255,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Accent Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info - Takes 5 columns */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-primary/20">
                <img 
                  src="/logo-bg.png" 
                  alt="E+ Digital Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">E+ Digital</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-sm">
              {t.footer.description}
            </p>
            
            {/* Contact Info - Clean Design */}
            <div className="space-y-3 mb-8">
              <a
                href="mailto:infoeplusdigital@gmail.com"
                className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm group-hover:shadow-primary/20">
                  <FiMail size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">infoeplusdigital@gmail.com</span>
              </a>
              <a
                href="tel:+905378529502"
                className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm group-hover:shadow-primary/20">
                  <FiPhone size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">+90 537 852 95 02</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-2">
              <div
                className="w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/60 hover:bg-primary/10 hover:scale-110 hover:-rotate-6 transition-all duration-300 shadow-sm hover:shadow-primary/20 cursor-default"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={16} />
              </div>
              <div
                className="w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/60 hover:bg-primary/10 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-sm hover:shadow-primary/20 cursor-default"
                aria-label="Instagram"
              >
                <FiInstagram size={16} />
              </div>
              <div
                className="w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/60 hover:bg-primary/10 hover:scale-110 hover:-rotate-6 transition-all duration-300 shadow-sm hover:shadow-primary/20 cursor-default"
                aria-label="GitHub"
              >
                <FiGithub size={16} />
              </div>
            </div>
          </div>

          {/* Quick Links - Takes 3 columns */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold text-sm mb-6 uppercase tracking-widest text-slate-400">Navigation</h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: t.nav.home },
                { path: '/about', label: t.nav.about },
                { path: '/services', label: t.nav.services },
                { path: '/contact', label: t.nav.contact },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="flex items-center text-slate-400 hover:text-white transition-all duration-300 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-3 transition-opacity duration-300"></div>
                    <FiArrowRight 
                      size={12} 
                      className="mr-2 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" 
                    />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm mb-6 uppercase tracking-widest text-slate-400">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-slate-400 hover:text-white transition-all duration-300 inline-flex items-center group text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-3 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t.footer.links.privacy}</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-slate-400 hover:text-white transition-all duration-300 inline-flex items-center group text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-3 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t.footer.links.terms}</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/kvkk" 
                  className="text-slate-400 hover:text-white transition-all duration-300 inline-flex items-center group text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-3 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t.footer.links.kvkk}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/60 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-slate-500 text-xs font-medium">
              {t.footer.copyright}
            </p>
            <div className="flex items-center space-x-2 text-slate-500 text-xs">
              <span>Made with by <span className="text-primary font-semibold hover:text-cyan-400 transition-colors">E+ Digital</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
