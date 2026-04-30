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
    src: 'https://th.bing.com/th/id/OIP.cvyCXQdLO2pZ_w_8gwr7TAHaE8?w=272&h=181&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
  },
  {
    id: 'd4', vibe: 'day', emoji: '☀️', tall: true,
    caption: 'Natural light, cozy vibes',
    src: 'https://tse1.mm.bing.net/th/id/OIP.uyanEIfWAzVRkQQ2kIPf-wHaJ1?pid=ImgDet&w=192&h=254&c=7&dpr=1.7&o=7&rm=3'
  },
  {
    id: 'd5', vibe: 'day', emoji: '☀️', tall: false,
    caption: 'A table by the window',
    src: 'https://static.vecteezy.com/system/resources/previews/057/833/122/non_2x/cozy-cafe-ambience-with-soft-light-and-natural-urban-view-through-the-window-photo.jpg'
  },
  {
    id: 'd6', vibe: 'day', emoji: '☀️', tall: true,
    caption: 'Morning espresso ritual',
    src: 'https://tse3.mm.bing.net/th/id/OIP.4bbavkoGmKfEAgKz0Qyf8AHaMc?pid=ImgDet&w=183&h=307&c=7&dpr=1.7&o=7&rm=3'
  },

  // 🌆 EVENING
  {
    id: 'e1', vibe: 'evening', emoji: '🌆', tall: false,
    caption: 'Golden hour at Velvet Brew',
    src: 'https://tse3.mm.bing.net/th/id/OIP.Kt0mO6wVMyNyvOZv5r-VQQAAAA?pid=ImgDet&w=192&h=254&c=7&dpr=1.7&o=7&rm=3'
  },
  {
    id: 'e2', vibe: 'evening', emoji: '🌆', tall: true,
    caption: 'Warm lights glow at dusk',
    src: 'https://i.ytimg.com/vi/lEbCjqpKQKE/maxresdefault.jpg'
  },
  {
    id: 'e3', vibe: 'evening', emoji: '🌆', tall: true,
    caption: 'Window reflections, evening calm',
    src: 'https://tse3.mm.bing.net/th/id/OIP.l-J2iKu7se33e__DGVC_TQAAAA?pid=ImgDet&w=187&h=333&c=7&dpr=1.7&o=7&rm=3'
  },
  {
    id: 'e4', vibe: 'evening', emoji: '🌆', tall: false,
    caption: 'Soft shadows, warm coffee',
    src: 'https://images.stockcake.com/public/4/e/4/4e41758c-a647-4e42-8e16-545b26d4e2a1_large/cozy-autumn-evening-stockcake.jpg'
  },
  {
    id: 'e5', vibe: 'evening', emoji: '🌆', tall: true,
    caption: 'The perfect evening corner',
    src: 'https://tse4.mm.bing.net/th/id/OIP.n3VJT3DMOUST3YMqmpkPPQAAAA?pid=ImgDet&w=187&h=334&c=7&dpr=1.7&o=7&rm=3'
  },

  // 🌙 DATE NIGHT
  {
    id: 'n1', vibe: 'night', emoji: '🌙', tall: true,
    caption: 'Candlelit table for two',
    src: 'https://img.freepik.com/premium-photo/quota-candlelit-dinner-table-set-two-with-elegant-place-settingsquot_1168612-234900.jpg'
  },
  {
    id: 'n2', vibe: 'night', emoji: '🌙', tall: false,
    caption: 'Fairy lights, stolen glances',
    src: 'https://assets-cdn.kathmandupost.com/uploads/source/news/2023/lifestyle/ttttttttttt-1676254297.jpg'
  },
  {
    id: 'n3', vibe: 'night', emoji: '🌙', tall: false,
    caption: 'Perfect corner, perfect date',
    src: 'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/restaurants-date-night.jpg'
  },
  {
    id: 'n4', vibe: 'night', emoji: '🌙', tall: true,
    caption: 'Warm bulbs, soft music',
    src: 'https://sofar-sounds-live.imgix.net/images/EventCollection-415-1.77777-1730321393436-image.jpg?fit=crop&crop=focalpoint&fp-x=0.5000&fp-y=0.5000&fp-z=1.000&ar=16:9&q=60'
  },
  {
    id: 'n5', vibe: 'night', emoji: '🌙', tall: false,
    caption: 'The city lights outside',
    src: 'https://tse4.mm.bing.net/th/id/OIP.Shxmf_0Bl4fV-G-18BF2HAHaE7?pid=ImgDet&w=192&h=128&c=7&dpr=1.7&o=7&rm=3'
  },
  {
    id: 'n6', vibe: 'night', emoji: '🌙', tall: true,
    caption: 'Dim light, deep conversations',
    src: 'https://tse2.mm.bing.net/th/id/OIP.qgAfQV2eGMWzo2xhew9cqQAAAA?pid=ImgDet&w=195&h=292&c=7&dpr=1.7&o=7&rm=3'
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
