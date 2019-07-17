import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import axios from "axios";
import TodoMenu from "./TodoMenu";
import "../../../../styles/todo/todo.css";

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
    console.log("id", id);

    this.setState({
      items: this.state.items.map(item => {
        if (item._id === id) {
          const changeCompleteValue = !item.completed;
          console.log("new completed value", changeCompleteValue);

          // Update Database
          axios
            .put(`/api/todos/${id}`, { completed: changeCompleteValue })
            .then(response => {
              console.log("return value from put request");
            });

          // Update State
          return { ...item, completed: changeCompleteValue };
        }
        return item;
      })
    });
  };

  handleRemoveTodo = id => {
    console.log(id);
    axios.delete(`/api/todos/${id}`).then(response => {
      console.log("Todo removed", response.data);
      let removeTodo = response.data;
      let state = [...this.state.items];
      let result = state.filter(item => item._id !== removeTodo._id);

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
      this.setState({
        items: [...this.state.items, response.data]
      });
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container-todo">
          <h1 className="todo-title">Mangage Your Checklist</h1>
          <div className="one">
            <TodoMenu items={this.state.items} />
            <div className="two">
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
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Todos;
