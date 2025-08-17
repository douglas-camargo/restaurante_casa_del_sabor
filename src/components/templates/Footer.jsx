import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Icon from '../atoms/Icon';
import { footerLinks, socialLinks, restaurantInfo } from '../../data/footerData';
import { useScrollTo } from '../../hooks/useScrollTo';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { scrollToElement } = useScrollTo();
  const { handleWhatsAppClick } = useWhatsApp('reservation');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              {restaurantInfo.name}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {restaurantInfo.description}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon icon={MapPin} size={16} color="#9ca3af" />
                <span className="text-gray-300 text-sm">{restaurantInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon={Phone} size={16} color="#9ca3af" />
                <span className="text-gray-300 text-sm">{restaurantInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon={Mail} size={16} color="#9ca3af" />
                <span className="text-gray-300 text-sm">{restaurantInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon={Clock} size={16} color="#9ca3af" />
                <span className="text-gray-300 text-sm">{restaurantInfo.hours}</span>
              </div>
            </div>
          </motion.div>

          {/* Restaurant Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Restaurante</h4>
            <ul className="space-y-2">
              {footerLinks.restaurant.map((link, index) => (
                <li key={index}>
                  {link.name === 'Reservas' ? (
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToElement(link.href.replace('#', ''))}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Síguenos:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} size={18} color="#ffffff" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} {restaurantInfo.name}. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desarrollado con ❤️ para crear experiencias gastronómicas inolvidables
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
