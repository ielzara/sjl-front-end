import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import BookList from '../components/BookList';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorMessage from '../components/ErrorMessage';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleAndBooks = async () => {
      setIsLoading(true);
      try {
        // Fetch article details
        const articleRes = await fetch(`${import.meta.env.VITE_API_URL}/articles/${id}`);
        if (!articleRes.ok) throw new Error(`HTTP error! status: ${articleRes.status}`);
        const articleData = await articleRes.json();
        setArticle(articleData);

        // Fetch related books
        const booksRes = await fetch(`${import.meta.env.VITE_API_URL}/articles/${id}/books`);
        if (!booksRes.ok) throw new Error(`HTTP error! status: ${booksRes.status}`);
        const booksData = await booksRes.json();
        setRelatedBooks(booksData);
      } catch (err) {
        setError('Failed to fetch article details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticleAndBooks();
  }, [id]);

  if (error) return <div className="max-w-[90%] mx-auto px-4"><ErrorMessage message={error} /></div>;
  if (isLoading) return <LoadingSkeleton type="article" />;
  if (!article) return <div className="max-w-[90%] mx-auto px-4">Article not found</div>;

  return (
    <div className="max-w-[90%] my-8 mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-[6fr_3fr] lg:grid-cols-[5fr_3fr] gap-8">
        <div>
          <ArticleCard article={article} isPreview={false} />
        </div>
        <aside className="bg-white rounded-lg border border-gray-200 p-4 h-fit">
          <h2 className="text-xl font-bold mb-4 font-merriweather text-gray-900 text-center">Related Books</h2>
          <BookList books={relatedBooks} />
        </aside>
      </div>
    </div>
  );
};

export default ArticlePage;