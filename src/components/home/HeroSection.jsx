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

        {/* Animation Sequence - Storytelling version */}
        <div className="relative flex justify-center items-center h-[500px]" style={{ perspective: "1000px" }}>
          
          {/* Stage 1: The Beans (Initial state) */}
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [0, 150]
            }}
            transition={{ duration: 1.5, times: [0, 0.2, 1], repeat: Infinity, repeatDelay: 10 }}
            className="absolute z-30 flex gap-2"
          >
            <span className="text-4xl">🫘</span>
            <span className="text-4xl">🫘</span>
            <span className="text-4xl">🫘</span>
          </motion.div>

          {/* Main 3D Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1, 1],
              opacity: 1,
              y: [0, -10, 0] 
            }}
            transition={{ 
              scale: { duration: 1, ease: "backOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-10"
          >
            <svg viewBox="0 0 200 250" className="w-72 h-96 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]">
              {/* Steam - Appear after serving */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
              >
                {[1, 2, 3].map((i) => (
                  <motion.path
                    key={i}
                    animate={{ y: [0, -30], opacity: [0, 0.7, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 4 + (i * 0.5) }}
                    d={`M ${80 + (i * 20)} 60 Q ${90 + (i * 20)} 40, ${80 + (i * 20)} 10`}
                    fill="transparent"
                    stroke="#D9C5B2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="blur-[1px]"
                  />
                ))}
              </motion.g>

              {/* Cup Body */}
              <path
                d="M 40 80 L 40 180 Q 40 220, 100 220 Q 160 220, 160 180 L 160 80 Z"
                fill="#FFF8F0"
                stroke="#2C1A12"
                strokeWidth="4"
              />
              <path
                d="M 160 110 Q 200 110, 200 140 Q 200 170, 160 170"
                fill="transparent"
                stroke="#FFF8F0"
                strokeWidth="10"
                strokeLinecap="round"
              />

              {/* Stage 2: Coffee Pouring */}
              <motion.rect 
                initial={{ height: 0, y: 175 }}
                animate={{ height: 85, y: 90 }}
                transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                x="45" width="110"
                fill="#2C1A12"
                className="rounded-b-2xl"
              />
              {/* Mask for liquid rounded corners */}
              <clipPath id="cupClip">
                 <path d="M 45 90 L 45 175 Q 45 210, 100 210 Q 155 210, 155 175 L 155 90 Z" />
              </clipPath>
              <motion.path
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ delay: 1, duration: 2 }}
                d="M 45 90 L 45 175 Q 45 210, 100 210 Q 155 210, 155 175 L 155 90 Z"
                fill="#2C1A12"
                clipPath="url(#cupClip)"
              />

              {/* Stage 3: Milk Swirl & Latte Art */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, duration: 1, ease: "backOut" }}
              >
                {/* Outer Milk Swirl */}
                <motion.path
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  d="M 100 120 C 80 90, 60 120, 100 160 C 140 120, 120 90, 100 120 Z"
                  fill="#C68B59"
                  className="origin-center"
                />
                {/* Inner Heart */}
                <motion.path
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  d="M 100 130 C 90 115, 80 130, 100 150 C 120 130, 110 115, 100 130 Z"
                  fill="#FFF8F0"
                  className="origin-center"
                />
              </motion.g>
            </svg>
          </motion.div>

          {/* Serve Stage: Final Reveal Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 4, duration: 2, times: [0, 0.5, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-coffee-caramel text-white px-6 py-2 rounded-full font-bold shadow-2xl"
          >
            Freshly Served ☕
          </motion.div>

          {/* Table Shadow */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 w-48 h-8 bg-black/40 rounded-full blur-xl z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
