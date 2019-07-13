import React, { Fragment } from "react";
const moment = require("moment");

const EventItem = props => {
  const { venue, description, date } = props.event;

  // Format date & time
  const dateFormat = moment(date).format("MMMM Do, YYYY");
  console.log(dateFormat);

  const timeFormat = moment(date).format("h:mm A");
  console.log(timeFormat);

  return (
    <Fragment>
      <h1>Event Item Component</h1>
      <div>
        <h3>{venue}</h3>
        <h3>{description}</h3>
        <div>
          {" "}
          <h3>{dateFormat}</h3>
          <h3>{timeFormat}</h3>
        </div>
        <div>
          <button className="btn" onClick={props.handleEditEvent}>
            Edit
          </button>
          <button className="btn" onClick={props.handleRemoveEvent}>
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default EventItem;
