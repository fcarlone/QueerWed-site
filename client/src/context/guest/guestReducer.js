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

export default (state, action) => {
  // Switch statement to look for action-type
  switch (action.type) {
    case ADD_GUEST:
      return {
        ...state,
        guests: [...state.guests, action.payload]
      };
    case DELETE_GUEST:
      return {
        ...state,
        guests: state.guests.filter(guest => {
          return guest.id !== action.payload;
        })
      };
    default:
      return state;
  }
};
