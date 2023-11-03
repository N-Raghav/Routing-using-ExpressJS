const express = require('express');
const app = express();

// Define routes

// Route 1: Home page
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Route 2: About page
app.get('/about', (req, res) => {
  res.send('This is the about page!');
});

// Route 3: Contact page
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
