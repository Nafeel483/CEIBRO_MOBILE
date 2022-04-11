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

// updateMyProfileApi
export function* updateMyProfileApi(user) {
  console.log("Get updateMyProfileApi JWT TOKEN", user)

  const data = new URLSearchParams();
  // data.append('id', user.id)
  data.append('firstName', user.firstName)
  data.append('surName', user.surName)
  data.append('password', user.password)
  data.append('phone', user.phone)
  data.append('companyName', user.companyName)
  data.append('companyVat', user.companyVat)
  data.append('companyPhone', user.companyPhone)
  data.append('companyLocation', user.companyLocation)
  data.append('workEmail', user.workEmail)
  data.append('currentlyRepresenting', user.currentlyRepresenting)

  const opt = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + user.token,
      // token: userToken
    },
    body: data.toString(),
    json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/users/profile`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// updateMyProfilePicApi
export function* updateMyProfilePicApi(user) {
  console.log("Get updateMyProfilePicApi JWT TOKEN", user)

  let formData = new FormData();
  formData.append('profilePic', user.file)


  const opt = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json, text/plain, */*',
      "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryAztdRLXn4ujG0e8f",
      'Authorization': 'Bearer ' + user.token,
      // token: userToken
    },
    body: formData
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/users/profile/pic`, opt);
  const message = yield response;

  return yield ({ status: response.status, message })
}


// getMyAllInvitesApi
export function* getMyAllInvitesApi(token) {

  const opt = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + token,
      // token: userToken
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/users/invite`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// getMyAllConnectionsApi
export function* getMyAllConnectionsApi(token) {

  const opt = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + token,
      // token: userToken
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/users/connections`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// getMyInviteCountAPI
export function* getMyInviteCountAPI(token) {

  const opt = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + token,
      // token: userToken
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/users/invite/count`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// getMyConnectionsCountAPI
export function* getMyConnectionsCountAPI(token) {

  const opt = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + token,
      // token: userToken
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/users/connections/count`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}