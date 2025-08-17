import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin } from 'lucide-react';
import { useNavbar } from '../../hooks/useNavbar';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

const Navbar = () => {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu, scrollToSection } = useNavbar();
  const { handleWhatsAppClick } = useWhatsApp('reservation');

  // Debug temporal
  console.log('isMobileMenuOpen:', isMobileMenuOpen);

  const navItems = [
    { name: 'Inicio', id: 'home' },
    { name: 'Menú', id: 'menu' },
    { name: 'Nosotros', id: 'about' },
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
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
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
            <Button 
              variant="primary" 
              size="sm"
              onClick={handleWhatsAppClick}
            >
              Reservar Mesa
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-50"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Icon 
              icon={isMobileMenuOpen ? X : Menu} 
              size={24} 
              color={isScrolled ? '#64748b' : '#ffffff'} 
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div
            className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50 md:hidden"
          >
            <div className="container-custom py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-6 border-t border-gray-200 mt-4">
                <div className="flex items-center space-x-3 text-sm text-gray-600 mb-6">
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
          </div>
        </>
      )}
    </motion.nav>
  );
};

export default Navbar;
