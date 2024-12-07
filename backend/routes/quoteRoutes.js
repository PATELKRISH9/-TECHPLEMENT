const express = require('express');
const Quote = require('../models/Quote');

const router = express.Router();


router.get('/random', async (req, res) => {
  try {
    const quotes = await Quote.find();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/search', async (req, res) => {
  const { author } = req.query;
  try {
    const quotes = await Quote.find({ author: new RegExp(author, 'i') });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
