import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Icon from '../atoms/Icon';
import OptimizedImage from '../atoms/OptimizedImage';

const MenuItem = ({ 
  name, 
  description, 
  price, 
  image, 
  category, 
  popular = false,
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      {...props}
    >
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          cssImage="w-full"
          width={400}
          height={192}
        />
        {popular && (
          <div className="absolute top-3 left-3 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Icon icon={Star} size={12} />
            Popular
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-primary-600 font-bold text-lg">${price}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>
        </div>
        
        {category && (
          <p className="text-sm text-primary-600 font-medium mb-2">
            {category}
          </p>
        )}
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default MenuItem;
