import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center gap-4 my-3">
      {book.cover_url && (
        <div className="w-[150px] h-[225px] flex justify-center items-center mb-2">
          <img 
            src={book.cover_url} 
            alt={`${book.title} cover`}
            className="max-w-full max-h-full object-contain rounded shadow-sm"
          />
        </div>
      )}
      <h3 className="text-lg font-bold text-gray-900 font-merriweather mb-2 text-center">{book.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{book.author}</p>
      {book.relevance_explanation && (
        <p className="text-sm text-gray-600 leading-normal mb-4 text-left">{book.relevance_explanation}</p>
      )}
      <a 
        href={book.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-gray-100 text-gray-700 no-underline rounded-md text-sm font-medium border border-gray-300 mt-auto hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-colors"
      >
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