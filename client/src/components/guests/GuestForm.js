import React, { useState, useContext, useEffect } from "react";
import GuestContext from "../../context/guest/guestContext";

const GuestForm = () => {
  // Get access to state and methods
  const guestContext = useContext(GuestContext);

  const { addGuest, updateGuest, clearCurrent, current } = guestContext;

  useEffect(() => {
    if (current !== null) {
      setGuest(current);
    } else {
      // Set to nothing
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
    }
  }, [guestContext, current]);

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

    if (current === null) {
      // addGuest
      addGuest(guest);
    } else {
      updateGuest(guest);
    }

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

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2> {current ? "Edit Guest" : "Add Guest"}</h2>
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
        <input
          type="submit"
          value={current ? "Update Guest" : "Add Guest"}
          className="btn btn-primary"
        />
      </div>
      {current && (
        <div>
          {" "}
          <button className="btn" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default GuestForm;
