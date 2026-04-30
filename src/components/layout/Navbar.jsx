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
          ? 'bg-coffee-dark/95 backdrop-blur-md py-2 shadow-glass border-b border-coffee-mocha/20' 
          : 'bg-coffee-dark/40 lg:bg-transparent py-4 lg:py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-between items-center gap-4 lg:gap-0">
        
        {/* Top Row: Logo and Actions (Mobile Optimized) */}
        <div className="w-full lg:w-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-coffee-caramel rounded-lg">
              <span className="text-coffee-cream text-lg">☕</span>
            </div>
            <span className={`text-lg lg:text-xl font-heading font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-coffee-cream' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white' : 'text-coffee-dark')
            }`}>
              Velvet Brew
            </span>
          </Link>

          {/* Actions (Toggles/Cart/Favorites) for Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <Link to="/menu" className="relative p-1">
               <span className={`text-lg ${isScrolled ? 'text-coffee-cream' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white' : 'text-coffee-dark')}`}>
                 {favorites.length > 0 ? '❤️' : '🤍'}
               </span>
            </Link>
            <Link to="/cart" className="relative p-1">
               <span className={`text-lg ${isScrolled ? 'text-coffee-cream' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white' : 'text-coffee-dark')}`}>🛒</span>
               {itemCount > 0 && (
                 <span className="absolute -top-1 -right-1 bg-coffee-caramel text-coffee-cream text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                   {itemCount}
                 </span>
               )}
            </Link>
          </div>
        </div>

        {/* Navigation Links (Dedicated row on mobile) */}
        <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-[11px] md:text-sm font-medium tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-coffee-cream/90' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white/90' : 'text-coffee-dark/90')
              } ${location.pathname === link.path ? 'opacity-100 font-bold border-b-2 border-coffee-caramel' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-6 pl-4 border-l border-coffee-beige/20">
          <ThemeToggle />
          
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
          
          <Link to="/cart" className="relative p-2 group">
            <span className={`transition-colors duration-300 text-sm ${
              isScrolled ? 'text-coffee-cream' : (location.pathname === '/' || location.pathname === '/about' ? 'text-white' : 'text-coffee-dark')
            } group-hover:text-coffee-caramel font-bold`}>Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-coffee-caramel text-coffee-cream text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-coffee-dark">
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
