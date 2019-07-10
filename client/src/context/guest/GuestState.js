import React, { useReducer } from "react";
import uuid from "uuid";
import GuestContext from "./guestContext";
import guestReducer from "./guestReducer";
import {
  GET_GUESTS,
  ADD_GUEST,
  DELETE_GUEST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_GUEST,
  FILTER_GUESTS,
  CLEAR_GUESTS,
  CLEAR_FILTER,
  GUEST_ERROR
} from "../types";

// initial state
const GuestState = props => {
  const initialState = {
    guests: [
      {
        id: 1,
        name: "joe",
        address1: "123 main street",
        address2: "apt. 101",
        city: "philadelphia",
        state: "pa",
        zip: "19102",
        email: "joe@example.com",
        phone: "111-111-1111",
        type: "personal"
      },
      {
        id: 2,
        name: "jane",
        address1: "123 main street",
        address2: "apt. 101",
        city: "philadelphia",
        state: "pa",
        zip: "19102",
        email: "jane@example.com",
        phone: "222-222-2222",
        type: "professional"
      },
      {
        id: 3,
        name: "jim",
        address1: "123 main street",
        address2: "apt. 101",
        city: "philadelphia",
        state: "pa",
        zip: "19102",
        email: "jim@example.com",
        phone: "333-333-3333",
        type: "personal"
      }
    ],
    current: null,
    filtered: null
  };
  // Pull-out state and dispatch
  const [state, dispatch] = useReducer(guestReducer, initialState);

  // **ACTIONS**

  // Add Guest
  const addGuest = guest => {
    // Temp id until connected to DB
    guest.id = uuid.v4();
    dispatch({ type: ADD_GUEST, payload: guest });
  };
  // Delete Guest
  const deleteGuest = id => {
    dispatch({ type: DELETE_GUEST, payload: id });
  };

  // Set Current Guest
  const setCurrent = guest => {
    dispatch({ type: SET_CURRENT, payload: guest });
  };

  // Clear Current Guest
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Guest
  const updateGuest = guest => {
    dispatch({ type: UPDATE_GUEST, payload: guest });
  };

  // Filter Guest
  const filterGuests = text => {
    dispatch({ type: FILTER_GUESTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        current: state.current,
        filtered: state.filtered,
        addGuest,
        deleteGuest,
        setCurrent,
        clearCurrent,
        updateGuest,
        filterGuests,
        clearFilter
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
