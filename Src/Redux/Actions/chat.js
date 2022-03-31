import { types } from "../Types/chat";


export function getAllUserChats(user) {
  return {
    type: types.GET_ALL_CHATS_REQUEST,
    payload: user
  };
}