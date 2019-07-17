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
          <h2>To Do:</h2>
          
          <div className="add-item">
            
          <form onSubmit={this.onSubmit}>
          <div class="input-group mb-3">
         <input
              type="text"
              placeholder="Add a new task"
              aria-label="Add a new task"
              aria-describedby="basic-addon2"
              value={this.state.newItem}
              onChange={this.onChange}
              autoFocus="autofocus"
              className="input-todo"
            />
             <div class="input-group-append">
            <div className="todo-btn-container">
              <button className="btn btn-todo">Add Item</button>
            </div>
            </div>
            </div>
          </form>
          
        </div>
        </div>
        
      </Fragment>
    );
  }
}

export default TodoForm;
