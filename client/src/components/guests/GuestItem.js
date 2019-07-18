import React, { useContext } from "react";
import GuestContext from "../../context/guest/guestContext";
import PropTypes from "prop-types";
import "../../styles/guest/guestItem.css";

const GuestItem = ({ guest }) => {
  const guestContext = useContext(GuestContext);
  const { deleteGuest, setCurrent, clearCurrent } = guestContext;
  const {
    _id,
    name,
    address1,
    address2,
    city,
    state,
    zip,
    email,
    phone,
    type
  } = guest;

  const handleDeleteGuest = () => {
    deleteGuest(_id);
    clearCurrent();
  };

  return (
    <div className="guest-card">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional"
              ? "badge-success"
              : type === "family"
              ? "badge-primary"
              : "badge-warning")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="guest-list">
        <li>{address1}</li>
        {address2 && <li> {address2} </li>}
        <span>{city}, {state} {zip}</span>
        {email && <li> {email} </li>}
        {phone && <li> {phone} </li>}
      </ul>
      
      <p className="button-container">
        <button className="btn" 
          onClick={() => {
            setCurrent(guest);
          }}
        >
          Edit
        </button>
        <button className="btn" onClick={handleDeleteGuest}>Delete</button>
      </p>
    </div>
  );
};

GuestItem.propTypes = {
  guest: PropTypes.object.isRequired
};

export default GuestItem;
