import * as CONSTANTS from '../../../Constants';
import axios from 'axios';




// getAllUsersApi
export function* getAllUsersApi(user) {
  console.log("Get Profile JWT TOKEN", user)

  const opt = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + user?.token,
      // token: userToken
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/users?name=${user.name}&role=${user.type}&sortBy=${user.favourite}&limit=${user.limit}&page=${user.page}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}



// getMyProfileApi
export function* getMyProfileApi(token) {

  const opt = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + token,
      // token: userToken
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/users/profile`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}