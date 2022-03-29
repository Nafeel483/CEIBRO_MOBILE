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



