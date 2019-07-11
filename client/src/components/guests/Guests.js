import React, { Fragment, useContext, useEffect } from "react";
import GuestItem from "./GuestItem";
import GuestContext from "../../context/guest/guestContext";

const Guests = () => {
  // Initialize context
  const guestContext = useContext(GuestContext);

  const { guests, filtered, getGuests } = guestContext;

  useEffect(() => {
    getGuests();
    // eslint-disable-next-line
  }, []);

  if (guests.length === 0) {
    return <h4>Add guests here</h4>;
  }

  console.log("React Guests Component", guests);
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(guest => <GuestItem key={guest._id} guest={guest} />)
        : guests.map(guest => <GuestItem key={guest._id} guest={guest} />)}
    </Fragment>
  );
};

export default Guests;
