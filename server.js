const http = require('http'), fs = require('fs'), path = require('path');
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript' };
http.createServer((req, res) => {
  let f = req.url === '/' ? 'index.html' : req.url.slice(1);
  fs.readFile(path.join(__dirname, f), (e, d) => {
    if (e) { res.writeHead(404); res.end('404'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' });
    res.end(d);
  });
}).listen(8080, '127.0.0.1', () => console.log('http://127.0.0.1:8080'));
