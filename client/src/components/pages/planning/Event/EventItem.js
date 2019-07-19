import React, { Fragment } from "./node_modules/react";
import "../../../../styles/event/eventItem.css";
const moment = require("./node_modules/moment");

const EventItem = props => {
  const { venue, description, date } = props.event;

  // Format date & time
  const dateFormat = moment(date).format("MMMM Do, YYYY");
  const timeFormat = moment(date).format("h:mm A");

  return (
    <Fragment>
      <div className="event-card">
        <h3>
          <strong>Location: </strong>
          {venue}
        </h3>
        <h3>
          <strong>Event description: </strong>
          {description}
        </h3>
        <div>
          {" "}
          <h3>
            <strong>Date: </strong>
            {dateFormat}
          </h3>
          <h3>
            <strong>Time: </strong>
            {timeFormat}
          </h3>
        </div>
        <div className="event-item-btn-container">
          <button className="btn" onClick={props.handleRemoveEvent}>
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default EventItem;
