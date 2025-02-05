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
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search articles..."
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
      {localSearchTerm && <button type="button" onClick={handleClear}>Clear</button>}
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
};

export default SearchBar;