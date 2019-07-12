import React, { Component, Fragment } from "react";

class TodoForm extends Component {
  state = {
    newItem: "",
    error: ""
  };

  onSubmit = event => {
    console.log("test from component");
    event.preventDefault();
    console.log("test from component");
    // handle blank submit
    if (this.state.newItem.length < 1) {
      this.setState({ error: "Please provide an item" });
    } else {
      // Add new item
      this.props.addTodo(this.state);

      // Reset field
      this.setState({ newItem: "" });
    }
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
        <h1>TodoForm Component</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Enter new item"
            value={this.state.newItem}
            onChange={this.onChange}
            autoFocus="autofocus"
          />
          <div>
            <button className="btn">Add Item</button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default TodoForm;
