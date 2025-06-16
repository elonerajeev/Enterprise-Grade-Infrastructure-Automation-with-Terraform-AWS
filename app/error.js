const path = require('path');

function errorHandler(err, req, res, next) {
  // Log the error (could be enhanced for production)
  console.error(err.stack);

  // Respond with HTML error page
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname, 'views', 'error.html'));
}

module.exports = errorHandler;
