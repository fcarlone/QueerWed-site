import React, { Fragment, useContext } from "react";
import GuestItem from "./GuestItem";
import GuestContext from "../../context/guest/guestContext";

const Guests = () => {
  // Initialize context
  const guestContext = useContext(GuestContext);

  const { guests, filtered } = guestContext;

  if (guests.length === 0) {
    return <h4>Add guests here</h4>;
  }

  console.log("guest component", guests);
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(guest => <GuestItem key={guest.id} guest={guest} />)
        : guests.map(guest => <GuestItem key={guest.id} guest={guest} />)}
    </Fragment>
  );
};

export default Guests;
