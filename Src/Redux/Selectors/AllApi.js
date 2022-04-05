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


// export const changeProfilePic = (source, token) => {
//   console.log("The Result = ", source, token)

//   // const data = new FormData();
//   const data = new URLSearchParams();
//   data.append("profilePic", {
//     name: source.fileName,
//     type: source.type,
//     uri: source.uri
//   });
//   return axios({
//     method: 'PATCH',
//     url: `${CONSTANTS.BASE_URL}/users/profile/pic`,
//     headers: {
//       "accept": 'application/json',
//       "Content-Type": 'multipart/form-data',
//       'Authorization': 'Bearer ' + token,
//       // 'Access-Control-Allow-Origin': '*'
//     },
//     data: data,

//   }).then(response => response.data);
// }

