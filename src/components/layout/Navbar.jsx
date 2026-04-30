import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { mobileMenuVariants, navItemVariants } from '../../animations/variants';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { favorites } = useFavorites();
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
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        isScrolled 
          ? 'bg-coffee-dark/95 backdrop-blur-md py-3 shadow-glass border-b border-coffee-mocha/20' 
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
            isScrolled ? 'text-coffee-cream' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white' : 'text-coffee-dark')
          }`}>
            Velvet Brew
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-sm font-medium tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-coffee-cream/90' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white/90' : 'text-coffee-dark/90')
              } ${location.pathname === link.path ? 'opacity-100 font-bold border-b-2 border-coffee-caramel' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-6 pl-4 border-l border-coffee-beige/20">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Favorites Icon */}
            <Link to="/menu" className="relative p-2 group" title="Your Favorites">
              <span className={`text-xl transition-transform group-hover:scale-125 inline-block ${
                isScrolled ? 'text-coffee-cream' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white' : 'text-coffee-dark')
              }`}>
                {favorites.length > 0 ? '❤️' : '🤍'}
              </span>
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {favorites.length}
                </span>
              )}
            </Link>
            
            {/* Cart Icon */}
            <Link to="/cart" className="relative p-2 group">
              <span 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-coffee-cream' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white' : 'text-coffee-dark')
                } group-hover:text-coffee-caramel font-bold text-sm`} 
              >Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-coffee-caramel text-coffee-cream text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-coffee-dark">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <ThemeToggle />
          <Link to="/cart" className="relative p-2">
            <span className={`text-xl ${
              isScrolled ? 'text-coffee-cream' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white' : 'text-coffee-dark')
            }`}>🛒</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-coffee-caramel text-coffee-cream text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-colors duration-300 ${
              isScrolled ? 'text-coffee-cream' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white' : 'text-coffee-dark')
            }`}
          >
            {isMobileMenuOpen ? <span className="text-2xl font-bold">×</span> : <span className="text-2xl font-bold">☰</span>}
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
            className="lg:hidden bg-coffee-dark/98 backdrop-blur-xl border-t border-coffee-mocha/30 h-screen w-full fixed top-[72px] left-0 overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-12 flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={navItemVariants}
                  className="w-full text-center"
                >
                  <Link
                    to={link.path}
                    className={`text-3xl font-heading font-bold transition-colors block py-2 ${
                      location.pathname === link.path ? 'text-coffee-caramel' : 'text-coffee-cream'
                    } hover:text-coffee-caramel`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-coffee-mocha/30 w-full flex justify-center gap-10"
              >
                <Link to="/menu" className="flex flex-col items-center gap-2">
                   <span className="text-3xl">{favorites.length > 0 ? '❤️' : '🤍'}</span>
                   <span className="text-xs text-coffee-beige uppercase tracking-widest">Favorites</span>
                </Link>
                <Link to="/cart" className="flex flex-col items-center gap-2">
                   <span className="text-3xl">🛒</span>
                   <span className="text-xs text-coffee-beige uppercase tracking-widest">Bag ({itemCount})</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
