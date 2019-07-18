import React, { useContext, useEffect } from "react";
import GuestContext from "../../../context/guest/guestContext";
import "../../../style/website/rsvp.css";
import { PromiseProvider } from "mongoose";


function Rsvp(props) {

  // const guestContext = useContext(GuestContext);
  // // const { deleteGuest, setCurrent, clearCurrent } = guestContext;
  // const { guests, getGuests } = guestContext;
  
  // console.log("guest list", guests)
  // useEffect(() => {
  //   console.log("this is working")
  //   getGuests();
  //   // eslint-disable-next-line
  // }, []);

  return(
    <div className="jumbotron d-flex" id="rsvp">
    <div className="container">
      <h1>RSVP </h1>
      <h3 id="secondline"> Please RSVP by {props.rsvpdate}</h3>
    <div id="thirdline" className="text-center">
      Your Name : <sapn>
      <input id="findname"
      onChange={props.handleRsvpName} 
      value={props.value}
      name= "guestname"
      type="text"
      placeholder="Type your name" />
    {/* <select id="findname" className="custom-select">
      <option selected>Find Your name here</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>  */}
    </sapn>
    <div id="fourline" className="guestanswer">
    <div className="form-check">
    <input className="form-check-input" type="checkbox" value="yes" />
  <label className="form-check-label" for="defaultCheck1">
    Yes, I will be there
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="no" />
  <label className="form-check-label" for="defaultCheck2">
    No, I won't be there
  </label>
  </div>
    </div>
    <button id="rsvpbutton" onClick={props.handleRsvpSubmitButton} type="button" 
          className="btn btn-outline-secondary">Submit</button>
    </div>
      {/* <h3>
        {guests.map((guest) => (
          console.log(guest.name)
        ))}
      </h3> */}
    </div>
    </div>
  )
}

export default Rsvp;