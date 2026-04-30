import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import GalleryFilter from '../components/gallery/GalleryFilter';
import ImageGrid from '../components/gallery/ImageGrid';
import ImageModal from '../components/gallery/ImageModal';

const galleryImages = [
  // ☀️ DAY
  {
    id: 'd1', vibe: 'day', emoji: '☀️', tall: true,
    caption: 'Sunlit morning warmth',
    src: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'd2', vibe: 'day', emoji: '☀️', tall: false,
    caption: 'Open wooden seating',
    src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'd3', vibe: 'day', emoji: '☀️', tall: false,
    caption: 'Fresh brew, fresh start',
    src: 'https://images.pexels.com/photos/1152739/pexels-photo-1152739.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'd4', vibe: 'day', emoji: '☀️', tall: true,
    caption: 'Natural light, cozy vibes',
    src: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'd5', vibe: 'day', emoji: '☀️', tall: false,
    caption: 'A table by the window',
    src: 'https://images.pexels.com/photos/374547/pexels-photo-374547.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'd6', vibe: 'day', emoji: '☀️', tall: false,
    caption: 'Morning espresso ritual',
    src: 'https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // 🌆 EVENING
  {
    id: 'e1', vibe: 'evening', emoji: '🌆', tall: false,
    caption: 'Golden hour at Velvet Brew',
    src: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'e2', vibe: 'evening', emoji: '🌆', tall: true,
    caption: 'Warm lights glow at dusk',
    src: 'https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'e3', vibe: 'evening', emoji: '🌆', tall: false,
    caption: 'Window reflections, evening calm',
    src: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'e4', vibe: 'evening', emoji: '🌆', tall: false,
    caption: 'Soft shadows, warm coffee',
    src: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'e5', vibe: 'evening', emoji: '🌆', tall: true,
    caption: 'The perfect evening corner',
    src: 'https://images.pexels.com/photos/3201764/pexels-photo-3201764.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // 🌙 DATE NIGHT
  {
    id: 'n1', vibe: 'night', emoji: '🌙', tall: true,
    caption: 'Candlelit table for two',
    src: 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'n2', vibe: 'night', emoji: '🌙', tall: false,
    caption: 'Fairy lights, stolen glances',
    src: 'https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'n3', vibe: 'night', emoji: '🌙', tall: false,
    caption: 'Romantic corner, perfect date',
    src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'n4', vibe: 'night', emoji: '🌙', tall: true,
    caption: 'Warm bulbs, soft music',
    src: 'https://images.pexels.com/photos/2788489/pexels-photo-2788489.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'n5', vibe: 'night', emoji: '🌙', tall: false,
    caption: 'The city lights outside',
    src: 'https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'n6', vibe: 'night', emoji: '🌙', tall: false,
    caption: 'Dim light, deep conversations',
    src: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') return galleryImages;
    return galleryImages.filter(img => img.vibe === activeFilter);
  }, [activeFilter]);

  const selectedIndex = selectedImage
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const handleNext = () => {
    if (selectedIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[selectedIndex + 1]);
    } else {
      setSelectedImage(filteredImages[0]);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedImage(filteredImages[selectedIndex - 1]);
    } else {
      setSelectedImage(filteredImages[filteredImages.length - 1]);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #2C1A12 0%, #4B2E2B 20%, #FFF8F0 40%)' }}>

      {/* Hero Header */}
      <div className="pt-28 pb-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-coffee-caramel font-semibold tracking-widest text-sm uppercase mb-3">
            ✦ Interior Gallery ✦
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-coffee-cream mb-4">
            Our Space
          </h1>
          <p className="text-coffee-cream/70 text-xl max-w-xl mx-auto leading-relaxed">
            Where every cup feels like home —
            <span className="text-coffee-caramel italic"> day to night</span>
          </p>
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div className="bg-coffee-cream/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <GalleryFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <ImageGrid images={filteredImages} onImageClick={setSelectedImage} />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default Gallery;
