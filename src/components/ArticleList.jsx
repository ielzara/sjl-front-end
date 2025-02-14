import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import LoadingSkeleton from './LoadingSkeleton';
import ErrorMessage from './ErrorMessage';

const ArticleList = ({ keyword, topicId, featured, startDate, endDate }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const currentPage = parseInt(searchParams.get('page')) || 1;

  const fetchArticles = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);
    
    const url = new URL(`${import.meta.env.VITE_API_URL}/articles`);
    const skip = (currentPage - 1) * limit;
    url.searchParams.append('skip', skip);
    url.searchParams.append('limit', limit);
    if (keyword) url.searchParams.append('keyword', keyword);
    if (topicId) url.searchParams.append('topic_id', topicId);
    if (featured) url.searchParams.append('featured', featured);
    if (startDate) url.searchParams.append('start_date', startDate);
    if (endDate) url.searchParams.append('end_date', endDate);
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      setArticles(data.items);
      setTotal(data.total);
    } catch (err) {
      setError('Failed to fetch articles. Please check your connection and try again.', err);
      setArticles([]);
      setTotal(0);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, limit, keyword, topicId, featured, startDate, endDate]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handlePageClick = (page) => {
    const newParams = new URLSearchParams(searchParams);
    if (page === 1) {
      newParams.delete('page');
    } else {
      newParams.set('page', page);
    }
    setSearchParams(newParams);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const totalPages = Math.ceil(total / limit);
    
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          disabled={isLoading || i === currentPage}
          className={`
            px-4 py-2
            border border-gray-300
            rounded-md
            text-sm text-gray-700
            font-merriweather
            ${i === currentPage 
              ? 'bg-gray-100 cursor-default' 
              : 'bg-white cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-colors'}
          `}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="max-w-[90%] mx-auto px-4 mt-8">
      {isLoading && <LoadingSkeleton />}
      {error && <ErrorMessage message={error} onRetry={fetchArticles} />}
      
      {!isLoading && !error && (
        <>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 auto-rows-fr mb-8">
            {articles.map(article => (
              <div key={article.id} className="h-full">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8 mb-16">
            {renderPageNumbers()}
          </div>
        </>
      )}
    </div>
  );
};

ArticleList.propTypes = {
  keyword: PropTypes.string,
  topicId: PropTypes.number,
  featured: PropTypes.bool,
  startDate: PropTypes.string,
  endDate: PropTypes.string
};

export default ArticleList;