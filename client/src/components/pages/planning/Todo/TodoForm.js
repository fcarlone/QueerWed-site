import React, { Component, Fragment } from "react";
import "../../../../styles/todo/todoForm.css";

class TodoForm extends Component {
  state = {
    newItem: "",
    error: "",
    current: ""
  };

  onSubmit = event => {
    event.preventDefault();

    console.log("onSubmit", this.state);
    if (this.props.current === null) {
      console.log("true - is empty");
      // handle blank submit
      if (this.state.newItem.length < 1) {
        this.setState({ error: "Please provide an item" });
      } else {
        // Add new item
        this.props.addTodo(this.state);
      }
      // Reset field
      this.setState({ newItem: "", current: "" });
    } else {
      console.log("false - is not empty", this.state);

      // Edit Todo
      this.props.editTodo(this.state);

      // Reset field
      this.setState({ newItem: "", current: "" });
    }
  };

  onChange = event => {
    const newItemText = event.target.value;
    this.setState({
      newItem: newItemText
    });
  };

  onChangeEdit = event => {
    console.log(event.target.value);
    console.log(this.state);
    this.setState({
      newItem: event.target.value,
      current: this.props.current
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container-form">
          <h2>Checklist</h2>
          <form onSubmit={this.onSubmit}>
            {this.props.current !== null ? (
              // true
              <input
                type="text"
                placeholder="Add a new task"
                value={this.props.current.todo}
                onChange={this.onChangeEdit}
                autoFocus="autofocus"
                className="input-todo"
              />
            ) : (
              // false
              <input
                type="text"
                placeholder="Add a new task"
                value={this.state.newItem}
                onChange={this.onChange}
                autoFocus="autofocus"
                className="input-todo"
              />
            )}

            <div className="todo-btn-container">
              <button className="btn btn-todo">
                {this.props.current !== null ? "Edit Item" : "Add Item"}
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default TodoForm;
