import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '../../animations/variants';

const features = [
  { id: 1, icon: '🌱', title: 'Fresh Beans', description: 'Roasted weekly to ensure maximum flavor and aroma in every single cup.' },
  { id: 2, icon: '👨‍🍳', title: 'Expert Baristas', description: 'Our team is trained in the art of coffee, pouring love into every latte.' },
  { id: 3, icon: '🛋️', title: 'Cozy Ambience', description: 'A warm, inviting space designed for you to relax, work, or connect.' },
  { id: 4, icon: '⭐', title: 'Premium Quality', description: 'We source only the finest ingredients for our beverages and pastries.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-coffee-beige text-coffee-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Why Choose Velvet Brew?</h2>
          <p className="text-coffee-mocha max-w-2xl mx-auto">We believe coffee is more than just a drink; it's an experience.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              variants={fadeUpVariant}
              whileHover={{ y: -5 }}
              className="bg-coffee-cream rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-coffee-caramel/10"
            >
              <div className="text-5xl mb-6 bg-coffee-beige w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-coffee-dark">{feature.title}</h3>
              <p className="text-coffee-mocha text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
