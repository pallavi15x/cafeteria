import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-coffee-beige/30">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-bold text-coffee-dark mb-2 ml-1">Your Name</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl bg-coffee-beige/10 border border-coffee-beige/30 focus:border-coffee-caramel focus:ring-1 focus:ring-coffee-caramel outline-none transition-all duration-300"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-coffee-dark mb-2 ml-1">Email Address</label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-2xl bg-coffee-beige/10 border border-coffee-beige/30 focus:border-coffee-caramel focus:ring-1 focus:ring-coffee-caramel outline-none transition-all duration-300"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-coffee-dark mb-2 ml-1">Message</label>
              <textarea
                required
                rows="4"
                placeholder="Tell us something..."
                className="w-full px-6 py-4 rounded-2xl bg-coffee-beige/10 border border-coffee-beige/30 focus:border-coffee-caramel focus:ring-1 focus:ring-coffee-caramel outline-none transition-all duration-300 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-coffee-dark text-coffee-cream font-bold rounded-2xl shadow-lg hover:bg-coffee-caramel transition-all duration-300"
            >
              Send Message ☕
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-coffee-dark mb-2">Message Sent!</h3>
            <p className="text-coffee-mocha mb-8">Thank you for reaching out. We'll get back to you over a cup of coffee soon!</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-coffee-caramel font-bold underline"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
