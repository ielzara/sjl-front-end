import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import logo from '../assets/SJL-logo-final.jpg';

const Navigation = ({ onSearch, onClearSearch, searchTerm }) => {
  return (
    <header className="bg-[#eeeeee] shadow-sm">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <Link to="/" onClick={onClearSearch} className="flex flex-col md:flex-row items-center no-underline">
            <div className="rounded-full bg-[#eeeeee] overflow-hidden h-20 md:h-32 w-20 md:w-32 flex items-center justify-center">
              <img 
                src={logo} 
                alt="Social Justice Library Logo" 
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl md:text-3xl font-bold md:ml-4 text-gray-900 font-merriweather text-center md:text-left">
              Social Justice Library
            </span>
          </Link>
          
          <div className="w-full md:w-[400px]">
            <SearchBar 
              onSearch={onSearch} 
              onClear={onClearSearch}
              searchTerm={searchTerm} 
            />
          </div>
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