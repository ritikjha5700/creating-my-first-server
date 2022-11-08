// npm - node package manager
const http = require("http"); // importing http package in http variable

const port = 9534;

http
  .createServer((request, response) => {
    response.writeHead(200, { "content-Type": "text/html" });
    response.write("<h1> Hello, this is a message from server </h1>");
    response.end();
  })
  .listen(port, () => {
    console.log(`node.js server started on port ${port}`);
  });

// http://localhost:9534
// "_comment1": "start is a predefined keyword, so to run: (npm start) will work",
// "_comment2": "ritik is not a predefined keyword, so to run: (npm run ritik) will work"
