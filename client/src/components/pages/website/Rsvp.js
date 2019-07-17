import React, { useContext, useEffect } from "react";
import GuestContext from "../../../context/guest/guestContext";
import "../../../style/website/rsvp.css";
import { PromiseProvider } from "mongoose";



function Rsvp(props) {

  // const guestContext = useContext(GuestContext);
  // // const { deleteGuest, setCurrent, clearCurrent } = guestContext;
  // const { guests, getGuests } = guestContext;
  


  // useEffect(() => {
  //   getGuests();
  //   // eslint-disable-next-line
  // }, []);

  return(
    <div className="jumbotron d-flex" id="rsvp">
    <div className="container">
      <h1>RSVP</h1>
      <br></br>
      <h3 id="secondline">Please RSVP by : 
        <input 
        onChange={props.handleInputRsvp} 
        value={props.value}
        name="rsvpdate"
        type="text"
        placeholder="Enter date"
        />
      <button onClick={props.handleAddRsvp} type="button" 
      className="btn btn-outline-secondary">Add</button>
      </h3>
      <div className="guestnamelist">
      <h2>Your guest list and RSVP</h2>
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