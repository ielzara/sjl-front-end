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
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #D1D5DB',
            borderRadius: '6px',
            backgroundColor: i === currentPage ? '#F3F4F6' : 'white',
            color: '#374151',
            cursor: i === currentPage ? 'default' : 'pointer',
            fontSize: '0.875rem',
            fontFamily: 'Merriweather, serif'
          }}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      {isLoading && <LoadingSkeleton />}
      {error && <ErrorMessage message={error} onRetry={fetchArticles} />}
      
      {!isLoading && !error && (
        <>
          <div style={{ marginBottom: '2rem' }}>
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'center',
            marginTop: '2rem',
            marginBottom: '4rem'
          }}>
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