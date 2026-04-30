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

        {/* Animation Sequence - Enhanced 3D Version */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center items-center h-[500px]"
          style={{ perspective: "1000px" }}
        >
          {/* Decorative Background Circles */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute w-80 h-80 rounded-full border border-coffee-caramel/30 z-0"
          />
          
          {/* Main 3D Container */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotateX: [0, 5, 0],
              rotateZ: [0, -2, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10"
          >
            {/* SVG Cup */}
            <svg viewBox="0 0 200 250" className="w-72 h-96 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
              {/* Enhanced Steam Particles */}
              {[1, 2, 3].map((i) => (
                <motion.path
                  key={i}
                  animate={{ 
                    y: [0, -40], 
                    opacity: [0, 0.8, 0],
                    x: [0, (i % 2 === 0 ? 10 : -10)],
                    scale: [0.8, 1.2]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.8,
                    ease: "easeOut"
                  }}
                  d={`M ${80 + (i * 20)} 60 Q ${90 + (i * 20)} 40, ${80 + (i * 20)} 10`}
                  fill="transparent"
                  stroke={i === 2 ? "#FFF8F0" : "#D9C5B2"}
                  strokeWidth={2 + i}
                  strokeLinecap="round"
                  className="blur-[1px]"
                />
              ))}

              {/* Cup Body (3D Shade Effect) */}
              <defs>
                <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFF8F0" />
                  <stop offset="50%" stopColor="#D9C5B2" />
                  <stop offset="100%" stopColor="#FFF8F0" />
                </linearGradient>
                <filter id="innerShadow">
                  <feOffset dx="0" dy="5" />
                  <feGaussianBlur stdDeviation="3" result="offset-blur" />
                  <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                  <feFlood floodColor="black" floodOpacity="0.3" result="color" />
                  <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                  <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                </filter>
              </defs>

              {/* 2. Cup Outline */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 40 80 L 40 180 Q 40 220, 100 220 Q 160 220, 160 180 L 160 80 Z"
                fill="url(#cupGradient)"
                stroke="#2C1A12"
                strokeWidth="4"
                filter="url(#innerShadow)"
              />
              
              {/* Cup Handle (3D Effect) */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                d="M 160 110 Q 200 110, 200 140 Q 200 170, 160 170"
                fill="transparent"
                stroke="#D9C5B2"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* 3. Coffee Liquid with ripple */}
              <motion.path
                animate={{ 
                  scaleY: [0.98, 1, 0.98],
                  y: [1, 0, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                d="M 45 90 L 45 175 Q 45 210, 100 210 Q 155 210, 155 175 L 155 90 Z"
                fill="#2C1A12"
              />

              {/* 4. Latte Art Heart (Gently pulse) */}
              <motion.path
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                d="M 100 120 C 80 90, 60 120, 100 160 C 140 120, 120 90, 100 120 Z"
                fill="#C68B59"
                className="origin-center"
              />
              <motion.path
                animate={{ 
                  scale: [1, 1.08, 1],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                d="M 100 135 C 90 120, 80 135, 100 155 C 120 135, 110 120, 100 135 Z"
                fill="#FFF8F0"
                className="origin-center"
              />
            </svg>

            {/* Floating Coffee Beans */}
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, (i % 2 === 0 ? 10 : -10), 0],
                  rotate: [0, 360],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 4 + i, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
                className="absolute text-2xl filter blur-[0.5px]"
                style={{
                  top: `${20 + (i * 15)}%`,
                  left: i % 2 === 0 ? '-20px' : 'auto',
                  right: i % 2 !== 0 ? '-20px' : 'auto',
                }}
              >
                🫘
              </motion.div>
            ))}
          </motion.div>

          {/* Shadow on table */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-10 w-48 h-8 bg-black/40 rounded-full blur-xl z-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
