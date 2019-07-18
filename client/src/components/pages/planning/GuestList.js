import React, { Fragment } from "react";
import Guests from "../../guests/Guests";
import GuestForm from "../../guests/GuestForm";
import GuestFilter from "../../guests/GuestFilter";
import "../../../styles/guest/guestList.css";
import Nav from "../../layout/Nav"

const GuestList = () => {
  return (
    <Fragment>
      <Nav />
         <div className="main-image-container">
                        <h2 className="centered"><strong>Manage My Guest List</strong></h2>
                        <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_600,q_75,w_1440/v1/clients/palmsprings/plan_the_ultimate_lgbt_wedding_social_web_e454f3e7-44f4-43bb-a0b6-7e751d7d082e.jpg" alt="Manage your events"></img>
                        {/* <img src="http://ericacamilleproductions.com/weddings/wp-content/uploads/2019/02/mymoon-brooklyn-weddingphotographer-lgbt001.jpg"></img> */}

                    </div>
      <div className="guest-list-container">
        <div className="guest-list-form">
          <GuestForm />
          <div className="guest-list-display">
            <GuestFilter />
            <h3 className="guest-list-description">Guest List:</h3>
            <Guests />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GuestList;
