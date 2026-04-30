import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-coffee-beige/30 mb-4 group hover:shadow-md transition-shadow"
    >
      {/* Item Image */}
      <div className="w-24 h-24 rounded-xl overflow-hidden bg-coffee-beige flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Item Details */}
      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-xl font-heading font-bold text-coffee-dark">{item.name}</h3>
        <p className="text-coffee-caramel font-bold">${item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center bg-coffee-beige/30 rounded-full px-2 py-1 border border-coffee-beige/50">
        <button 
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 flex items-center justify-center text-coffee-mocha hover:text-coffee-dark font-bold text-xl"
        >
          -
        </button>
        <span className="w-8 text-center font-bold text-coffee-dark">{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center text-coffee-mocha hover:text-coffee-dark font-bold text-xl"
        >
          +
        </button>
      </div>

      {/* Item Total & Remove */}
      <div className="flex items-center gap-6">
        <p className="text-xl font-bold text-coffee-dark min-w-[80px] text-right">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button 
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-coffee-mocha/50 hover:text-red-500 transition-colors"
          title="Remove item"
        >
          🗑️
        </button>
      </div>
    </motion.div>
  );
};

export default CartItem;
