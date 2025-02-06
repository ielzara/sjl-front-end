import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch, onClear, searchTerm = '' }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localSearchTerm);
  };

  const handleClear = () => {
    setLocalSearchTerm('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="search"
        placeholder="Search articles..."
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        className="w-full h-10 px-4 border border-gray-300 rounded-lg text-sm bg-white text-gray-700 font-merriweather outline-none hover:ring-2 hover:ring-gray-400 hover:border-gray-400 focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {localSearchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="px-2 py-1 text-gray-400 bg-transparent border-none cursor-pointer text-lg hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        )}
        <button
          type="submit"
          className="h-8 px-4 bg-gray-100 border border-gray-300 rounded-md text-sm font-medium text-gray-700 cursor-pointer font-merriweather hover:bg-gray-200 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
};

export default SearchBar;