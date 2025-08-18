import { motion } from 'framer-motion';
import Icon from '../atoms/Icon';
import OptimizedImage from '../atoms/OptimizedImage';
import { aboutValues, restaurantStats, aboutContent } from '../../data/aboutData';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              {aboutContent.title} <span className="text-gradient">{aboutContent.subtitle}</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {aboutContent.description}
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {aboutContent.story}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {restaurantStats.slice(0, 2).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Chef preparando plato gourmet"
                className="w-full h-96 md:h-[500px] object-cover"
                width={1000}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Card - Ajustado para móviles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs lg:max-w-xs md:max-w-[280px] sm:max-w-[260px] xs:max-w-[240px]"
            >
              <div className="flex items-center space-x-3 mb-3">
                <OptimizedImage 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Chef"
                  className="w-12 h-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
                <div>
                  <div className="font-semibold text-gray-900">Chef Carlos</div>
                  <div className="text-sm text-gray-600">Chef Ejecutivo</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "La cocina es el arte de transformar ingredientes simples en experiencias extraordinarias."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Nuestros <span className="text-gradient">Valores</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada aspecto de nuestra experiencia gastronómica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <Icon icon={value.icon} size={32} color="#ed7519" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
