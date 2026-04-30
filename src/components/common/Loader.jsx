import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-coffee-cream">
      <div className="relative flex flex-col items-center">
        {/* Steam rising */}
        <div className="flex gap-2 mb-1">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -20], 
                opacity: [0, 1, 0],
                x: [0, i % 2 === 0 ? 5 : -5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.4,
                ease: "easeOut"
              }}
              className="w-1.5 h-6 bg-coffee-caramel/40 rounded-full blur-[1px]"
            />
          ))}
        </div>

        {/* Coffee Cup */}
        <div className="relative w-20 h-16 border-4 border-coffee-dark rounded-b-2xl rounded-t-sm">
          {/* Filling Coffee */}
          <motion.div 
            initial={{ height: "0%" }}
            animate={{ height: "80%" }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute bottom-0 left-0 right-0 bg-coffee-dark opacity-90 mx-0.5 rounded-b-xl"
          />
          {/* Handle */}
          <div className="absolute top-2 -right-6 w-6 h-8 border-4 border-coffee-dark rounded-r-xl" />
        </div>
        
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-6 text-coffee-dark font-heading font-bold tracking-widest uppercase text-sm"
        >
          Brewing...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
