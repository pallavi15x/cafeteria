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

        {/* Animation Sequence - Ultra Realistic Storytelling version */}
        <div className="relative flex justify-center items-center h-[500px]" style={{ perspective: "1200px" }}>
          
          {/* Advanced SVG Filters for Realism */}
          <svg className="absolute w-0 h-0">
            <defs>
              {/* Liquid Slosh Filter */}
              <filter id="liquid-wobble">
                <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" seed="1">
                  <animate attributeName="baseFrequency" dur="5s" values="0.02;0.03;0.02" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="5" />
              </filter>
              
              {/* Coffee Texture */}
              <linearGradient id="coffee-depth" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3D2B1F" />
                <stop offset="100%" stopColor="#1C0E07" />
              </linearGradient>

              {/* Cup Texture (Ceramic Look) */}
              <linearGradient id="ceramic-shine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#F5E6D3" />
                <stop offset="100%" stopColor="#D9C5B2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Stage 1: The Beans (Realistic Physics) */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: -50, x: 80 + (i * 10), rotate: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: [-50, 250],
                  x: [80 + (i * 10), 70 + (i * 20)],
                  rotate: [0, 360 * (i + 1)]
                }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.2, 
                  repeat: Infinity, 
                  repeatDelay: 8,
                  ease: "circIn"
                }}
                className="absolute text-2xl"
              >
                🫘
              </motion.div>
            ))}
          </div>

          {/* Main 3D Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              rotateY: 0,
              y: [0, -12, 0] 
            }}
            transition={{ 
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              default: { duration: 1.5, ease: "easeOut" }
            }}
            className="relative z-10"
          >
            <svg viewBox="0 0 200 250" className="w-80 h-[400px] drop-shadow-[0_45px_40px_rgba(0,0,0,0.6)]">
              {/* Realistic Steam Clouds */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.circle
                    key={i}
                    r={10 + i * 2}
                    fill="white"
                    opacity="0"
                    animate={{ 
                      y: [100, 20],
                      x: [90 + i * 5, 100 + (i % 2 === 0 ? 15 : -15)],
                      opacity: [0, 0.2, 0],
                      scale: [1, 2.5]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: 4 + (i * 0.7),
                      ease: "easeOut"
                    }}
                    className="blur-xl"
                  />
                ))}
              </motion.g>

              {/* Cup Shadow (Inner) */}
              <ellipse cx="100" cy="220" rx="65" ry="10" fill="rgba(0,0,0,0.3)" />

              {/* Cup Body */}
              <path
                d="M 40 80 L 40 180 Q 40 220, 100 220 Q 160 220, 160 180 L 160 80 Z"
                fill="url(#ceramic-shine)"
                stroke="#2C1A12"
                strokeWidth="2"
              />
              {/* Cup Handle (3D appearance) */}
              <path
                d="M 160 110 Q 205 110, 205 140 Q 205 170, 160 170"
                fill="none"
                stroke="url(#ceramic-shine)"
                strokeWidth="12"
                strokeLinecap="round"
                className="drop-shadow-md"
              />
              <path
                d="M 160 110 Q 200 110, 200 140 Q 200 170, 160 170"
                fill="none"
                stroke="#2C1A12"
                strokeWidth="1"
              />

              {/* Coffee Liquid with Wobble Filter */}
              <motion.g filter="url(#liquid-wobble)">
                <motion.path 
                  initial={{ scaleY: 0, originY: "180px" }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.2, duration: 2.5, ease: "circOut" }}
                  d="M 45 90 L 45 175 Q 45 210, 100 210 Q 155 210, 155 175 L 155 90 Z"
                  fill="url(#coffee-depth)"
                />
              </motion.g>

              {/* Milk/Cream Blending Sequence */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.5, duration: 1.2, ease: "backOut" }}
              >
                {/* Crema Layer */}
                <ellipse cx="100" cy="110" rx="52" ry="12" fill="#8D5B39" opacity="0.6" />
                
                {/* Animated Heart (Soft & Organic) */}
                <motion.path
                  animate={{ 
                    scale: [1, 1.05, 1],
                    filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  d="M 100 115 C 80 85, 60 115, 100 155 C 140 115, 120 85, 100 115 Z"
                  fill="#FFF8F0"
                  className="origin-center shadow-inner"
                />
              </motion.g>

              {/* Cup Rim Glow */}
              <path
                d="M 40 82 Q 100 85, 160 82"
                fill="none"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              />
            </svg>
          </motion.div>

          {/* Floating Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 0], y: [20, 0, -20] }}
            transition={{ delay: 4.8, duration: 3, times: [0, 0.2, 1] }}
            className="absolute bottom-20 z-40 px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
          >
            <p className="text-white font-heading font-bold tracking-widest uppercase text-xs">
              Handcrafted with Passion ✨
            </p>
          </motion.div>

          {/* Dynamic Table Shadow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.2, 0.4, 0.2],
              width: [180, 220, 180]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-5 h-6 bg-black/50 rounded-[100%] blur-2xl z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
