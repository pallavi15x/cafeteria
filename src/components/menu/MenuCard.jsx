import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '../../animations/variants';
import { useFavorites } from '../../context/FavoritesContext';
import { useToast } from '../../context/ToastContext';

const MenuCard = ({ item, onClick }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToast } = useToast();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    const beingFav = !isFavorite(item.id);
    toggleFavorite(item);
    addToast(beingFav ? `Added ${item.name} to favorites ❤️` : `Removed ${item.name} from favorites`, 'success');
  };

  return (
    <motion.div 
      variants={fadeUpVariant}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="bg-white rounded-2xl shadow-glass overflow-hidden group transition-all duration-300 cursor-pointer border border-coffee-beige/30 hover:shadow-xl hover:border-coffee-caramel/50 flex flex-col h-full relative"
    >
      {/* Favorite Button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={handleFavoriteClick}
        className="absolute top-4 left-4 z-30 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm text-xl flex items-center justify-center transition-colors"
      >
        <span className={isFavorite(item.id) ? "text-red-500" : "text-coffee-mocha/40"}>
          {isFavorite(item.id) ? '❤️' : '🤍'}
        </span>
      </motion.button>

      <div className="h-48 overflow-hidden bg-coffee-beige relative">
        <div className="absolute inset-0 bg-coffee-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img 
          src={item.image} 
          alt={item.name} 
          loading="lazy"
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
