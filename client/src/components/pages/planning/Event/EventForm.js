import React, { Component, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        <h1>Event Form Component</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Enter venue"
            name="venue"
            value={this.state.venue}
            onChange={this.onChange}
            autoFocus="autofocus"
          />
          <input
            type="text"
            placeholder="Enter description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            autoFocus="autofocus"
          />
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDate}
          />
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDate}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
            timeCaption="Time"
          />
          <div>
            <button className="btn">Add Event</button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default EventForm;
