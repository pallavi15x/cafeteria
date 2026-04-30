import React from 'react';
import { motion } from 'framer-motion';
import StorySection from '../components/about/StorySection';
import ValuesSection from '../components/about/ValuesSection';
import TeamSection from '../components/about/TeamSection';
import ExperienceSection from '../components/about/ExperienceSection';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/80 via-coffee-dark/60 to-coffee-dark/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-coffee-caramel font-semibold tracking-widest text-sm uppercase mb-4"
          >
            ✦ Our Journey ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold text-coffee-cream mb-6 leading-tight"
          >
            More than coffee — <br />
            <span className="text-coffee-caramel italic font-light">it's an experience</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-coffee-cream/80 text-xl md:text-2xl leading-relaxed"
          >
            At Velvet Brew Café, every cup tells a story of passion, warmth, and craftsmanship.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-coffee-cream/40 text-sm flex flex-col items-center gap-2"
        >
          <span>Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-coffee-caramel to-transparent"></div>
        </motion.div>
      </section>

      {/* Page Sections */}
      <StorySection />
      <ValuesSection />
      <ExperienceSection />
      <TeamSection />

      {/* Final CTA */}
      <section className="py-20 bg-coffee-cream text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-coffee-dark mb-6">Come Visit Us</h2>
          <p className="text-coffee-mocha mb-8">We can't wait to share our passion for coffee with you.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-coffee-dark text-coffee-cream font-bold rounded-full shadow-lg hover:bg-coffee-caramel transition-all duration-300"
          >
            View Our Menu
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
