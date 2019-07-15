const isAuthenticated = require("../config/middleware/isAuthenticated");

// Connect model
const Todo = require("../models/Todo");

module.exports = function(app) {
  // Get todos
  app.get("/api/todos", isAuthenticated, async (req, res, next) => {
    try {
      const todos = await Todo.find({ user: req.user._id }).sort({ date: 1 });

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

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });

  // Delete todo
  app.delete("/api/todos/:id", isAuthenticated, async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);

      // If todo does not exists
      if (!todo) {
        return res.status(404).json({ msg: "Todo not found" });
      }

      // Verify user owns todo
      if (!todo.user.equals(req.user._id)) {
        return res.status(401).json({ msg: "User not authorized" });
      }

      // Delete todo from database
      await Todo.findByIdAndDelete(req.params.id);

      // Return todo to the client
      res.json(todo);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });

  // Toggle complete
  app.put("/api/todos/:id", async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);

      // Update completed value
      await Todo.findByIdAndUpdate(todo.id, req.body);

      // Return todo to the client
      await res.json(todo);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });
};
