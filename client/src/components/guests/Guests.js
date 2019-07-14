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
    return <h4 style={{ textAlign: "center" }}>Guest list currently empty</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(guest => <GuestItem key={guest._id} guest={guest} />)
        : guests.map(guest => <GuestItem key={guest._id} guest={guest} />)}
    </Fragment>
  );
};

export default Guests;
