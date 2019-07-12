import React, { useContext, useRef, useEffect } from "react";
import GuestContext from "../../context/guest/guestContext";

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
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Guests..."
        onChange={onChange}
      />
    </form>
  );
};

export default GuestFilter;
