import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ image, onClose, onPrev, onNext }) => {
  if (!image) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(28, 14, 7, 0.92)' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light z-10 transition-colors"
        >
          ×
        </button>

        {/* Prev Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 text-white/70 hover:text-white text-5xl z-10 transition-colors select-none"
        >
          ‹
        </button>

        {/* Image */}
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.caption}
            className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
          />
          {/* Caption */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-center"
          >
            <span className="text-coffee-cream/90 text-lg font-heading italic">
              {image.emoji} {image.caption}
            </span>
          </motion.div>
        </motion.div>

        {/* Next Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 text-white/70 hover:text-white text-5xl z-10 transition-colors select-none"
        >
          ›
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
