import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#FFF8F0]"
    >
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Cafe Interior" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFF8F0]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-coffee-caramel font-bold tracking-widest text-sm uppercase mb-4"
          >
            ✦ Connect With Us ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold text-coffee-dark mb-6"
          >
            Visit Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-coffee-mocha text-xl md:text-2xl"
          >
            We’d love to serve you your <span className="text-coffee-caramel italic">perfect cup</span>
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-coffee-dark mb-8">Reach Out</h2>
                <ContactInfo />
              </div>
              <MapSection />
            </div>

            {/* Right Side: Form */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl font-heading font-bold text-coffee-dark mb-8">Send a Message</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-coffee-dark text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-heading font-bold text-coffee-cream mb-6">
            Come for the coffee, stay for the vibe ☕
          </h2>
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-coffee-caramel text-coffee-cream font-bold rounded-full shadow-lg hover:bg-white hover:text-coffee-dark transition-all duration-300"
            >
              Explore Menu
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Contact;
