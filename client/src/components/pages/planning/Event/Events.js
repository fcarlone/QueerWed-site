import React, { Component, Fragment } from "react";
import EventForm from "./EventForm";
import EventItem from "./EventItem";
import axios from "axios";
import "../../../../styles/event/event.css";
import Nav from "../../../layout/Nav"

class Events extends Component {
  state = {
    events: [],
    current: null
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

      // Add event to state
      this.setState({
        events: [...this.state.events, response.data]
      });
    });
  };

  handleRemoveEvent = id => {
    console.log(id);
    axios.delete(`/api/events/${id}`).then(response => {
      console.log("delete event", response.data);

      // Remove event from state
      let result = this.state.events.filter(event => {
        return event._id !== response.data._id;
      });

      this.setState({ events: result });
    });
  };

  handleEditEvent = id => {
    console.log(id);
    // Filter through state to find matching event
    let result = this.state.events.filter(event => {
      return event._id === id;
    });

    console.log("edit result", result);
    this.setState({ current: result });
  };

 
  

  render() {
    return (
      <Fragment>
        <Nav />
        <div className="main-image-container">
                        <h2 className="centered"><strong>Manage My Events</strong></h2>
                        <img src="https://equallywed.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-12-at-4.48.25-PM-585x425.png" alt="Manage your events"></img>
                        {/* <img src="http://ericacamilleproductions.com/weddings/wp-content/uploads/2019/02/mymoon-brooklyn-weddingphotographer-lgbt001.jpg"></img> */}

                    </div>
        <div className="container-event">
          {/* <h1 className="event-title">Manage Your Events</h1> */}
          <div className="events-section-one">
            <EventForm
              addEvent={this.handleNewEvent}
              current={this.state.current}
            />
            <div className="events-section-two">
              <h3 className="event-list-description">My Events:</h3>
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
