import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { fadeUpVariant, staggerContainer } from '../../animations/variants';

// Import images
import espressoImg from '../../assets/images/espresso.png';
import latteImg from '../../assets/images/latte.png';
import cappuccinoImg from '../../assets/images/cappuccino.png';
import mochaImg from '../../assets/images/mocha.png';

const coffeeItems = [
  { id: 1, name: 'Velvet Espresso', description: 'A bold, rich shot of our signature dark roast.', price: 3.50, image: espressoImg },
  { id: 2, name: 'Vanilla Latte', description: 'Smooth espresso with steamed milk and vanilla.', price: 4.50, image: latteImg },
  { id: 3, name: 'Classic Cappuccino', description: 'Equal parts espresso, steamed milk, and froth.', price: 4.00, image: cappuccinoImg },
  { id: 4, name: 'Dark Mocha', description: 'Espresso blended with rich chocolate and milk.', price: 5.00, image: mochaImg },
];

const FeaturedCoffee = () => {
  const { cartItems, setCartItems, addToCart } = useCart();
  const { addToast } = useToast();

  const handleAddToCart = (item) => {
    if(addToCart) {
      addToCart(item, 1);
    } else {
      setCartItems([...cartItems, item]);
    }
    addToast(`Added 1 ${item.name} to cart!`);
  };

  return (
    <section className="py-24 bg-coffee-dark dark:bg-coffee-dark text-coffee-cream">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Signature Brews</h2>
          <p className="text-coffee-mocha max-w-2xl mx-auto">Hand-crafted with locally sourced, perfectly roasted beans.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {coffeeItems.map((item) => (
            <motion.div 
              key={item.id}
              variants={fadeUpVariant}
              whileHover={{ y: -10 }}
              className="bg-coffee-mocha/20 dark:bg-coffee-mocha/40 rounded-2xl shadow-glass overflow-hidden group transition-all duration-300"
            >
              <div className="h-48 overflow-hidden bg-coffee-beige">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Coffee' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2 text-coffee-cream">{item.name}</h3>
                <p className="text-sm text-coffee-beige/80 mb-4 h-10">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-coffee-caramel">${item.price.toFixed(2)}</span>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="px-4 py-2 bg-coffee-mocha text-coffee-cream rounded-full text-sm font-semibold hover:bg-coffee-dark active:scale-95 transition-all duration-300 shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCoffee;
