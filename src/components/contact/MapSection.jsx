import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section className="py-12">
      <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[450px] relative group">
        <iframe
          title="Café Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6896263548!2d-118.4012!3d33.8458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUwJzQ0LjkiTiAxMTjCsDI0JzA0LjMiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'sepia(20%) contrast(90%)' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        
        <div className="absolute bottom-6 left-6 right-6 flex justify-center">
          <motion.a
            href="https://goo.gl/maps/xyz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-coffee-dark text-coffee-cream px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:bg-coffee-caramel transition-colors"
          >
            📍 Get Directions
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
