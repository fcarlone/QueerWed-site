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
      const res = await axois.get("/planning/api/guests");
      dispatch({ type: GET_GUESTS, payload: res.data });
    } catch (error) {
      console.log(error.message);
      // dispatch({ type: GUEST_ERROR, payload: error.response.message });
    }
  };

  // Add Guest
  const addGuest = async guest => {
    console.log("post guest to sever-side", guest);
    try {
      const res = await axois.post("/planning/api/guests", guest);
      dispatch({ type: ADD_GUEST, payload: res.data });
    } catch (error) {
      dispatch({ type: GUEST_ERROR, payload: error.response.message });
    }
  };

  // Delete Guest
  const deleteGuest = async id => {
    try {
      await axois.delete(`/planning/api/guests/${id}`);

      dispatch({ type: DELETE_GUEST, payload: id });
    } catch (error) {
      dispatch({ type: GUEST_ERROR, payload: error.response.message });
    }
  };

  // Update Guest
  const updateGuest = async guest => {
    console.log("update guest to sever-side", guest);
    try {
      const res = await axois.put(`/planning/api/guests/${guest._id}`, guest);
      dispatch({ type: UPDATE_GUEST, payload: res.data });
    } catch (error) {
      dispatch({ type: GUEST_ERROR, payload: error.response.message });
    }
  };

  // Set Current Guest
  const setCurrent = guest => {
    dispatch({ type: SET_CURRENT, payload: guest });
  };

  // Clear Current Guest
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
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
