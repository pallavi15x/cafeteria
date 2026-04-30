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

        {/* Unified Nav (Visible on all screens) */}
        <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center flex-1 lg:flex-none order-3 lg:order-2 mt-4 lg:mt-0 w-full lg:w-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-[10px] md:text-sm font-medium tracking-tight md:tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-coffee-cream/90' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white/90' : 'text-coffee-dark/90')
              } ${location.pathname === link.path ? 'opacity-100 font-bold border-b-2 border-coffee-caramel' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
          
        <div className="flex items-center gap-3 md:gap-6 pl-0 md:pl-4 border-l-0 md:border-l border-coffee-beige/20 order-2 lg:order-3">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Favorites Icon */}
          <Link to="/menu" className="relative p-1 md:p-2 group" title="Your Favorites">
            <span className={`text-lg md:text-xl transition-transform group-hover:scale-125 inline-block ${
              isScrolled ? 'text-coffee-cream' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white' : 'text-coffee-dark')
            }`}>
              {favorites.length > 0 ? '❤️' : '🤍'}
            </span>
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
          
          {/* Cart Icon */}
          <Link to="/cart" className="relative p-1 md:p-2 group">
            <span 
              className={`transition-colors duration-300 text-xs md:text-sm ${
                isScrolled ? 'text-coffee-cream' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white' : 'text-coffee-dark')
              } group-hover:text-coffee-caramel font-bold`} 
            >Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-coffee-caramel text-coffee-cream text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-coffee-dark">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
