import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/quotes/random');
      setQuote(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

 
};

export default QuoteDisplay;
