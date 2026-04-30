import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Morning Calm',
    time: '☀️',
    image: 'https://img.freepik.com/premium-photo/photo-coffee-shop-interior_1029469-17588.jpg',
    desc: 'The smell of fresh beans, the quiet hum of the city, and your first sip of the day. A sanctuary of morning peace.'
  },
  {
    id: 2,
    title: 'Evening Warmth',
    time: '🌆',
    image: 'https://i.pinimg.com/originals/33/fb/eb/33fbebc0f37f3423b13ecbfb183f745f.jpg',
    desc: 'As the sun dips low, our space glows with a golden hue. The perfect backdrop for an evening wind-down.'
  },
  {
    id: 3,
    title: 'Date Night Vibes',
    time: '🌙',
    image: 'https://tse4.mm.bing.net/th/id/OIP.WflWwAGUoC4Ri8-PLvJkOgHaHa?pid=ImgDet&w=192&h=192&c=7&dpr=1.7&o=7&rm=3',
    desc: 'Dim lighting, soft whispers. Make memories over candlelight and our finest brews.'
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-24 bg-coffee-dark text-coffee-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">The Velvet Experience</h2>
          <p className="text-coffee-cream/60">Designed to evolve with your day.</p>
        </div>

        <div className="space-y-24">
          {experiences.map((exp, idx) => (
            <div 
              key={exp.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center md:text-left"
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <span className="text-4xl">{exp.time}</span>
                  <h3 className="text-3xl font-heading font-bold text-coffee-caramel">{exp.title}</h3>
                </div>
                <p className="text-coffee-cream/80 text-lg leading-relaxed">{exp.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
