import { motion } from 'framer-motion';

const Icon = ({ 
  icon: IconComponent, 
  size = 24, 
  className = '', 
  color = 'currentColor',
  animated = false,
  ...props 
}) => {
  const iconClasses = `inline-block ${className}`;
  
  const iconElement = (
    <IconComponent 
      size={size} 
      color={color} 
      className={iconClasses}
      {...props}
    />
  );
  
  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {iconElement}
      </motion.div>
    );
  }
  
  return iconElement;
};

export default Icon;
