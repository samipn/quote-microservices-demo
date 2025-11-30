const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
  "Stay hungry, stay foolish.",
  "Ships in harbor are safe, but that's not what ships are built for.",
  "Whether you think you can or you think you can't, you're right."
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/quote', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote });
});

app.listen(PORT, () => {
  console.log(`Monolith app listening on port ${PORT}`);
});
