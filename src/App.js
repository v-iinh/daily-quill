import React, { useState, useEffect, useCallback } from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState('general');
  const key = '' // CHANGE TO YOUR API KEY
  const fetchNews = useCallback(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`)
      .then((res) => res.json())
      .then((data) => {
        const filteredItems = data.articles.filter((item) => item.urlToImage !== null);
        setItems(filteredItems);
      });
  }, [category]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const searchValue = event.target.value.trim();
      if (searchValue !== '') {
        fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${key}`)
          .then((res) => res.json())
          .then((data) => {
            const filteredItems = data.articles.filter((item) => item.urlToImage !== null);
            setItems(filteredItems);
          });
      }
    }
  };

  return (
    <div className="App">
      <h1 className="title">The Daily Quill</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
      <input
        id="search"
        className="search"
        placeholder="search"
        type="text"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default App;