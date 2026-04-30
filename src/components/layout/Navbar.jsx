import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { mobileMenuVariants, navItemVariants } from '../../animations/variants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Interior', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-coffee-dark/90 backdrop-blur-md py-3 shadow-glass' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-coffee-caramel rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <span className="text-coffee-cream font-bold">☕</span>
          </div>
          <span className={`text-xl font-heading font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-coffee-cream' : 'text-coffee-dark'
          }`}>
            Velvet Brew Café
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-sm font-medium tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-coffee-cream/90' : 'text-coffee-dark/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Cart Icon */}
          <Link to="/cart" className="relative p-2 group">
            <span 
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-coffee-cream' : 'text-coffee-dark'
              } group-hover:text-coffee-caramel font-bold`} 
            >Cart</span>
            {itemCount >= 0 && (
              <span className="absolute -top-1 -right-1 bg-coffee-caramel text-coffee-cream text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-coffee-dark">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <Link to="/cart" className="relative p-2">
            <span 
              className={isScrolled ? 'text-coffee-cream' : 'text-coffee-dark'} 
            >Cart</span>
            <span className="absolute -top-1 -right-1 bg-coffee-caramel text-coffee-cream text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-colors duration-300 ${
              isScrolled ? 'text-coffee-cream' : 'text-coffee-dark'
            }`}
          >
            {isMobileMenuOpen ? <span>Close</span> : <span>Menu</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-coffee-dark overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={navItemVariants}
                >
                  <Link
                    to={link.path}
                    className="text-2xl font-heading text-coffee-cream hover:text-coffee-caramel transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
