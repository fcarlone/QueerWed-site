import React from "react";
import Guests from "../../guests/Guests";
import GuestForm from "../../guests/GuestForm";
import GuestFilter from "../../guests/GuestFilter";
import "../../../styles/guest/guestList.css";

const GuestList = () => {
  return (
    <div className="guest-list-container">
      <h1 className="guest-list-title">Guest List Page</h1>
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
