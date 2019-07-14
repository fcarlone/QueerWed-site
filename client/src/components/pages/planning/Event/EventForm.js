import React, { Component, Fragment } from "react";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../../styles/event/eventForm.css";

class EventForm extends Component {
  state = {
    venue: "",
    description: "",
    startDate: new Date()
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("event form", this.state);
    // Add new event
    this.props.addEvent(this.state);
    // Reset fields
    this.setState({
      venue: "",
      description: ""
    });
    console.log("event form", this.state);
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDate = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <Fragment>
        <div className="event-form-container">
          <h2>Enter Venue Information</h2>
          <Form onSubmit={this.onSubmit}>
            <Form.Group>
              <input
                type="text"
                placeholder="Enter venue"
                name="venue"
                value={this.state.venue}
                onChange={this.onChange}
                autoFocus="autofocus"
                className="event-form-venue"
              />
            </Form.Group>

            <Form.Group>
              <input
                type="text"
                placeholder="Enter description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                className="event-form-description"
              />
            </Form.Group>

            <Form.Group>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleDate}
                className="event-form-date"
              />
            </Form.Group>

            <Form.Group>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleDate}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
                className="event-form-time"
              />
            </Form.Group>

            <div className="event-btn-container">
              <button className="btn btn-event-form">Add Event</button>
            </div>
          </Form>
        </div>
      </Fragment>
    );
  }
}

export default EventForm;
