import * as CONSTANTS from '../../../Constants';
import axios from 'axios';




// loginWithEmailApi
export function* loginWithEmailApi(user) {
  const data = new URLSearchParams();
  data.append('email', user.email)
  data.append('password', user.password)

  const opt = {
    method: 'POST',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    body: data.toString(),
    json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/auth/login`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}



// registerUserApi
export function* registerUserApi(user) {
  console.log(' Email Response', user)
  const data = new URLSearchParams();
  data.append('firstName', user.firstName)
  data.append('surName', user.surName)
  data.append('email', user.email)
  data.append('password', user.password)

  const opt = {
    method: 'POST',
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    body: data.toString(),
    json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/auth/register`, opt);
  const message = yield response

  return yield ({ status: response.status, message })
}


// forgotUserApi

export const forgotUserApi = (user) => {
  return axios.post(`${CONSTANTS.BASE_URL}/auth/forgot-password`, { email: user.email }).then(response => response);
}





// logoutApi
export const logoutApi = (user) => {
  return axios.post(`${CONSTANTS.BASE_URL}/auth/logout`, { refreshToken: user.refreshToken }).then(response => response);
}