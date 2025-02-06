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
    <form onSubmit={handleSubmit} style={{position: 'relative', width: '100%'}}>
      <input
        type="search"
        placeholder="Search articles..."
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        style={{
            width: '100%',
            height: '40px',
            padding: '0 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            backgroundColor: 'white',
            color: '#374151',
            fontFamily: 'Merriweather, serif'
          }}
      />
      <div style={{
        position: 'absolute',
        right: '8px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        {localSearchTerm && (
          <button
            type="button"
            onClick={handleClear}
            style={{
              padding: '4px 8px',
              color: '#9CA3AF',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px'
            }}
          >
            ×
          </button>
        )}
        <button
          type="submit"
          style={{
              height: '32px',
              padding: '0 16px',
              backgroundColor: '#F3F4F6',
              border: '1px solid #D1D5DB',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#374151',
              cursor: 'pointer',
              fontFamily: 'Merriweather, serif'
            }}
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