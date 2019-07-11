import React, { useReducer } from "react";
import axois from "axios";
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
    guests: [],
    current: null,
    filtered: null
    // errros: null
  };
  // Pull-out state and dispatch
  const [state, dispatch] = useReducer(guestReducer, initialState);

  // **ACTIONS**

  // Get Guests
  const getGuests = async () => {
    try {
      const res = await axois.get("api/guests");
      dispatch({ type: GET_GUESTS, payload: res.data });
    } catch (error) {
      dispatch({ type: GUEST_ERROR, payload: error.response.message });
    }
  };

  // Add Guest
  const addGuest = async guest => {
    console.log("post guest to sever-side", guest);
    try {
      const res = await axois.post("/api/guests", guest);
      dispatch({ type: ADD_GUEST, payload: res.data });
    } catch (error) {
      dispatch({ type: GUEST_ERROR, payload: error.response.message });
    }

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
        // errors: state.errors,
        addGuest,
        deleteGuest,
        setCurrent,
        clearCurrent,
        updateGuest,
        filterGuests,
        clearFilter,
        getGuests
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
