import React, { Component, Fragment } from "react";
import "../../../../styles/todo/todoForm.css";

class TodoForm extends Component {
  state = {
    newItem: "",
    error: ""
  };

  onSubmit = event => {
    event.preventDefault();
    // handle blank submit
    if (this.state.newItem.length < 1) {
      this.setState({ error: "Please provide an item" });
    } else {
      // Add new item
      this.props.addTodo(this.state);
    }
    // Reset field
    this.setState({ newItem: "" });
  };

  onChange = event => {
    const newItemText = event.target.value;
    this.setState({
      newItem: newItemText
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container-form">
          <h2>Checklist</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Add a new task"
              value={this.state.newItem}
              onChange={this.onChange}
              autoFocus="autofocus"
              className="input-todo"
            />
            <div className="todo-btn-container">
              <button className="btn btn-todo">Add Item</button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default TodoForm;
