import React, { Component, Fragment } from "react";
import EventForm from "./EventForm";
import axios from "axios";

class Events extends Component {
  state = {
    events: []
  };

  handleNewEvent = newEvent => {
    console.log("new event", newEvent);
    const eventObject = {
      event: newEvent
    };

    // axios call
    axios.post("/api/events", eventObject).then(response => {
      console.log("new event", response);
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Events Component</h1>
        <EventForm addEvent={this.handleNewEvent} />
      </Fragment>
    );
  }
}

export default Events;
