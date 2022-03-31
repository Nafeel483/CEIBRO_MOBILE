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

// export const employeeByPin = (data, token) => {

//   return axios({
//     method: 'post',
//     url: `${CONSTANTS.BASE_URL}/mobile/employe-by-pin-store_id`,
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: token
//       // 'Content-Type': 'multipart/form-data',
//       // 'Access-Control-Allow-Origin': '*'
//     },
//     data: data

//   }).then(response => response.data);
// }
