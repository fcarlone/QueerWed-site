import React, { useContext, useEffect } from "react";
import GuestContext from "../../../context/guest/guestContext";
import "../../../style/website/guestBook.css";


function Rsvp() {

  const guestContext = useContext(GuestContext);
  // const { deleteGuest, setCurrent, clearCurrent } = guestContext;
  const { guests, getGuests } = guestContext;
  

  useEffect(() => {
    getGuests();
    // eslint-disable-next-line
  }, []);

  return(
    <div className="jumbotron d-flex align-items-center" id="rsvp">
    <div className="container vertical-center">
      <h1>RSVP</h1>
      <h3>
        {guests.map((guest) => (
          console.log(guest.name)
        ))}
      </h3>
    </div>
    </div>
  )
}

export default Rsvp;