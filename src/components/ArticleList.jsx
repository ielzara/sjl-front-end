import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      publishedDate: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      topics: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ArticleList;