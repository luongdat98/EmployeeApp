import { SET_AUTHERED_USER, LOGGED_OUT_USER } from "../actions/authActions";

export default function authedUser(state= null, action) {
  switch (action.type) {
    case SET_AUTHERED_USER:
      return action.id
    case LOGGED_OUT_USER:
      return null;
    default:
      return state;
  }
}