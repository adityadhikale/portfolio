import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    setIsDark(saved !== 'false');
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('darkMode', String(next));
  };

  return (
    <motion.button
      onClick={toggle}
      className="relative p-2 rounded-xl glass transition-colors duration-300 hover:bg-accent-500/10"
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isDark ? (
          <MoonIcon className="w-5 h-5 text-accent-400" />
        ) : (
          <SunIcon className="w-5 h-5 text-amber-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
