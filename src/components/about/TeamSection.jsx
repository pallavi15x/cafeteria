import React from 'react';
import { motion } from 'framer-motion';

const baristas = [
  {
    id: 1,
    name: 'Marco Rossi',
    role: 'Head Barista',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: '10 years of experience in specialty coffee and roasting.'
  },
  {
    id: 2,
    name: 'Elena Vance',
    role: 'Latte Art Specialist',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Passionate about creating visual masterpieces in every cup.'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Coffee Architect',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Expert in flavor profiles and brewing techniques.'
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-coffee-dark mb-4">Meet the Artisans</h2>
          <p className="text-coffee-mocha max-w-2xl mx-auto">The passionate souls behind your favorite Velvet Brew.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {baristas.map((person, idx) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-coffee-dark mb-1">{person.name}</h3>
                <p className="text-coffee-caramel font-semibold mb-3 uppercase tracking-wider text-xs">{person.role}</p>
                <p className="text-coffee-mocha text-sm px-4 italic">"{person.desc}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
