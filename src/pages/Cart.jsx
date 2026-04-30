import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import EmptyCart from '../components/cart/EmptyCart';

const Cart = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-28 pb-16 px-4"
      style={{ background: 'linear-gradient(135deg, #FFF8F0 0%, #F5E6D3 100%)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-coffee-dark mb-2">
            Your Cart
          </h1>
          <p className="text-coffee-mocha">
            {cartItems.length > 0
              ? `You have ${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your cart`
              : 'Ready to fill your cup?'
            }
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items List */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-coffee-dark font-heading">
                  Items ({cartItems.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-sm text-coffee-mocha/60 hover:text-red-500 transition-colors underline"
                >
                  Clear all
                </button>
              </div>

              <AnimatePresence mode="popLayout">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <CartSummary />
            </div>

          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
