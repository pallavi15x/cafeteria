import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type = 'success', onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: 20, x: '-50%', scale: 0.95 }}
      className={`fixed bottom-8 left-1/2 z-[10000] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[300px] border ${
        type === 'success' 
          ? 'bg-coffee-dark border-coffee-caramel/30 text-coffee-cream' 
          : 'bg-red-900 border-red-500/30 text-white'
      }`}
    >
      <div className="text-2xl">
        {type === 'success' ? '☕' : '⚠️'}
      </div>
      <div className="flex-1 font-semibold text-sm">
        {message}
      </div>
      <button 
        onClick={onClose}
        className="text-coffee-cream/50 hover:text-white transition-colors text-xl font-light"
      >
        ×
      </button>
      
      {/* Progress Bar */}
      <motion.div 
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 3, ease: 'linear' }}
        className="absolute bottom-0 left-0 h-1 bg-coffee-caramel rounded-full"
      />
    </motion.div>
  );
};

export default Toast;
