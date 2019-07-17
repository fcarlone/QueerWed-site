import React, { Fragment } from "react";
import "../../../../styles/todo/todoItem.css";

const TodoItems = props => (
  <Fragment>
    <div className="container-todo-item">
      <span
        style={{ textDecoration: props.item.completed ? "line-through" : "" }}
      >
        <h3 className="todo-description">{props.item.todo}</h3>
      </span>
      <button className="btn " onClick={props.toggleComplete}>
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
