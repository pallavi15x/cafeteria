import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { coffeePourVariants, milkSwirlVariants, steamVariants } from '../../animations/variants';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coffee-dark">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-mocha/40 to-coffee-dark/90 z-0"></div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-coffee-cream leading-tight">
            Crafted with warmth, <br/>
            <span className="text-coffee-caramel">served with love.</span>
          </h1>
          <p className="text-lg md:text-xl text-coffee-beige/80 max-w-xl mx-auto lg:mx-0">
            Experience the perfect brew. Every cup tells a story of carefully selected beans and passionate baristas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link to="/menu">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-coffee-caramel text-coffee-cream font-bold rounded-full shadow-glass hover:bg-coffee-cream hover:text-coffee-dark transition-colors duration-300"
              >
                Explore Menu
              </motion.button>
            </Link>
            <Link to="/cart">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-coffee-caramel text-coffee-cream font-bold rounded-full hover:bg-coffee-caramel/20 transition-colors duration-300"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Animation Sequence */}
        <div className="relative flex justify-center items-center h-[400px]">
          {/* Animated Coffee Cup SVG */}
          <svg viewBox="0 0 200 250" className="w-64 h-80 drop-shadow-2xl">
            {/* 1. Steam (Looping) */}
            <motion.path
              variants={steamVariants}
              initial="hidden"
              animate="visible"
              d="M 80 50 Q 90 30, 80 10"
              fill="transparent"
              stroke="#F5E6D3"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <motion.path
              variants={steamVariants}
              initial="hidden"
              animate="visible"
              style={{ transitionDelay: '0.5s' }}
              d="M 100 60 Q 110 40, 100 20"
              fill="transparent"
              stroke="#F5E6D3"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <motion.path
              variants={steamVariants}
              initial="hidden"
              animate="visible"
              style={{ transitionDelay: '1s' }}
              d="M 120 50 Q 130 30, 120 10"
              fill="transparent"
              stroke="#F5E6D3"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* 2. Cup Outline (Static base) */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M 40 80 L 40 180 Q 40 220, 100 220 Q 160 220, 160 180 L 160 80 Z"
              fill="#F5E6D3"
              stroke="#2C1A12"
              strokeWidth="4"
            />
            {/* Cup Handle */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              d="M 160 110 Q 190 110, 190 140 Q 190 170, 160 170"
              fill="transparent"
              stroke="#F5E6D3"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* 3. Coffee Liquid (Pours in) */}
            <motion.path
              variants={coffeePourVariants}
              initial="hidden"
              animate="visible"
              d="M 45 90 L 45 175 Q 45 210, 100 210 Q 155 210, 155 175 L 155 90 Z"
              fill="#4B2E2B"
              className="origin-bottom"
            />

            {/* 4. Milk Swirl (Blends in) */}
            <motion.path
              variants={milkSwirlVariants}
              initial="hidden"
              animate="visible"
              d="M 70 140 C 90 110, 130 110, 110 160 C 90 200, 50 160, 70 140 Z"
              fill="#C68B59"
              className="origin-center mix-blend-screen"
            />
            <motion.path
              variants={milkSwirlVariants}
              initial="hidden"
              animate="visible"
              style={{ transitionDelay: '1.8s' }}
              d="M 100 130 C 120 120, 130 150, 100 170 C 70 150, 80 120, 100 130 Z"
              fill="#F5E6D3"
              className="origin-center mix-blend-overlay opacity-60"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
