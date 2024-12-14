import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ArticleCard = ({ article }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold">{article.headline}</h2>
      <div className="my-2">
        <TimeStamp time={article.publishedDate} />
      </div>
      <p className="my-2">{article.summary}</p>
      <div className="my-2">
        {article.topics.map((topic, index) => (
          <span key={topic} className="mr-1">
            {topic}
          </span>
        ))}
      </div>
      <div className="flex items-center mt-2">
        <span className="text-sm mr-2">Read More </span>
        <span className="text-lg">→</span>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ArticleCard;