import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img 
            src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Coffee Craftsmanship" 
            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-heading font-bold text-coffee-dark mb-6">Our Brewing Story</h2>
          <div className="space-y-4 text-coffee-mocha leading-relaxed text-lg">
            <p>
              It all started with a simple dream: to create a sanctuary where time slows down and every cup is a masterpiece. 
              Velvet Brew was born from a shared passion for the art of coffee and the joy of community.
            </p>
            <p>
              From our humble beginnings as a small street corner cart, we've focused on one thing: the perfect balance of 
              craftsmanship and comfort. We believe that coffee isn't just a drink; it's a bridge between people.
            </p>
            <p>
              Every bean we roast and every latte we pour is a tribute to the farmers who grow them and the guests 
              who savor them. Welcome to our home away from home.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
