import React, { Fragment, useContext, useRef, useEffect } from "react";
import GuestContext from "../../context/guest/guestContext";
import "../../styles/guest/guestFilter.css";

const GuestFilter = () => {
  const guestContext = useContext(GuestContext);
  const text = useRef("");

  const { filterGuests, clearFilter, filtered } = guestContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = event => {
    if (text.current.value !== "") {
      filterGuests(event.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Fragment>
      <h2 style={{ textAlign: "center" }}>Filter Guest</h2>
      <form>
        <input
          ref={text}
          type="text"
          placeholder="Filter Guests..."
          onChange={onChange}
          className="form-input-filter"
        />
      </form>
    </Fragment>
  );
};

export default GuestFilter;
