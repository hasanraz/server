const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response
  res.end('Hello, world!');
});

// Start server
const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});