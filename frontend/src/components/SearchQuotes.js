import React, { useState } from 'react';
import axios from 'axios';

const SearchQuotes = () => {
  const [author, setAuthor] = useState('');
  const [quotes, setQuotes] = useState([]);

  const searchQuotes = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/quotes/search?author=${author}`);
      setQuotes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={searchQuotes}>Search</button>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>"{quote.text}" - {quote.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchQuotes;
