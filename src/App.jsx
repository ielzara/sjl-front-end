// App.jsx
import { useState } from 'react';
import ArticleList from './components/ArticleList';

const mockArticles = [
  {
    id: '1',
    headline: 'Understanding Social Justice in Modern Context',
    publishedDate: '2024-12-14T10:00:00.000Z',
    summary: 'An in-depth look at how social justice movements have evolved in the digital age and their impact on contemporary society. This article explores the intersection of technology, social media, and activism.',
    topics: ['racial justice', 'digital activism'],
  },
  {
    id: '2',
    headline: 'The Impact of Grassroots Movements',
    publishedDate: '2024-12-14T09:30:00.000Z',
    summary: 'Examining how local organizing creates lasting social change, with case studies from successful community initiatives and their ripple effects on policy making.',
    topics: ['activism', 'community organizing'],
  },
  {
    id: '3',
    headline: 'Environmental Justice in Urban Communities',
    publishedDate: '2024-12-14T08:45:00.000Z',
    summary: 'How urban communities are fighting for environmental rights and creating sustainable solutions for future generations.',
    topics: ['environmental justice', 'urban planning'],
  },
];

function App() {
  const [articles] = useState(mockArticles);

  return (
    <div className="p-4">
      <header>
        <h1 className="text-4xl font-bold">Social Justice Library</h1>
        <p className="my-4">Connecting current events with educational resources</p>
        <div>
          <input type="button" value="Latest Articles" />
          <input type="button" value="Browse Topics" />
        </div>
      </header>

      <main>
        <ArticleList articles={articles} />
      </main>
    </div>
  );
}

export default App;