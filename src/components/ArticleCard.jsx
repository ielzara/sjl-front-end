import PropTypes from "prop-types";
import TimeStamp from "./TimeStamp";
import { Link } from 'react-router-dom';
import './ArticleContent.css';

const ArticleCard = ({ article, isPreview = true }) => {
  const truncateText = (html, length) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const textContent = tempDiv.textContent || tempDiv.innerText;
    
    if (textContent.length <= length) return html;
    
    let textLength = 0;
    let htmlLength = 0;
    const chars = html.split('');
    const tempDiv2 = document.createElement('div');
    
    for (let i = 0; i < chars.length; i++) {
      tempDiv2.innerHTML = html.substring(0, i + 1);
      const currentTextLength = (tempDiv2.textContent || tempDiv2.innerText).length;
      
      if (currentTextLength > length) {
        htmlLength = i;
        break;
      }
      textLength = currentTextLength;
    }
    
    const truncatedHtml = html.substring(0, htmlLength);
    const lastOpenTag = truncatedHtml.lastIndexOf('<');
    const lastCloseTag = truncatedHtml.lastIndexOf('>');
    
    let finalHtml = lastOpenTag > lastCloseTag 
      ? truncatedHtml.substring(0, lastOpenTag)
      : truncatedHtml;
      
    return finalHtml + '...';
  };

  return (
    <article className={`
      bg-white
      rounded-lg
      border
      border-gray-200
      overflow-hidden
      shadow-sm
      h-full
      p-4
      relative
    `}>
      {isPreview ? (
        <>
          <div className="flow-root h-full pb-12">
            {article.thumbnail_url && (
              <div className="float-left w-[280px] bg-gray-100 mr-4 mb-3">
                <img 
                  src={article.thumbnail_url}
                  alt={article.main_image_alt || article.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
          
            <div>
              <h1 className="text-lg font-bold mb-2 font-serif text-gray-900">{article.title}</h1>

              <div className="flex flex-wrap items-center gap-1.5 mb-2 text-gray-500 text-xs">
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
                  <span className="bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>

              <div className="text-gray-600 text-sm leading-relaxed">
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ 
                    __html: truncateText(article.content, 250)
                  }} 
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4">
            <Link 
              to={`/articles/${article.id}`}
              className="inline-block px-3 py-1.5 bg-[#eeeeee] text-gray-900 no-underline rounded text-sm font-medium border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-colors"
            >
              Read More
            </Link>
          </div>
        </>
      ) : (
        // Full article view
        <div>
          <h1 className="text-xl md:text-3xl font-bold mb-2 font-serif text-gray-900">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-1.5 mb-2 text-gray-500 text-xs">
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
          </div>

          {article.main_image_url && (
            <div className="w-full md:w-[70%] mx-auto my-4 md:my-8 rounded-lg overflow-hidden">
              <img
                src={article.main_image_url}
                alt={article.main_image_alt || article.title}
                className="w-full h-auto object-contain"
              />
              {(article.main_image_caption || article.main_image_credit) && (
                <div className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2 px-2 md:px-4">
                  {article.main_image_caption}
                  {article.main_image_caption && article.main_image_credit && ' | '}
                  {article.main_image_credit && (
                    <span className="italic">{article.main_image_credit}</span>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="text-gray-600 text-sm md:text-base leading-relaxed">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
          </div>
        </div>
      )}
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