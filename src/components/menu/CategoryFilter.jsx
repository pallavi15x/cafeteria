import React from 'react';

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm ${
            activeCategory === category
              ? 'bg-coffee-dark text-coffee-cream shadow-md scale-105'
              : 'bg-white text-coffee-mocha hover:bg-coffee-beige hover:text-coffee-dark border border-coffee-beige/50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
