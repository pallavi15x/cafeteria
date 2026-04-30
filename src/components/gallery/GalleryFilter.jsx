import React from 'react';
import { motion } from 'framer-motion';

const filters = [
  { id: 'all', label: 'All', emoji: '✨' },
  { id: 'day', label: 'Daylight', emoji: '☀️' },
  { id: 'evening', label: 'Evening', emoji: '🌆' },
  { id: 'night', label: 'Night Vibes', emoji: '🌙' },
];

const GalleryFilter = ({ activeFilter, setActiveFilter }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
            activeFilter === filter.id
              ? 'bg-coffee-dark text-coffee-cream border-coffee-dark shadow-lg'
              : 'bg-transparent text-coffee-mocha border-coffee-beige hover:border-coffee-caramel hover:text-coffee-caramel'
          }`}
        >
          <span className="mr-2">{filter.emoji}</span>
          {filter.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default GalleryFilter;
