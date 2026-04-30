import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { menuData, categories } from '../../services/menuData';
import { staggerContainer } from '../../animations/variants';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import MenuCard from './MenuCard';
import ItemModal from './ItemModal';

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredData, setFilteredData] = useState(menuData);
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter logic
  useEffect(() => {
    let result = menuData;

    // Apply category filter
    if (activeCategory !== 'All') {
      result = result.filter(item => item.category === activeCategory);
    }

    // Apply search filter
    if (searchQuery.trim() !== '') {
      const lowercasedQuery = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(lowercasedQuery) || 
        item.description.toLowerCase().includes(lowercasedQuery)
      );
    }

    setFilteredData(result);
  }, [searchQuery, activeCategory]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedItem]);

  return (
    <div className="min-h-screen bg-coffee-cream pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-coffee-dark mb-4">Our Menu</h1>
          <p className="text-lg text-coffee-mocha max-w-2xl mx-auto">
            Discover your perfect cup. From bold espressos to sweet treats, everything is crafted with passion.
          </p>
        </div>

        {/* Controls */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {/* Results */}
        {filteredData.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredData.map(item => (
              <MenuCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedItem(item)} 
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block opacity-50">🫗</span>
            <h3 className="text-2xl font-heading font-bold text-coffee-dark mb-2">No items found</h3>
            <p className="text-coffee-mocha">We couldn't find anything matching your search. Try a different term!</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-6 px-6 py-2 bg-coffee-caramel text-coffee-cream rounded-full hover:bg-coffee-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>

      {/* Modal Overlay */}
      <ItemModal 
        item={selectedItem} 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
};

export default MenuPage;
