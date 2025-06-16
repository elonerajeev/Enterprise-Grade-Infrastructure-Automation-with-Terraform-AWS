const express = require('express');
const path = require('path');
const errorHandler = require('./error');

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

// Health check endpoint (best practice: include uptime, memory, and status)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
  });
});

// Test error route (for manual error triggering)
app.get('/test-error', (req, res, next) => {
  next(new Error('Test error!'));
});

// 404 handler (for unmatched routes)
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// Error handler middleware (handles all errors)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
