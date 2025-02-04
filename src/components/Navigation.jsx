import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const Navigation = ({ onSearch, onClearSearch }) => {
  return (
    <nav>
      <Link to="/" onClick={onClearSearch}>
        <h1>Social Justice Library</h1>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

Navigation.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired
};

export default Navigation;