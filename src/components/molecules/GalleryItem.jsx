import { motion } from 'framer-motion';
import OptimizedImage from '../atoms/OptimizedImage';

const GalleryItem = ({ id, title, description, image, category, featured, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <OptimizedImage
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          cssImage='w-full'
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Destacado
            </span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed">{description}</p>
      </div>
      
      {/* Quick Info (visible by default) */}
      <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-lg font-bold text-white drop-shadow-lg">{title}</h3>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
