import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ArticleList from './components/ArticleList';
import ArticlePage from './pages/ArticlePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
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
    </BrowserRouter>
  );
}

export default App;