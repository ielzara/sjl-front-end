import PropTypes from "prop-types";
import TimeStamp from "./TimeStamp";
import { Link } from 'react-router-dom';
import './ArticleContent.css';

const ArticleCard = ({ article, isPreview = true }) => {
  return (
    <article style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      marginBottom: '2rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      display: 'flex',
      flexDirection: isPreview ? 'row' : 'column',
      padding: isPreview ? '1.5rem' : 0
    }}>
      {/* Article image for preview mode */}
      {isPreview && article.thumbnail_url && (
        <div style={{ 
          width: '300px',
          height: 'auto',
          flexShrink: 0,
          marginRight: '1.5rem',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            height: '200px',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <img 
              src={article.thumbnail_url}
              alt={article.main_image_alt || article.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      )}

      {/* Article content */}
      <div style={{ 
        padding: '1.5rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isPreview ? 'center' : 'flex-start'
      }}>
        <h2 style={{
          fontSize: isPreview ? '1.5rem' : '2rem',
          fontWeight: 700,
          marginBottom: '0.75rem',
          fontFamily: 'Merriweather, serif',
          color: '#111827'
        }}>{article.title}</h2>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1rem',
          color: '#6B7280',
          fontSize: '0.875rem'
        }}>
          <TimeStamp time={article.date} />
          <span>|</span>
          <span>
            <a 
              href={article.url} 
              style={{ color: '#6B7280', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.source}
            </a>
          </span>
          {article.featured && (
            <span style={{
              backgroundColor: '#EEF2FF',
              color: '#4F46E5',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 500
            }}>Featured</span>
          )}
        </div>

        {!isPreview && article.main_image_url && (
          <div style={{ 
            width: '70%',
            margin: '2rem auto',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <img
              src={article.main_image_url}
              alt={article.main_image_alt || article.title}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
            {(article.main_image_caption || article.main_image_credit) && (
              <div style={{ 
                fontSize: '0.875rem', 
                color: '#6B7280', 
                marginTop: '0.5rem',
                padding: '0 1.5rem'
              }}>
                {article.main_image_caption}
                {article.main_image_caption && article.main_image_credit && ' | '}
                {article.main_image_credit && (
                  <span style={{ fontStyle: 'italic' }}>{article.main_image_credit}</span>
                )}
              </div>
            )}
          </div>
        )}

        <div style={{ 
          color: '#4B5563',
          fontSize: '1rem',
          lineHeight: '1.5',
          marginBottom: '1.5rem'
        }}>
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ 
              __html: isPreview 
                ? article.content.substring(0, 500) + '...'
                : article.content
            }} 
            style={{
              maxWidth: '100%',
              overflow: 'hidden'
            }}
          />
        </div>

        {isPreview && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Link 
              to={`/articles/${article.id}`}
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: '#F3F4F6',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: 500,
                border: '1px solid #D1D5DB'
              }}
          >
            Read More
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    main_image_url: PropTypes.string,
    main_image_alt: PropTypes.string,
    main_image_caption: PropTypes.string,
    main_image_credit: PropTypes.string,
    thumbnail_url: PropTypes.string
  }).isRequired,
  isPreview: PropTypes.bool
};

export default ArticleCard;