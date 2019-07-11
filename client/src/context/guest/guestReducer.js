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
    case GET_GUESTS:
      return {
        ...state,
        guests: action.payload
      };
    case ADD_GUEST:
      return {
        ...state,
        guests: [action.payload, ...state.guests]
      };
    case DELETE_GUEST:
      return {
        ...state,
        guests: state.guests.filter(guest => {
          return guest._id !== action.payload;
        })
      };
    case UPDATE_GUEST: {
      return {
        ...state,
        guests: state.guests.map(guest => {
          return guest._id === action.payload._id ? action.payload : guest;
        })
      };
    }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_GUESTS:
      return {
        ...state,
        filtered: state.guests.filter(guest => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return guest.name.match(regex) || guest.email.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case GUEST_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
