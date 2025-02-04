import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';

const ArticleList = ({ topicId, keyword, featured, startDate, endDate }) => {
 const [articles, setArticles] = useState([]);
 const [total, setTotal] = useState(0);
 const [skip, setSkip] = useState(0);
 const [limit, setLimit] = useState(10);
 const [hasMore, setHasMore] = useState(false);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

 const buildUrl = () => {
   const url = new URL(`${import.meta.env.VITE_API_URL}/articles`);
   url.searchParams.append('skip', skip);
   url.searchParams.append('limit', limit);
   
   if (topicId) url.searchParams.append('topic_id', topicId);
   if (keyword) url.searchParams.append('keyword', keyword);
   if (featured) url.searchParams.append('featured', featured);
   if (startDate) url.searchParams.append('start_date', startDate);
   if (endDate) url.searchParams.append('end_date', endDate);
   
   return url;
 };

 const fetchArticles = async () => {
   const url = buildUrl();
   console.log('Fetching articles from:', url.toString());
   setIsLoading(true);
   try {
     const response = await fetch(buildUrl());
     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
     
     const data = await response.json();
     setArticles(data.items);
     setTotal(data.total);
     setSkip(data.skip);
     setLimit(data.limit);
     setHasMore(data.has_more);
   } catch (err) {
     setError('Failed to fetch articles');
   } finally {
     setIsLoading(false);
   }
 };

 useEffect(() => {
   setSkip(0);
   fetchArticles();
 }, [topicId, keyword, featured, startDate, endDate]);

 useEffect(() => {
   fetchArticles();
 }, [skip]);

 const renderPageNumbers = () => {
   const pages = [];
   const totalPages = Math.ceil(total / limit);
   
   for (let i = 1; i <= totalPages; i++) {
     pages.push(
       <button
         key={i}
         onClick={() => setSkip((i - 1) * limit)}
         disabled={Math.floor(skip / limit) + 1 === i}
       >
         {i}
       </button>
     );
   }
   return pages;
 };

 if (error) return <div>{error}</div>;
 if (isLoading) return <div>Loading...</div>;

 return (
   <div>
     <div>
       {articles.map(article => (
         <ArticleCard key={article.id} article={article} />
       ))}
     </div>

     <div>
       {renderPageNumbers()}
     </div>
   </div>
 );
};

ArticleList.propTypes = {
 topicId: PropTypes.number,
 keyword: PropTypes.string,
 featured: PropTypes.bool,
 startDate: PropTypes.string,
 endDate: PropTypes.string
};

export default ArticleList;