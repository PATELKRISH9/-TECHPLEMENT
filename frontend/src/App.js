import React from 'react';
import QuoteDisplay from './components/QuoteDisplay';
import SearchQuotes from './components/SearchQuotes';

const App = () => {
  return (
   <div>
     <center><h1>Quote of the Day</h1>
      <QuoteDisplay />
      <SearchQuotes /></center>
    </div>
  );
};

export default App;
