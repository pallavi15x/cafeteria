import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUpVariant } from '../../animations/variants';

const CTA = () => {
  return (
    <section className="py-24 bg-coffee-caramel relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full text-coffee-dark fill-current">
          <path d="M0 100 C 20 0 50 0 100 100 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className="max-w-3xl mx-auto text-center bg-coffee-dark/90 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-2xl border border-coffee-beige/20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-coffee-cream mb-6 leading-tight">
            Visit us today for your <br/> perfect cup.
          </h2>
          <p className="text-coffee-beige mb-10 text-lg">
            Whether you need a quiet place to work or a warm spot to catch up with friends, Velvet Brew Café is waiting for you.
          </p>
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-coffee-cream text-coffee-dark font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300"
            >
              Find Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
