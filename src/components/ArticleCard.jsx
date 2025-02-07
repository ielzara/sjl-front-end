import PropTypes from "prop-types";
import TimeStamp from "./TimeStamp";
import { Link } from 'react-router-dom';
import './ArticleContent.css';

const ArticleCard = ({ article, isPreview = true }) => {
  return (
    <article className={`
      bg-white
      rounded-lg
      border
      border-gray-200
      overflow-hidden
      mb-8
      shadow-sm
      flex
      ${isPreview ? 'flex-row p-6' : 'flex-col p-0'}
    `}>
      {/* Article image for preview mode */}
      {isPreview && article.thumbnail_url && (
        <div className="w-[300px] h-auto flex-shrink-0 mr-6 flex items-center">
          <div className="w-full h-[200px] rounded overflow-hidden">
            <img 
              src={article.thumbnail_url}
              alt={article.main_image_alt || article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Article content */}
      <div className={`
        p-6
        flex-1
        flex
        flex-col
        ${isPreview ? 'justify-center' : 'justify-start'}
      `}>
        <h1 className={`
          ${isPreview ? 'text-2xl' : 'text-3xl'}
          font-bold
          mb-3
          font-serif
          text-gray-900
        `}>{article.title}</h1>

        <div className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
          <TimeStamp time={article.date} />
          <span>|</span>
          <span>
            <a 
              href={article.url} 
              className="text-gray-500 no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.source}
            </a>
          </span>
          {article.featured && (
            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          )}
        </div>

        {!isPreview && article.main_image_url && (
          <div className="w-[70%] mx-auto my-8 rounded-lg overflow-hidden">
            <img
              src={article.main_image_url}
              alt={article.main_image_alt || article.title}
              className="w-full h-auto object-cover"
            />
            {(article.main_image_caption || article.main_image_credit) && (
              <div className="text-sm text-gray-500 mt-2 px-6">
                {article.main_image_caption}
                {article.main_image_caption && article.main_image_credit && ' | '}
                {article.main_image_credit && (
                  <span className="italic">{article.main_image_credit}</span>
                )}
              </div>
            )}
          </div>
        )}

        <div className="text-gray-600 text-base leading-normal mb-6">
          <div 
            className="article-content max-w-full overflow-hidden"
            dangerouslySetInnerHTML={{ 
              __html: isPreview 
                ? article.content.substring(0, 700) + '...'
                : article.content
            }} 
          />
        </div>

        {isPreview && (
        <div className="flex justify-start">
        <Link 
        to={`/articles/${article.id}`}
        className="inline-block px-4 py-2 bg-gray-100 text-gray-700 no-underline rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-colors"
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