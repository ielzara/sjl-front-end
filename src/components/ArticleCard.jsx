import PropTypes from "prop-types";
import TimeStamp from "./TimeStamp";
import { Link } from 'react-router-dom';


const ArticleCard = ({ article, isPreview = true }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <div>
        <TimeStamp time={article.date} />
        <span><a href={article.url}>{article.source}</a></span>
        {article.featured && <span>Featured</span>}
      </div>
      <p>{isPreview ? article.content.substring(0, 200) + '...' : article.content}</p>
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
  }).isRequired,
  isPreview: PropTypes.bool
};

export default ArticleCard;