import React, { Fragment } from "react";

const TodoItems = props => (
  <Fragment>
    <div>
      <h3>{props.item.todo}</h3>
      <button className="btn" onClick={props.toggleComplete}>
        Complete
      </button>
      <button className="btn" onClick={props.onEditTodo}>
        Edit
      </button>
      <button className="btn" onClick={props.onRemoveTodo}>
        Delete
      </button>
    </div>
  </Fragment>
);

export default TodoItems;
