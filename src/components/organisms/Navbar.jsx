import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useNavbar } from '../../hooks/useNavbar';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

const Navbar = () => {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu, scrollToSection } = useNavbar();
  const { handleWhatsAppClick } = useWhatsApp('reservation');

  const navItems = [
    { name: 'Inicio', id: 'home' },
    { name: 'Menú', id: 'menu' },
    { name: 'Nosotros', id: 'about' },
    { name: 'Reservas', id: 'reservation' },
    { name: 'Testimonios', id: 'testimonials' },
    { name: 'Contacto', id: 'contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className={`font-serif text-2xl md:text-3xl font-bold ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}>
              La Casa del Sabor
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Icon icon={Phone} size={16} color={isScrolled ? '#64748b' : '#ffffff'} />
              <span className={isScrolled ? 'text-gray-600' : 'text-white'}>
                +58 0424 123 2755
              </span>
            </div>
            <Button 
              variant="primary" 
              size="sm"
              onClick={handleWhatsAppClick}
            >
              Reservar Mesa
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            <Icon 
              icon={isMobileMenuOpen ? X : Menu} 
              size={24} 
              color={isScrolled ? '#64748b' : '#ffffff'} 
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Icon icon={Phone} size={16} />
                  <span>+58 0424 123 2755</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Icon icon={MapPin} size={16} />
                  <span>123 Calle Principal, Ciudad</span>
                </div>
                <Button 
                  variant="primary" 
                  size="sm"
                  className="w-full"
                  onClick={handleWhatsAppClick}
                >
                  Reservar Mesa
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
