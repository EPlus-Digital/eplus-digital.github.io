import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FiLinkedin, FiInstagram, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/eplus-logo.png" 
                alt="Eplus Digital Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold text-white">Eplus Digital</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/eplusdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com/eplusdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://github.com/eplusdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary transition-colors">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  {t.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  {t.footer.links.terms}
                </Link>
              </li>
              <li>
                <Link to="/kvkk" className="hover:text-primary transition-colors">
                  {t.footer.links.kvkk}
                </Link>
              </li>
            </ul>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FiMail size={16} />
                <a href="mailto:info@eplusdigital.com" className="hover:text-primary transition-colors">
                  info@eplusdigital.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone size={16} />
                <a href="tel:+905551234567" className="hover:text-primary transition-colors">
                  +90 555 123 45 67
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
