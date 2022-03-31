import { types } from "../Types/auth";


export function loginWithEmail(user) {
  return {
    type: types.LOGIN_REQUEST,
    payload: user
  };
}

export function registerUser(user) {
  return {
    type: types.REGISTER_USER_REQUEST,
    payload: user
  };
}


export function forgotPasswordUser(user) {
  return {
    type: types.FORGOT_USER_REQUEST,
    payload: user
  };
}


export function logoutUser(user) {
  return {
    type: types.LOGOUT_USER_REQUEST,
    payload: user
  };
}
