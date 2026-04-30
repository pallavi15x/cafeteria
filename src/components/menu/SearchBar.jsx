import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <span className="text-coffee-mocha text-xl">🔍</span>
      </div>
      <input
        type="text"
        className="w-full pl-12 pr-4 py-4 rounded-full bg-coffee-cream/80 backdrop-blur-sm border-2 border-coffee-beige focus:border-coffee-caramel focus:outline-none focus:ring-2 focus:ring-coffee-caramel/20 shadow-glass transition-all duration-300 text-coffee-dark placeholder-coffee-mocha/70 font-medium"
        placeholder="Search for your favorite brew..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
