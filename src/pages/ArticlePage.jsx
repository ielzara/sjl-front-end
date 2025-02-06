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
    <div style={{
      maxWidth: '1280px',
      margin: '2rem auto',
      padding: '0 1rem',
      display: 'grid',
      gridTemplateColumns: '1fr 400px',
      gap: '2rem'
    }}>
      <div>
        <ArticleCard article={article} isPreview={false} />
      </div>
      <aside style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        padding: '1.5rem',
        height: 'fit-content'
      }}>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          marginBottom: '1rem',
          fontFamily: 'Merriweather, serif',
          color: '#111827'
        }}>Related Books</h2>
        <BookList books={relatedBooks} />
      </aside>
    </div>
  );
};

export default ArticlePage;