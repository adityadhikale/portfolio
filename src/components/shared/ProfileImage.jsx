import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProfileImage = ({ 
  src = null, 
  alt = 'Aditya Dhikale', 
  size = 'large', 
  className = '',
  animate = true
}) => {
  const [imageError, setImageError] = useState(!src);
  
  // Size mappings
  const sizeClasses = {
    small: 'w-24 h-24 text-3xl',
    medium: 'w-40 h-40 text-5xl',
    large: 'w-64 h-64 md:w-80 md:h-80 text-7xl'
  };
  
  const sizeClass = sizeClasses[size] || sizeClasses.large;
  
  // Fallback component with initials
  const FallbackInitials = () => (
    <div className={`${sizeClass} rounded-full flex items-center justify-center overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-800"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`font-bold text-white tracking-wider`}>AD</span>
      </div>
    </div>
  );
  
  // Image with error handling
  const ImageWithFallback = () => (
    <div className={`${sizeClass} rounded-full overflow-hidden relative ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
  
  // Wrapper component depending on whether animation is enabled
  const Wrapper = ({ children }) => {
    if (!animate) return children;
    
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative border-4 border-white dark:border-slate-700 shadow-xl rounded-full"
      >
        {children}
      </motion.div>
    );
  };
  
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired
  };

  return (
    <Wrapper>
      {imageError ? <FallbackInitials /> : <ImageWithFallback />}
    </Wrapper>
  );
};

ProfileImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  animate: PropTypes.bool
};

export default ProfileImage;

