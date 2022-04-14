import { types } from "../Types/chat";


export function getAllUserChats(user) {
  return {
    type: types.GET_ALL_CHATS_REQUEST,
    payload: user
  };
}


export function createUserChat(user) {
  return {
    type: types.CREATE_CHATS_REQUEST,
    payload: user
  };
}

export function chatMessageSend(user) {
  return {
    type: types.SEND_CHATS_REQUEST,
    payload: user
  };
}


export function unreadMessageCount(user) {
  return {
    type: types.UNREAD_MESSAGE_COUNT_REQUEST,
    payload: user
  };
}
