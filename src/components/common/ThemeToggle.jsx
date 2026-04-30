import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`relative w-14 h-7 rounded-full transition-colors duration-500 p-1 flex items-center ${
        isDarkMode ? 'bg-coffee-mocha' : 'bg-coffee-beige'
      }`}
    >
      <motion.div
        animate={{ x: isDarkMode ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="w-5 h-5 bg-coffee-cream rounded-full shadow-md flex items-center justify-center text-[10px]"
      >
        {isDarkMode ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
