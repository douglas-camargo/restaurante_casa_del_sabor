import { useState } from 'react';
import { motion } from 'framer-motion';
import GalleryItem from '../molecules/GalleryItem';
import { galleryItems, galleryCategories } from '../../data/galleryData';
import { useScrollTo } from '../../hooks/useScrollTo';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { scrollToElement } = useScrollTo();

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Nuestra <span className="text-gradient">Galería</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre la belleza y el arte culinario de nuestros platos más destacados, capturados en su mejor momento
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {galleryCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <GalleryItem
              key={item.id}
              {...item}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-6xl mb-4">📸</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No hay fotos en esta categoría
            </h3>
            <p className="text-gray-500">
              Prueba seleccionando otra categoría para ver más platos
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Te gustó lo que viste? Ven a probar estos platos en persona
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToElement('contact')}
          >
            Reservar Mesa
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
