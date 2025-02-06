import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import logo from '../assets/SJL-logo-final.jpg';

const Navigation = ({ onSearch, onClearSearch, searchTerm }) => {
  return (
    <header className="bg-logo-bg shadow-lg">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" onClick={onClearSearch} className="flex items-center no-underline">
          <img 
            src={logo} 
            alt="Social Justice Library Logo" 
            className="h-32 w-auto" 
          />
          <span className="text-xl font-bold ml-4 text-gray-800 font-merriweather">Social Justice Library</span>
        </Link>
        
        <div className="w-[400px]">
          <SearchBar 
            onSearch={onSearch} 
            onClear={onClearSearch}
            searchTerm={searchTerm} 
          />
        </div>
      </div>
    </header>
  );
};

Navigation.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
};

export default Navigation;