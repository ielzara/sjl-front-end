import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ArticleList from './components/ArticleList';
import ArticlePage from './pages/ArticlePage';
import Navigation from './components/Navigation';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (term) => {
    setSearchKeyword(term);
  };

  const handleClear = () => {
    setSearchKeyword('');
  };

  return (
    <BrowserRouter>
      <div>
        <Navigation 
          onSearch={handleSearch} 
          onClearSearch={handleClear}
          searchTerm={searchKeyword}
        />
        <main>
          <Routes>
            <Route path="/" element={<ArticleList keyword={searchKeyword} />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;