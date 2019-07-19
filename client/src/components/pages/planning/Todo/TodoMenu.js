import React, { Fragment } from "./node_modules/react";
import "../../../../styles/todo/todoMenu.css";

class TodoMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      completed: 0,
      open: 0
    };
  }

  render() {
    let count = 0;
    this.props.items.map(item => {
      if (item.completed === true) {
        count++;
        console.log("count", count);
      }
      console.log("final count", count);
      return count;
    });

    return (
      <Fragment>
        <div className="menu-container">
          <h1 className="page-title">Checklist</h1>
          <h3 className="todo-content">
            Total Items: {this.props.items.length}
          </h3>

          <h3 className="todo-content">Todos completed: {count}</h3>
          <h3 className="todo-content">
            Todos outstanding: {this.props.items.length - count}{" "}
          </h3>
        </div>
      </Fragment>
    );
  }
}

export default TodoMenu;
