// npm - node package manager
const express = require("express");
// initialization
const app = express();
// application will now use json format as data.
app.use(express.json());

const port = 9534; // local port no

const todoList = ["Buy coffee", "Play cricket"];

// http://localhost:9534/todos
app.get("/todos", (req, res) => {
  //callback
  res.status(200).send(todoList);
});

app.post("/todos", (req, res) => {
  //callback
  let newTodoItem = req.body.item;
  todoList.push(newTodoItem);
  res.status(201).send({
    message: "Task added successfully",
  });
});

app.delete("/todos", (req, res) => {
  //callback
  const itemToDelete = req.body.item;

  todoList.find((element, index) => {
    if (element === itemToDelete) todoList.splice(index, 1);
  });
  res.status(202).send({
    message: `Deleted items: "${req.body.item}"`,
  });
});

// under all, all the other methods (on the particular route )like put, patch etc will fall
app.all("/todos", (req, res) => {
  res.status(501).send();
});

app.listen(port, () => {
  // callback
  console.log(`nodejs server started at port ${port}`);
});

// http://localhost:9534/todos
// "_comment1": "start is a predefined keyword, so to run: (npm start) will work",
// "_comment2": "ritik is not a predefined keyword, so to run: (npm run ritik) will work"
