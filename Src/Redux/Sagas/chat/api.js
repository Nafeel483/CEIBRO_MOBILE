import * as CONSTANTS from '../../../Constants';
import axios from 'axios';




// getChatsAPi
export function* getChatsApi(chat) {
  console.log("Get Profile JWT TOKEN", chat)
  // const data = new URLSearchParams();
  // data.append('name', chat.name)
  // data.append('type', chat.type)
  // data.append('favourite', chat.favourite)


  const opt = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + chat?.token,
      // token: userToken
    },
    
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/chat/rooms?name=${chat.name}&type=${chat.type}&favourite=${chat.favourite}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}
