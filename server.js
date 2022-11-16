// npm - node package manager
const http = require("http"); // importing http package in http variable

const port = 9534; // local port no

const todoList = ["Buy flowers", "Play cricket"];

http
  .createServer((req, res) => {
    const { method, url } = req;
    if (url === "/todos") {
      if (method === "GET") {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write(todoList.toString());
      } else if (method === "POST") {
        let body = "";
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
            console.log(chunk);
          })
          .on("end", () => {
            body = JSON.parse(body);
            let newtodo = todoList;
            newtodo.push(body.item);
            console.log(newtodo);
            res.writeHead(201);
          });
      } else if (method === "DELETE") {
        let body = "";
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            body = JSON.parse(body);
            let deleteThis = body.item;

            // for (let i = 0; i < todoList.length; i++) {
            //   if (todoList[i] === deleteThis) {
            //     todoList.splice(i, 1);
            //     break;
            //   }
            // }

            todoList.find((element, index) => {
              if (element === deleteThis) todoList.splice(index, 1);
            });
            res.writeHead(204);
          });
      } else {
        res.writeHead(501);
      }
    } else {
      res.writeHead(404);
    }
    res.end();
  })
  .listen(port, () => {
    // callback function
    console.log(`node.js server started on port ${port}`);
  });

// http://localhost:9534
// "_comment1": "start is a predefined keyword, so to run: (npm start) will work",
// "_comment2": "ritik is not a predefined keyword, so to run: (npm run ritik) will work"
