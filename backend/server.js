const http = require('http');
const db = require('./db');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer(async (req, res) => {
  const { rows: products } = await db.query('SELECT * FROM products');

  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  // res.end(JSON.stringify(products));
  setTimeout(() => res.end(JSON.stringify(products)), 5000)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})