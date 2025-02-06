import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import logo from '../assets/SJL-logo-final.jpg';

const Navigation = ({ onSearch, onClearSearch, searchTerm }) => {
  return (
    <header style={{backgroundColor: '#ebebeb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Link to="/" onClick={onClearSearch} style={{display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
          <img 
            src={logo} 
            alt="Social Justice Library Logo" 
            style={{ height: '8em', width: 'auto' }} 
          />
          <span style={{fontSize: '1.25rem', fontWeight: 700, marginLeft: '1rem', color: '#1f2937', fontFamily: 'Merriweather, serif'}}>Social Justice Library</span>
        </Link>
        
        <div style={{width: '400px'}}>
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