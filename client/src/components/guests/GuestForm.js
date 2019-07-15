import React, { Fragment, useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import GuestContext from "../../context/guest/guestContext";
import "../../styles/guest/guestForm.css";

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
    <Fragment>
      <div className="form-container">
        <Form onSubmit={onSubmit}>
          <h2 className="guest-form-title">
            {" "}
            {current ? "Edit Guest" : "Add Guest"}
          </h2>

          <Form.Group controlId="formName">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              className="form-input-name"
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <input
              type="text"
              placeholder="Address"
              name="address1"
              value={address1}
              onChange={onChange}
              className="form-input-address1"
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <input
              type="text"
              placeholder="Apt/Unit No."
              name="address2"
              value={address2}
              onChange={onChange}
              className="form-input-address2"
            />
          </Form.Group>

          <Form.Row>
            <Form.Group controlId="formGridCity">
              <input
                type="text"
                placeholder="City"
                name="city"
                value={city}
                onChange={onChange}
                className="form-input-city"
              />
            </Form.Group>

            <Form.Group controlId="formGridState">
              <input
                type="text"
                placeholder="State"
                name="state"
                value={state}
                onChange={onChange}
                className="form-input-state"
              />
            </Form.Group>

            <Form.Group controlId="formGridZip">
              <input
                type="text"
                placeholder="Zip"
                name="zip"
                value={zip}
                onChange={onChange}
                className="form-input-zip"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGridEmail">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
                className="form-input-email"
              />
            </Form.Group>

            <Form.Group controlId="formGridPhone">
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={onChange}
                className="form-input-phone"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group
            className="guest-form-guest-types"
            controlId="formGridType"
          >
            <h5 className="guest-form-guest-types-title">Guest Type</h5>
            <input
              type="radio"
              name="type"
              value="family"
              onChange={onChange}
              checked={type === "family"}
            />{" "}
            Family{" "}
            <input
              type="radio"
              name="type"
              value="friend"
              onChange={onChange}
              checked={type === "friend"}
            />{" "}
            Friend{" "}
            <input
              type="radio"
              name="type"
              value="professional"
              onChange={onChange}
              checked={type === "professional"}
            />
            {"  "}
            Professional{"   "}
            <div>
              <input
                type="submit"
                value={current ? "Update Guest" : "Add Guest"}
                className="btn btn-primary"
              />
            </div>
          </Form.Group>

          {current && (
            <div className="btn-clear">
              {" "}
              <button className="btn" onClick={clearAll}>
                Clear
              </button>
            </div>
          )}
        </Form>
      </div>
    </Fragment>
  );
};

export default GuestForm;
