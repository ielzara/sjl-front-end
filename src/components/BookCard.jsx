import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 flex flex-col items-center gap-2 relative min-h-[400px]">
      {book.cover_url && (
        <div className="w-[100px] h-[150px] flex justify-center items-center">
          <img 
            src={book.cover_url} 
            alt={`${book.title} cover`}
            className="max-w-full max-h-full object-contain bg-gray-100 rounded"
          />
        </div>
      )}
      <h3 className="text-sm font-bold text-gray-900 font-merriweather text-center">{book.title}</h3>
      <p className="text-xs text-gray-600">{book.author}</p>
      {book.relevance_explanation && (
        <p className="[font-size:13px] text-gray-600 leading-snug text-left mb-12">{book.relevance_explanation}</p>
      )}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center">
        <a 
          href={book.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-2 py-1 bg-[#eeeeee] text-gray-900 no-underline rounded text-xs font-medium border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-colors"
        >
          Learn More
        </a>
      </div>
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