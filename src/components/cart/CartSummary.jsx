import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

const CartSummary = () => {
  const { cartTotal, clearCart, cartItems } = useCart();
  const { addToast } = useToast();
  const [ordered, setOrdered] = useState(false);

  const TAX_RATE = 0.08;
  const subtotal = cartTotal;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const handleCheckout = () => {
    setOrdered(true);
    clearCart();
    addToast('🎉 Order placed successfully! Your brew is on its way!', 'success');
  };

  if (ordered) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-sm border border-coffee-beige/30 p-8 text-center sticky top-28"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-heading font-bold text-coffee-dark mb-2">Order Placed!</h3>
        <p className="text-coffee-mocha mb-6">Your delicious brew is being prepared. Thank you for choosing Velvet Brew!</p>
        <Link to="/menu">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-coffee-caramel text-white font-bold rounded-full hover:bg-coffee-dark transition-colors duration-300"
          >
            Order More ☕
          </motion.button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl shadow-sm border border-coffee-beige/30 p-8 sticky top-28"
    >
      <h3 className="text-2xl font-heading font-bold text-coffee-dark mb-6 pb-4 border-b border-coffee-beige/30">
        Order Summary
      </h3>

      {/* Line items */}
      <div className="space-y-3 mb-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between text-sm text-coffee-mocha">
            <span>{item.name} × {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 border-t border-coffee-beige/30 pt-4 mb-6">
        <div className="flex justify-between text-coffee-mocha">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-coffee-mocha">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-coffee-dark border-t border-coffee-beige/30 pt-3">
          <span>Total</span>
          <span className="text-coffee-caramel">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleCheckout}
        className="w-full py-4 bg-coffee-dark text-coffee-cream font-bold rounded-full shadow-lg hover:bg-coffee-caramel transition-colors duration-300 mb-3 text-lg"
      >
        Proceed to Checkout →
      </motion.button>

      <Link to="/menu" className="block">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 border-2 border-coffee-beige text-coffee-mocha font-semibold rounded-full hover:border-coffee-caramel hover:text-coffee-caramel transition-colors duration-300"
        >
          ← Continue Shopping
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default CartSummary;
