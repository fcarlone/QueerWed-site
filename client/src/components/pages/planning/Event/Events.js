import React, { Component, Fragment } from "react";
import EventForm from "./EventForm";
import EventItem from "./EventItem";
import axios from "axios";

class Events extends Component {
  state = {
    events: []
  };

  // Lifecycle method - display saved events
  componentDidMount() {
    console.log("events component did mount");
    axios.get("/api/events").then(response => {
      this.setState({
        events: response.data
      });
      console.log("events state", this.state);
    });
  }

  handleNewEvent = newEvent => {
    console.log("new event", newEvent);
    // axios call
    axios.post("/api/events", newEvent).then(response => {
      console.log("new event", response);
    });
  };

  handleRemoveEvent = id => {
    console.log(id);
    axios.delete(`/api/events/${id}`).then(response => {
      console.log("delete event", response.data);
    });
  };

  handleEditEvent = id => {
    console.log(id);
  };

  render() {
    return (
      <Fragment>
        <h1>Events Component</h1>
        <EventForm addEvent={this.handleNewEvent} />
        {this.state.events.map(event => (
          <EventItem
            key={event._id}
            event={event}
            handleRemoveEvent={() => this.handleRemoveEvent(event._id)}
            handleEditEvent={() => this.handleEditEvent(event._id)}
          />
        ))}
      </Fragment>
    );
  }
}

export default Events;
