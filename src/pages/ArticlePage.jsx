import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import BookList from '../components/BookList';

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
        console.log('Fetching article:', `${import.meta.env.VITE_API_URL}/articles/${id}`);
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

  if (error) return <div>{error}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!article) return <div>Article not found</div>;

  return (
    <div className="max-w-7xl my-8 mx-auto px-4 grid grid-cols-[1fr_400px] gap-8">
      <div>
        <ArticleCard article={article} isPreview={false} />
      </div>
      <aside className="bg-white rounded-lg border border-gray-200 p-6 h-fit">
        <h2 className="text-xl font-bold mb-4 font-merriweather text-gray-900">Related Books</h2>
        <BookList books={relatedBooks} />
      </aside>
    </div>
  );
};

export default ArticlePage;