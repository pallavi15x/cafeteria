import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    id: 1,
    title: 'Premium Beans',
    icon: '🫘',
    desc: 'Sourced ethically from the world\'s finest estates.'
  },
  {
    id: 2,
    title: 'Expert Brewing',
    icon: '☕',
    desc: 'Precision in every pour, art in every cup.'
  },
  {
    id: 3,
    title: 'Cozy Ambience',
    icon: '🛋️',
    desc: 'Designed for comfort, connection, and calm.'
  },
  {
    id: 4,
    title: 'Sustainability',
    icon: '🌿',
    desc: 'Committed to a greener future, one cup at a time.'
  }
];

const ValuesSection = () => {
  return (
    <section className="py-20 px-4 bg-coffee-beige/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-coffee-dark mb-4">Our Core Values</h2>
          <div className="w-20 h-1 bg-coffee-caramel mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-coffee-beige/20 text-center group hover:shadow-xl hover:border-coffee-caramel/30 transition-all duration-300"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{val.icon}</div>
              <h3 className="text-xl font-bold text-coffee-dark mb-3">{val.title}</h3>
              <p className="text-coffee-mocha text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
