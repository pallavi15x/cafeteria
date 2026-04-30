import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

const ItemModal = ({ item, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToast } = useToast();

  if (!isOpen || !item) return null;

  const handleAddToCart = () => {
    addToCart(item, quantity);
    addToast(`Added ${quantity} ${item.name} to cart!`);
    onClose();
    // Reset quantity for next time
    setTimeout(() => setQuantity(1), 300); 
  };

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coffee-dark/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-coffee-cream rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full flex flex-col md:flex-row relative"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white text-coffee-dark p-2 rounded-full backdrop-blur-md transition-colors"
          >
            ❌
          </button>

          {/* Image Section */}
          <div className="md:w-1/2 h-64 md:h-auto bg-coffee-beige relative">
            <img 
              src={item.image} 
              alt={item.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-8 md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-heading font-bold text-coffee-dark pr-4">{item.name}</h3>
                <span className="text-xl font-bold text-coffee-caramel">${item.price.toFixed(2)}</span>
              </div>
              <span className="inline-block px-3 py-1 bg-coffee-beige text-coffee-mocha text-xs font-bold rounded-full mb-4">
                {item.category}
              </span>
              <p className="text-coffee-mocha leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-coffee-beige">
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold text-coffee-dark">Quantity</span>
                <div className="flex items-center bg-white rounded-full shadow-sm border border-coffee-beige">
                  <button 
                    onClick={decrement}
                    className="w-10 h-10 flex items-center justify-center text-coffee-mocha hover:text-coffee-dark active:scale-90 transition-transform"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold text-coffee-dark">{quantity}</span>
                  <button 
                    onClick={increment}
                    className="w-10 h-10 flex items-center justify-center text-coffee-mocha hover:text-coffee-dark active:scale-90 transition-transform"
                  >
                    +
                  </button>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full py-4 bg-coffee-mocha text-coffee-cream font-bold rounded-full hover:bg-coffee-dark active:scale-95 transition-all duration-300 shadow-md flex justify-between px-6"
              >
                <span>Add to Cart</span>
                <span>${(item.price * quantity).toFixed(2)}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ItemModal;
