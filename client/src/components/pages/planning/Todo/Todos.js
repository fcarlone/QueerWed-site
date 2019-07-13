import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import axios from "axios";

class Todos extends Component {
  state = {
    items: []
  };

  // Lifecycle method - display saved todos
  componentDidMount() {
    console.log("todo component did mount");
    axios.get("/api/todos").then(response => {
      this.setState({
        items: response.data
      });
      console.log("updated todos state", this.state);
    });
  }

  toggleComplete = id => {
    console.log(id);
    axios.put(`/api/todos/${id}`).then(response => {
      console.log("Todo boolean change", response.data);
    });
  };

  handleRemoveTodo = id => {
    console.log(id);
    axios.delete(`/api/todos/${id}`).then(response => {
      console.log("Todo removed", response.data);
      let removeTodo = response.data;

      let state = [...this.state.items];
      console.log("state", state);
      let result = state.filter(item => item._id !== removeTodo._id);
      console.log("result", result);

      this.setState({
        items: result
      });
    });
  };

  handleEditTodo = id => {
    console.log(id);
  };

  // Add new item to state
  handleNewTodo = newTodo => {
    console.log("new item", newTodo.newItem);
    const itemObject = {
      todo: newTodo.newItem
    };
    // axios call
    axios.post("/api/todos", itemObject).then(response => {
      console.log("new todo added", response.data);
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Todo Component</h1>
        <TodoForm addTodo={this.handleNewTodo} />
        {this.state.items.map(item => (
          <TodoItem
            key={item._id}
            item={item}
            toggleComplete={() => this.toggleComplete(item._id)}
            handleRemoveTodo={() => this.handleRemoveTodo(item._id)}
            handleEditTodo={() => this.handleEditTodo(item._id)}
          />
        ))}
      </Fragment>
    );
  }
}

export default Todos;
