import PropTypes from "prop-types";
import TimeStamp from "./TimeStamp";
import { Link } from 'react-router-dom';


const ArticleCard = ({ article, isPreview = true }) => {
  const renderImage = () => {
    if (isPreview && article.thumbnail_url) {
      return (
        <img 
          src={article.thumbnail_url}
          alt={article.main_image_alt || article.title}
          className="w-full h-48 object-cover"
        />
      );
    } else if (!isPreview && article.main_image_url) {
      return (
        <figure className="w-full">
          <img
            src={article.main_image_url}
            alt={article.main_image_alt || article.title}
            className="w-full h-96 object-cover"
          />
          {(article.main_image_caption || article.main_image_credit) && (
            <figcaption className="text-sm text-gray-600 mt-2">
              {article.main_image_caption}
              {article.main_image_caption && article.main_image_credit && ' | '}
              {article.main_image_credit && (
                <span className="italic">{article.main_image_credit}</span>
              )}
            </figcaption>
          )}
        </figure>
      );
    }
    return null;
  };

  return (
    <div>
      {renderImage()}
      <h2>{article.title}</h2>
      <div>
        <TimeStamp time={article.date} />
        <span><a href={article.url}>{article.source}</a></span>
        {article.featured && <span>Featured</span>}
      </div>
      <div className="article-content">
        {isPreview ? (
          <div dangerouslySetInnerHTML={{ 
            __html: article.content.substring(0, 300).replace(/<[^>]*>?/g, '') + '...'
          }} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        )}
      </div>
      {isPreview && <Link to={`/articles/${article.id}`}>Read More</Link>}
    </div>
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