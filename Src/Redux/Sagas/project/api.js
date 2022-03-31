import * as CONSTANTS from '../../../Constants';
import axios from 'axios';




// getAllProjectsApi
export function* getAllProjectsApi(token) {
  console.log("Get Profile JWT TOKEN", token)
  
  const opt = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + token,
      // token: userToken
    },
    
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/project/all`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}
