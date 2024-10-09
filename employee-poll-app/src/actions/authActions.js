export const SET_AUTHERED_USER = "SET_AUTHERED_USER";
export const LOGGED_OUT_USER = "LOGGED_OUT_USER";

function setAuthedUser(id) {
  return {
    type: SET_AUTHERED_USER,
    id,
  };
}

function logoutUser() {
  return {
    type: LOGGED_OUT_USER,
  };
}

export function loginUser(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();

    const getUser = Object.values(users).filter(
      (user) => user.id === username && user.password === password
    );

    if (getUser !== undefined && getUser.length > 0) {
      return dispatch(setAuthedUser(getUser[0].id));
    }
  };
}

export function loggedOutUser() {
  return (dispatch) => {
    return dispatch(logoutUser());
  };
}
