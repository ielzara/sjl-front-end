import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  return (
    <div>
      {book.cover_url && (
        <img src={book.cover_url} alt={`${book.title} cover`} />
      )}
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      {book.relevance_explanation && (
        <p>{book.relevance_explanation}</p>
      )}
      <a href={book.url} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
    cover_url: PropTypes.string,
    relevance_explanation: PropTypes.string
  }).isRequired
};

export default BookCard;