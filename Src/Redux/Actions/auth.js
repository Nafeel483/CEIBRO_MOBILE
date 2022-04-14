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


export function verifyUser(user) {
  return {
    type: types.VERIFY_USER_REQUEST,
    payload: user
  };
}


export function resetUserPassword(user) {
  return {
    type: types.RESET_USER_PASSWORD_REQUEST,
    payload: user
  };
}