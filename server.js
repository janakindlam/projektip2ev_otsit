// server.js
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);

    // routing
    switch(req.url) {
      case '/':
        path = 'index.html';
        res.statusCode = 200;
        break;
    //   case '/about':
    //     path += 'about.html';
    //     res.statusCode = 200;
        break;
      default:
        console.log("fucked")
        res.statusCode = 404;
    }

    // send html
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      }
      //res.write(data);
      res.end(data);
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



