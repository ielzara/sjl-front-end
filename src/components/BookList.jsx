import PropTypes from 'prop-types';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
    cover_url: PropTypes.string,
    relevance_explanation: PropTypes.string
  })).isRequired
};

export default BookList;