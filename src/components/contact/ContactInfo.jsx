import React from 'react';
import { motion } from 'framer-motion';

const contactDetails = [
  {
    id: 1,
    title: 'Visit Us',
    icon: '📍',
    content: '123 Coffee Street, Espresso Valley, CA 90210'
  },
  {
    id: 2,
    title: 'Call Us',
    icon: '📞',
    content: '+1 (555) 123-4567'
  },
  {
    id: 3,
    title: 'Email Us',
    icon: '✉️',
    content: 'hello@velvetbrew.com'
  },
  {
    id: 4,
    title: 'Opening Hours',
    icon: '🕒',
    content: 'Mon-Fri: 7am - 10pm | Sat-Sun: 8am - 11pm'
  }
];

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {contactDetails.map((detail, idx) => (
        <motion.div
          key={detail.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-coffee-beige/20 flex items-start gap-4 hover:shadow-md hover:border-coffee-caramel/30 transition-all duration-300"
        >
          <div className="text-3xl bg-coffee-beige/10 p-3 rounded-xl">{detail.icon}</div>
          <div>
            <h3 className="text-lg font-bold text-coffee-dark mb-1">{detail.title}</h3>
            <p className="text-coffee-mocha text-sm leading-relaxed">{detail.content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
