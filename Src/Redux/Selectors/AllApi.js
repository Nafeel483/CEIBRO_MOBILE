import axios from 'axios';
import * as CONSTANTS from '../../Constants'


export const addRoomChatToFavourite = (roomId, token) => {

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/chat/room/favourite/${roomId}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}


export const markUnreadChatRoomMessage = (roomId, token) => {

  return axios({
    method: 'put',
    url: `${CONSTANTS.BASE_URL}/chat/room/unread/${roomId}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}


export const getChatRoomMessage = (roomId, token) => {

  return axios({
    method: 'get',
    url: `${CONSTANTS.BASE_URL}/chat/room/messages/${roomId}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}


export const getProjectMembers = (projectId, token) => {
  console.log("Data getProjectMembers_  ::  ", projectId, token)
  return axios({
    method: 'get',
    url: `${CONSTANTS.BASE_URL}/project/members/${projectId}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}

// muteChatApi
export const muteChatApi = (roomId, token) => {

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/chat/room/mute/${roomId}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}

// getChatMoreMembers
export const getChatMoreMembers = (projectId, token) => {
  return axios({
    method: 'get',
    url: `${CONSTANTS.BASE_URL}/chat/member/available/${projectId}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}


// addMemberInChat
export const addMemberInChat = (roomId, memberId, temporary, token) => {

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/chat/member/${roomId}/${memberId}?temporary=${temporary}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}

// getChatRoomAllMedia
export const getChatRoomAllMedia = (roomId, token) => {
  return axios({
    method: 'get',
    url: `${CONSTANTS.BASE_URL}/chat/media/${roomId}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}

// pinnedMessageApi
export const pinnedMessageApi = (messageId, token) => {

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/chat/message/favourite/${messageId}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}


// getAllPinnedMessageApi
export const getAllPinnedMessageApi = (roomId, token) => {
  return axios({
    method: 'get',
    url: `${CONSTANTS.BASE_URL}/chat/message/favourite/${roomId}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}


export const sendChatMessageApi = (messageData, token) => {
  console.log("The sendChatMessageApi = ", messageData, token)

  // const data = new FormData();
  const data = new URLSearchParams();
  data.append("message", messageData.message);
  data.append("chat", messageData.chat);
  data.append("type", messageData.type);

  if (messageData?.products && Object.values(messageData?.products)?.length > 0) {
    console.log("files are", messageData?.products);
    for (const key of Object.keys(messageData?.products)) {
      data.append("products", messageData?.products[key])
    }
  }

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/chat/message/reply`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded;  boundary=----WebKitFormBoundarypBxBqTJYwLPuGTse',
      // "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundarypBxBqTJYwLPuGTse",
      'Authorization': 'Bearer ' + token,
    },
    data: data.toString(),
    json: true,

  }).then(response => response.data);
}


export const sendMessageReplyApi = (messageData, token) => {
  console.log("The sendMessageReplyApi = ", messageData, token)

  // const data = new FormData();
  const data = new URLSearchParams();
  data.append("message", messageData.message);
  data.append("chat", messageData.chat);
  data.append("messageId", messageData.messageId);
  data.append("type", messageData.type);
  if (messageData?.products && Object.values(messageData?.products)?.length > 0) {
    console.log("files are", messageData?.products);
    messageData?.products.forEach((item, i) => {
      data.append("products", item);
    });
  }

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/chat/message/reply`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded;  boundary=----WebKitFormBoundarypBxBqTJYwLPuGTse',
      // "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundarypBxBqTJYwLPuGTse",
      'Authorization': 'Bearer ' + token,
    },
    data: data.toString(),

  }).then(response => response.data);
}


// sendForwardMessageApi
export const sendForwardMessageApi = (messageData, token) => {
  console.log("The sendForwardMessageApi = ", messageData, token)

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/chat/message/forward`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    data: messageData,

  }).then(response => response.data);
}



// acceptRejectApi
export const acceptRejectApi = (inviteId, accepted, token) => {

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/users/invite/accept/${accepted}/${inviteId}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}

// allAcceptRejectApi
export const allAcceptRejectApi = (accepted, token) => {

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/users/invite/accept-all/${accepted}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}


// InviteUserApi
export const InviteUserApi = (invite, token) => {

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/users/invite`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    data: invite,

  }).then(response => response.data);
}