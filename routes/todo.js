const isAuthenticated = require("../config/middleware/isAuthenticated");

// Connect model
const Todo = require("../models/Todo");

module.exports = function(app) {
  // Get todos
  app.get("/api/todos", isAuthenticated, async (req, res, next) => {
    try {
      const todos = await Todo.find({ user: req.user._id }).sort({ date: -1 });

      // Return todos to client
      res.json(todos);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });

  // Add todo
  app.post("/api/todos", isAuthenticated, async (req, res, next) => {
    console.log("add new todo post route", req.body);

    try {
      const newTodo = new Todo({
        todo: req.body.todo,
        user: req.user._id
      });

      // Save todo to database
      const todo = await newTodo.save();

      // Return todo to the client
      res.json(todo);

      // Catch erroe
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });
};
