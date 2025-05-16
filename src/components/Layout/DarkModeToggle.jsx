import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const DarkModeToggle = ({ className = '' }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize from localStorage or system preference
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        return savedMode === 'true';
      }
      // Fall back to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // If system preference exists, use it, otherwise default to dark mode
      return prefersDark !== null ? prefersDark : true;
    }
    // Default to dark mode
    return true;
  });

  useEffect(() => {
    // Update document class when dark mode changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save user preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  return (
    <motion.button
      type="button"
      onClick={toggleDarkMode}
      className={`relative inline-flex items-center justify-center rounded-full p-2 
        text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${className}`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1 }}
    >
      <motion.span
        initial={false}
        animate={{ 
          rotateZ: isDarkMode ? 180 : 0,
          opacity: isDarkMode ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <SunIcon className="h-5 w-5" />
      </motion.span>
      <motion.span
        initial={false}
        animate={{ 
          rotateZ: isDarkMode ? 0 : 180,
          opacity: isDarkMode ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <MoonIcon className="h-5 w-5" />
      </motion.span>
      <span className="sr-only">
        {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </motion.button>
  );
};

DarkModeToggle.propTypes = {
  className: PropTypes.string
};

export default DarkModeToggle;

