import React, { Fragment } from "react";

const TodoItems = props => (
  <Fragment>
    <div>
      <span
        style={{ textDecoration: props.item.completed ? "line-through" : "" }}
      >
        <h3>{props.item.todo}</h3>
      </span>
      <button className="btn" onClick={props.toggleComplete}>
        {props.item.completed ? "Undo" : "Completed"}
      </button>
      <button className="btn" onClick={props.handleEditTodo}>
        Edit
      </button>
      <button className="btn" onClick={props.handleRemoveTodo}>
        Delete
      </button>
    </div>
  </Fragment>
);

export default TodoItems;