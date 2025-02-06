import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      margin: '0.75rem 0'
    }}>
      {book.cover_url && (
        <div style={{
          width: '150px',
          height: '225px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '0.5rem'
        }}>
          <img 
            src={book.cover_url} 
            alt={`${book.title} cover`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '4px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      )}
      <h3 style={{
        fontSize: '1.125rem',
        fontWeight: '700',
        color: '#111827',
        fontFamily: 'Merriweather, serif',
        marginBottom: '0.5rem'
      }}>{book.title}</h3>
      <p style={{
        fontSize: '0.875rem',
        color: '#4B5563',
        marginBottom: '1rem'
      }}>{book.author}</p>
      {book.relevance_explanation && (
        <p style={{
          fontSize: '0.875rem',
          color: '#6B7280',
          lineHeight: '1.5',
          marginBottom: '1rem',
          textAlign: 'left'
        }}>{book.relevance_explanation}</p>
      )}
      <a 
        href={book.url} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          backgroundColor: '#F3F4F6',
          color: '#374151',
          textDecoration: 'none',
          borderRadius: '6px',
          fontSize: '0.875rem',
          fontWeight: '500',
          border: '1px solid #D1D5DB',
          marginTop: 'auto'
        }}
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