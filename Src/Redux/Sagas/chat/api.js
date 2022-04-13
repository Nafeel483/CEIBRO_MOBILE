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
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Authorization': 'Bearer ' + chat?.token,
      // token: userToken
    },

  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/chat/rooms?name=${chat?.name}&type=${chat?.type}&favourite=${chat?.favourite}`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// createChatApi
export function* createChatApi(user) {
  console.log("createChatApi JWT TOKEN", user)

  const data = new URLSearchParams();
  // data.append('id', user.id)
  data.append('name', user.name)
  data.append('members', user.members)
  data.append('projectId', user.projectId)



  const opt = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + user.token,
      // token: userToken
    },
    body: data,
    json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/chat/rooms`, opt);
  const message = yield response.json();
  return yield ({ status: response.status, message })
}


// chatMessageSendApi
export function* chatMessageSendApi(messageData) {
  console.log("Get chatMessageSendApi ", messageData)

  let formData = new FormData();
  formData.append("message", messageData.message);
  formData.append("chat", messageData.chat);
  // formData.append("type", messageData.type);
  if (messageData.messageId != null) {
    formData.append("messageId", messageData.messageId);
  }
  if (messageData?.products && Object.values(messageData?.products)?.length > 0) {
    // messageData?.products.forEach((item) => {
    // console.log("files are", messageData?.products[0]);
    // formData.append("products", JSON.stringify({ originalName: item.originalName, uri: item.uri, type: item.type }));
    // });
    // formData.append("products", messageData?.products);

    messageData?.products.map(tool => {
      console.log("f messageData?.products.map", tool);
      formData.append('products', tool)
    })
    // for (const key of Object.keys(messageData?.products)) {
    //   console.log("files are", messageData?.products[key]);
    //   formData.append("products", messageData?.products[key]);
    // }
  }
  // console.log(JSON.parse(formData.getAll('products')))
  const opt = {
    method: 'POST',
    headers: {
      Accept:  'application/json, text/plain, */*',
      // "Content-Type": "multipart/form-data",
      "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundarypBxBqTJYwLPuGTse",
      'Authorization': 'Bearer ' + messageData.token,
      // token: userToken
    },
    body: formData,
    // json: true,
  }
  const response = yield fetch(`${CONSTANTS.BASE_URL}/chat/message/reply`, opt);
  const message = yield response.json();

  return yield ({ status: response.status, message })
}