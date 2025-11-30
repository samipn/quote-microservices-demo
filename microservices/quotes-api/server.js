const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

const quotes = [
  "Stay hungry, stay foolish.",
  "Ships in harbor are safe, but that's not what ships are built for.",
  "Whether you think you can or you think you can't, you're right."
];

app.get('/api/quote', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote });
});

app.get('/healthz', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`quotes-api listening on port ${PORT}`);
});
