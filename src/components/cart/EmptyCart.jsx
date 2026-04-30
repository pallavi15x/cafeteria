import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <div className="text-8xl mb-6 opacity-80">☕</div>
      <h2 className="text-3xl font-heading font-bold text-coffee-dark mb-4">Your cup is empty</h2>
      <p className="text-coffee-mocha mb-8 max-w-md">
        It looks like you haven't added any of our delicious brews to your cart yet.
      </p>
      <Link to="/menu">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-coffee-caramel text-coffee-cream font-bold rounded-full shadow-glass hover:bg-coffee-dark transition-colors duration-300"
        >
          Explore Menu
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default EmptyCart;
