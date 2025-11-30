const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const QUOTES_API_URL = process.env.QUOTES_API_URL || 'http://quotes-api:4000';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/quote', async (req, res) => {
  try {
    const response = await axios.get(`${QUOTES_API_URL}/api/quote`);
    res.json(response.data);
  } catch (err) {
    console.error('Error calling quotes-api:', err.message);
    res.status(502).json({ error: 'Failed to fetch quote' });
  }
});

app.listen(PORT, () => {
  console.log(`web-frontend listening on port ${PORT}`);
});
