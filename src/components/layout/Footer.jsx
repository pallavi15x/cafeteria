import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-dark text-coffee-cream/80 pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Description */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-coffee-caramel text-xl">☕</span>
            <span className="text-2xl font-heading font-bold text-coffee-cream">Velvet Brew</span>
          </div>
          <p className="text-sm leading-relaxed">
            Crafting premium coffee experiences in a warm, cozy atmosphere. Your daily dose of comfort, one cup at a time.
          </p>
          <div className="flex gap-4">
            {['FB', 'IG', 'TW'].map((platform, i) => (
              <a 
                key={i} 
                href="#" 
                className="p-2 bg-coffee-mocha rounded-full hover:bg-coffee-caramel transition-all duration-300 hover:-translate-y-1 text-sm font-bold"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-coffee-cream font-heading text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            {['Home', 'Menu', 'Interior', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="hover:text-coffee-caramel transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-coffee-cream font-heading text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-coffee-caramel">📍</span>
              <span>123 Espresso Street, Brew City</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-coffee-caramel">📞</span>
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-coffee-caramel">✉️</span>
              <span>hello@velvetbrew.cafe</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-coffee-cream font-heading text-lg font-bold mb-6">Opening Hours</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between">
              <span>Mon - Fri:</span>
              <span className="text-coffee-caramel">07:00 AM - 09:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday:</span>
              <span className="text-coffee-caramel">08:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday:</span>
              <span className="text-coffee-caramel">09:00 AM - 08:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-coffee-mocha text-center text-xs">
        <p>&copy; {currentYear} Velvet Brew Café. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
