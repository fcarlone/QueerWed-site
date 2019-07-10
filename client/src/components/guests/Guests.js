import React, { Fragment, useContext } from "react";
import GuestItem from "./GuestItem";
import GuestContext from "../../context/guest/guestContext";

const Guests = () => {
  // Initialize context
  const guestContext = useContext(GuestContext);

  const { guests } = guestContext;
  console.log("guest component", guests);
  return (
    <Fragment>
      {guests.map(guest => (
        <GuestItem key={guest.id} guest={guest} />
      ))}
    </Fragment>
  );
};

export default Guests;
