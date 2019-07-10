import React from "react";
import Guests from "../../guests/Guests";
import GuestForm from "../../guests/GuestForm";
import GuestFilter from "../../guests/GuestFilter";
import "../../../styles/guest/guestList.css";

const GuestList = () => {
  return (
    <div className="grid-2">
      <h1>Guest List Page</h1>
      <div>
        <GuestForm />
      </div>
      <div>
        <GuestFilter />
        <Guests />
      </div>
    </div>
  );
};

export default GuestList;
