import React, { Fragment } from "react";
import Guests from "../../guests/Guests";
import GuestForm from "../../guests/GuestForm";
import GuestFilter from "../../guests/GuestFilter";
import "../../../styles/guest/guestList.css";
import Nav from "../../layout/Nav"

const GuestList = () => {
  return (
    <Fragment>

      <div className="guest-list-container">
        <h1 className="guest-list-title">Manage Guest List</h1>
        <div className="guest-list-form">
          <GuestForm />
          <div className="guest-list-display">
            <GuestFilter />
            <h3 className="guest-list-description">Guest List:</h3>
            <Guests />
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default GuestList;
