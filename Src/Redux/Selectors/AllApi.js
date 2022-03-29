import axios from 'axios';
import * as CONSTANTS from '../../Constants'


export const chatConversation = (id, token) => {

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/chat/conversation/${id}`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}


export const reviewApi = (user, token) => {
  const data = new URLSearchParams();
  data.append('officer', user.officer)
  data.append('rating', user.rating)
  data.append('description', user.description)

  return axios({
    method: 'post',
    url: `${CONSTANTS.BASE_URL}/user/reviews`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },
    data: data.toString(),

  }).then(response => response.data);
}


export const chatEventsApi = (token) => {

  return axios({
    method: 'GET',
    url: `${CONSTANTS.BASE_URL}/chat/developer/events`,
    headers: {
      "accept": 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },

  }).then(response => response.data);
}
