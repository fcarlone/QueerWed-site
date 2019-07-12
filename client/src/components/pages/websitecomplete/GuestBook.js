import React, { Component } from 'react';
import "../../../style/website/guestBook.css";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import { Collection } from 'mongoose';


const cardstyle = {
  width: '18rem'
}

class GuestBook extends Component {

  state = {
    guest: null,
    message: '',
    guests: []
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleGuest = () => {
    // this.setState({
    
    // })
    console.log(this.state)
  }

  componentDidMount() {
    //call database to get guests
    //update state
  }

  render() {
    return (
      <>
      <div className="jumbotron d-flex align-items-center" id="guestbook">
        <div className="container vertical-center">
          <div className="card" style={cardstyle}>
            <div className="card-body">
              <input onChange={this.handleChange} name='guest' value={this.state.name} placeholder="Your name" />
              <input onChange={this.handleChange} name='message' value={this.state.message} placeholder="Message to this happy couple" />
              <button onClick={this.handleGuest} className="btn btn-primary">Enter</button>
            </div>
          </div>
        </div>
      </div>
      {/* map */}
      <div>
      {this.state.guests ? (
        <div>
        {this.state.guests.map(id => (
           <MDBCol>
           <MDBCard style={{ width: "22rem" }}>
             <MDBCardBody>
               <MDBCardTitle>{id.guestName}</MDBCardTitle>
               <MDBCardText>{id.guestMessage}</MDBCardText>
             </MDBCardBody>
           </MDBCard>
         </MDBCol>
        ))}
        </div>
      ):(
        <div></div>
      )}
      </div>
      </>
    )
  }
}
export default GuestBook;