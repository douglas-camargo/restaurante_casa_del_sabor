import { motion } from 'framer-motion';
import { buttonClasses } from '../../utils/tailwindClasses';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const variants = {
    primary: buttonClasses.primary,
    secondary: buttonClasses.secondary,
    outline: buttonClasses.outline,
    ghost: buttonClasses.ghost
  };
  
  const classes = `${buttonClasses.base} ${variants[variant]} ${buttonClasses.sizes[size]} ${className}`;
  
  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
