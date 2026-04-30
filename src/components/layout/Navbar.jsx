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
      className="fixed top-0 left-0 w-full z-[999] bg-coffee-dark py-3 lg:py-4 shadow-glass border-b border-coffee-mocha/30"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-between items-center gap-3 lg:gap-0">
        
        {/* Top Row: Logo and Actions */}
        <div className="w-full lg:w-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-coffee-caramel rounded-lg">
              <span className="text-coffee-cream text-lg">☕</span>
            </div>
            <span className="text-lg lg:text-xl font-heading font-bold tracking-tight text-coffee-cream">
              Velvet Brew
            </span>
          </Link>

          {/* Actions (Toggles/Cart/Favorites) for Mobile */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <Link to="/menu" className="relative p-1 text-coffee-cream">
               <span className="text-lg">
                 {favorites.length > 0 ? '❤️' : '🤍'}
               </span>
            </Link>
            <Link to="/cart" className="relative p-1 text-coffee-cream">
               <span className="text-lg">🛒</span>
               {itemCount > 0 && (
                 <span className="absolute -top-1 -right-1 bg-coffee-caramel text-coffee-cream text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                   {itemCount}
                 </span>
               )}
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-5 md:gap-8 flex-wrap justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-[11px] md:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
                location.pathname === link.path ? 'text-coffee-caramel' : 'text-coffee-cream/80 hover:text-coffee-caramel'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-6 pl-4 border-l border-coffee-beige/20">
          <ThemeToggle />
          
          <Link to="/menu" className="relative p-2 group text-coffee-cream" title="Your Favorites">
            <span className="text-xl transition-transform group-hover:scale-125 inline-block">
              {favorites.length > 0 ? '❤️' : '🤍'}
            </span>
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
          
          <Link to="/cart" className="relative p-2 group text-coffee-cream">
            <span className="transition-colors duration-300 text-sm font-bold group-hover:text-coffee-caramel">Cart</span>
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
