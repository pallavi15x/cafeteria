import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '../../animations/variants';

const MenuCard = ({ item, onClick }) => {
  return (
    <motion.div 
      variants={fadeUpVariant}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="bg-white rounded-2xl shadow-glass overflow-hidden group transition-all duration-300 cursor-pointer border border-coffee-beige/30 hover:shadow-xl hover:border-coffee-caramel/50 flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden bg-coffee-beige relative">
        <div className="absolute inset-0 bg-coffee-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-coffee-dark shadow-sm">
          ${item.price.toFixed(2)}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-bold mb-2 text-coffee-dark group-hover:text-coffee-caramel transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-coffee-mocha mb-4 flex-grow line-clamp-2">
          {item.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-coffee-beige/50 flex justify-end">
          <span className="text-coffee-caramel font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Details <span>→</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
