import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGrid = ({ images, onImageClick }) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      <AnimatePresence mode="popLayout">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="break-inside-avoid mb-4 cursor-pointer group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            onClick={() => onImageClick(image)}
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.caption}
              className="w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              style={{ height: image.tall ? '380px' : '260px' }}
            />

            {/* Night glow overlay */}
            {image.vibe === 'night' && (
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent pointer-events-none" />
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end">
              <div className="p-4 w-full">
                <p className="text-coffee-cream font-heading italic text-sm">
                  {image.emoji} {image.caption}
                </p>
                <p className="text-coffee-cream/60 text-xs mt-1 capitalize">{image.vibe === 'night' ? 'Date Night 🌙' : image.vibe === 'evening' ? 'Evening 🌆' : 'Daylight ☀️'}</p>
              </div>
            </div>

            {/* Vibe badge */}
            <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              image.vibe === 'night' ? 'bg-amber-900/80 text-amber-100' :
              image.vibe === 'evening' ? 'bg-orange-800/80 text-orange-100' :
              'bg-yellow-600/80 text-yellow-50'
            }`}>
              {image.emoji}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {images.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-full text-center py-20 text-coffee-mocha/60"
        >
          No images in this category yet.
        </motion.div>
      )}
    </div>
  );
};

export default ImageGrid;
