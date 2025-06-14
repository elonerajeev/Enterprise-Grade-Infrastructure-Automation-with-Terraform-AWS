const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set views directory for HTML files
app.use('/views', express.static(path.join(__dirname, 'views')));

// Route to serve the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// API route (you can add more routes like this)
app.get("/api/hello", (req, res) => {
  res.json({ 
    message: "🚀 Hello from Dockerized Node.js App! by @Elone.rajeev",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
