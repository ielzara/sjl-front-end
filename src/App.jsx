import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import ArticleList from './components/ArticleList';
import ArticlePage from './pages/ArticlePage';
import ScrollToTop from './components/ScrollToTop';

// Separate component to handle navigation
const AppContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (term) => {
    setSearchTerm(term);
    navigate('/'); // Navigate to home page when searching
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navigation 
        onSearch={handleSearch} 
        onClearSearch={handleClearSearch}
        searchTerm={searchTerm}
      />
      <Routes>
        <Route 
          path="/" 
          element={<ArticleList keyword={searchTerm} />} 
        />
        <Route 
          path="/articles/:id" 
          element={<ArticlePage />} 
        />
      </Routes>
    </div>
  );
};

// Main App component
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;