import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUpVariant } from '../../animations/variants';

import interior1 from '../../assets/images/interior_1.png';
import interior2 from '../../assets/images/interior_2.png';

const GalleryPreview = () => {
  return (
    <section className="py-24 bg-coffee-dark text-coffee-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Velvet Experience</h2>
            <p className="text-coffee-beige/80">Step inside our sanctuary. A place where time slows down, conversations flow, and every corner is crafted for your comfort.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
          >
            <Link to="/gallery">
              <button className="px-6 py-3 bg-transparent border-2 border-coffee-caramel text-coffee-cream rounded-full hover:bg-coffee-caramel transition-colors duration-300 font-bold whitespace-nowrap">
                View Full Gallery
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="md:col-span-2 h-80 md:h-[500px] overflow-hidden rounded-2xl relative group cursor-pointer shadow-xl">
            <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={interior1} 
              alt="Café Interior Wide" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/800x500?text=Interior+Wide' }}
            />
          </div>
          <div className="flex flex-col gap-6 h-[500px]">
            <div className="flex-1 overflow-hidden rounded-2xl relative group cursor-pointer shadow-xl">
              <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={interior2} 
                alt="Espresso Machine" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x240?text=Barista' }}
              />
            </div>
            {/* Reusing interior1 with a different focal point or generic placeholder if image 3 failed */}
            <div className="flex-1 overflow-hidden rounded-2xl relative group cursor-pointer shadow-xl">
              <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={interior1} 
                alt="Cozy Corner" 
                className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x240?text=Cozy+Seating' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
