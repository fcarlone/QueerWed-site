import React, { Component, Fragment } from "react";
import EventForm from "./EventForm";
import EventItem from "./EventItem";
import axios from "axios";
import "../../../../styles/event/event.css";

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
        <div className="container-event">
          <h1 className="event-title">Manage Your Venues</h1>
          <div className="events-section-one">
            <EventForm addEvent={this.handleNewEvent} />
            <div className="events-section-two">
              <h3 className="event-list-description">Event List:</h3>
              {this.state.events.map(event => (
                <EventItem
                  key={event._id}
                  event={event}
                  handleRemoveEvent={() => this.handleRemoveEvent(event._id)}
                  handleEditEvent={() => this.handleEditEvent(event._id)}
                />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Events;
