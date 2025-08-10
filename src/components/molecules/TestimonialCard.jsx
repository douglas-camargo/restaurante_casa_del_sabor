import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Icon from '../atoms/Icon';
import OptimizedImage from '../atoms/OptimizedImage';

const TestimonialCard = ({ 
  name, 
  role, 
  content, 
  rating, 
  image, 
  delay = 0,
  ...props 
}) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        icon={Star}
        size={16}
        color={index < rating ? '#f59e0b' : '#d1d5db'}
        className="inline-block"
      />
    ));
  };

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      {...props}
    >
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <OptimizedImage 
            src={image} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center gap-1">
          {renderStars(rating)}
        </div>
      </div>
      
      <blockquote className="text-gray-700 italic leading-relaxed">
        "{content}"
      </blockquote>
    </motion.div>
  );
};

export default TestimonialCard;
