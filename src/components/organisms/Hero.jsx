import { motion } from 'framer-motion';
import { ChevronDown, Play, Star } from 'lucide-react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { heroContent, heroStats, heroFeatures } from '../../data/heroData';
import { useScrollTo } from '../../hooks/useScrollTo';
import { layoutClasses, typographyClasses } from '../../utils/tailwindClasses';

const Hero = () => {
  const { scrollToElement } = useScrollTo();

  return (
    <section 
      id="home"
      className="relative min-h-screen flex-center overflow-hidden w-full"
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
      role="banner"
      aria-label="Página principal del restaurante"
    >
      {/* Schema.org markup para SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "La Casa del Sabor",
          "description": "Restaurante gourmet especializado en cocina tradicional venezolana",
          "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          "url": "https://restaurante-casa-del-sabor.vercel.app",
          "telephone": "+58 0424 123 2755",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "VE",
            "addressLocality": "Caracas"
          },
          "openingHours": "Mo-Su 12:00-23:00",
          "priceRange": "$$",
          "servesCuisine": ["Venezuelan", "Latin American", "Gourmet"],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "156"
          }
        })}
      </script>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-20 left-4 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-primary-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-4 md:right-20 w-28 h-28 md:w-40 md:h-40 bg-primary-600/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className={`${layoutClasses.container} text-center relative z-10 w-full`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="badge mb-8 md:mb-6 mt-16 md:mt-0"
            role="status"
            aria-label="Certificación de calidad"
          >
            <Icon icon={Star} size={16} color="#ffffff" aria-hidden="true" />
            <span className="text-sm font-medium">Restaurante 5 Estrellas</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`${typographyClasses.heading1} text-white mb-6 leading-tight px-4`}
          >
            {heroContent.title}{' '}
            <span className="text-gradient">{heroContent.subtitle}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${typographyClasses.body} text-gray-200 mb-8 max-w-2xl mx-auto px-4`}
          >
            {heroContent.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4"
            role="group"
            aria-label="Acciones principales"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToElement('reservation')}
              className="w-full sm:w-auto"
              aria-label="Reservar mesa en el restaurante"
            >
              {heroContent.ctaPrimary}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToElement('menu')}
              className="w-full sm:w-auto"
              aria-label="Ver menú del restaurante"
            >
              {heroContent.ctaSecondary}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto px-4"
            role="region"
            aria-label="Estadísticas del restaurante"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1" aria-label={`${stat.number} ${stat.label}`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToElement('menu')}
          className="text-white hover:text-primary-300 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Desplazarse hacia abajo para ver el menú"
        >
          <Icon icon={ChevronDown} size={32} aria-hidden="true" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
