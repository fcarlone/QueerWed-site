import React, { useState, useContext } from "react";
import GuestContext from "../../context/guest/guestContext";

const GuestForm = () => {
  // Get access to state and methods (addGuest)
  const guestContext = useContext(GuestContext);

  const [guest, setGuest] = useState({
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    type: "family"
  });

  const {
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

  const onChange = event => {
    setGuest({
      ...guest,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();

    // addGuest
    guestContext.addGuest(guest);
    // Clear Form
    setGuest({
      name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      phone: "",
      type: "family"
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Address"
        name="address1"
        value={address1}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Apt/Unit No."
        name="address2"
        value={address2}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={city}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="State"
        name="state"
        value={state}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Zip"
        name="zip"
        value={zip}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Guest Type</h5>
      <input
        type="radio"
        name="type"
        value="family"
        onChange={onChange}
        checked={type === "family"}
      />
      Family{" "}
      <input
        type="radio"
        name="type"
        value="friend"
        onChange={onChange}
        checked={type === "friend"}
      />
      Friend{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        onChange={onChange}
        checked={type === "professional"}
      />
      Professional{" "}
      <div>
        <input type="submit" value="Add Guest" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default GuestForm;
