import React, { Component } from "react";
import { MDBBadge, MDBContainer, MDBBtn } from "mdbreact";
// import GuestContext from "../../../context/guest/guestContext";
import "../../../style/website/rsvp.css";
import axios from 'axios';
// import { PromiseProvider } from "mongoose";



class Rsvp extends Component {

  state = {
    guestName: '',
    isGoing: '',
    rsvp: []
  }

  componentDidMount() {
    axios.get("/api/rsvp")
      .then(rsvp => this.setState({ rsvp: rsvp.data }))
  }

  render() {

    return (
      <div className="jumbotron d-flex" id="rsvp">
        <div className="container">
          <h1>RSVP</h1>
          <br></br>
          <h3 id="secondline">Please RSVP by :
        <input
              onChange={this.props.handleInputRsvp}
              value={this.props.value}
              name="rsvpdate"
              type="text"
              placeholder="Enter date"
            />
            <button onClick={this.props.handleAddRsvp} type="button"
              className="btn btn-outline-secondary">Add</button>
          </h3>
          <div className="guestnamelist">
            <h2 className="guestcardtitle">Your guest list and RSVP</h2>

            {/* map */}
            <div className="guestcard container row">
                {this.state.rsvp ? (
                  
                    this.state.rsvp.map(id => (
                      <div className="col-3">
                      <MDBContainer>
                        <MDBBtn color="light">
                          {id.guestName} <MDBBadge color="primary" className="ml-2">{id.isGoing}</MDBBadge>
                        </MDBBtn>
                      </MDBContainer>
                      </div>
                    ))
                ) : (
                    <div></div>
                  )}
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Rsvp;