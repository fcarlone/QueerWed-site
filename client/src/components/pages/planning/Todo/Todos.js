import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import axios from "axios";

class Todos extends Component {
  state = {
    items: [
      { text: "Thing One", id: 1 },
      { text: "Thing Two", id: 2 },
      { text: "Thing Three", id: 3 }
    ]
  };

  toggleComplete = id => {
    console.log(id);
  };

  onRemoveTodo = id => {
    console.log(id);
  };

  onEditTodo = id => {
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
      console.log("new todo added", response);
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Todo Component</h1>
        <TodoForm addTodo={this.handleNewTodo} />
        {this.state.items.map(item => (
          <TodoItem
            key={this.state.items.indexOf(item)}
            item={item}
            toggleComplete={() => this.toggleComplete(item.id)}
            onRemoveTodo={() => this.onRemoveTodo(item.id)}
            onEditTodo={() => this.onEditTodo(item.id)}
          />
        ))}
      </Fragment>
    );
  }
}

export default Todos;
