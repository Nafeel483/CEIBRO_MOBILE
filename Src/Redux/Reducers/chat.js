import { types } from "../Types/chat";

let initialState = {

};
const chatReducer = (state = initialState, action) => {
  switch (action.type) {



    //  Get All Chats
    case types.GET_ALL_CHATS_REQUEST:
      return {
        ...state,
        loadingAllChats: true,
      };
    case types.GET_ALL_CHATS_SUCCESS:
      return {
        ...state,
        allChats: action.payload,
        loadingAllChats: false,
      };
    case types.GET_ALL_CHATS_FAILURE:
      return {
        ...state,
        loadingAllChats: false,
      };

    //  Create Chats
    case types.CREATE_CHATS_REQUEST:
      return {
        ...state,
        loadingCreateChats: true,
      };
    case types.CREATE_CHATS_SUCCESS:
      return {
        ...state,
        createChat: action.payload,
        loadingCreateChats: false,
      };
    case types.CREATE_CHATS_FAILURE:
      return {
        ...state,
        loadingCreateChats: false,
      };


    //  Send Chats
    case types.SEND_CHATS_REQUEST:
      return {
        ...state,
        loadingSendChats: true,
      };
    case types.SEND_CHATS_SUCCESS:
      return {
        ...state,
        sendChat: action.payload,
        loadingSendChats: false,
      };
    case types.SEND_CHATS_FAILURE:
      return {
        ...state,
        loadingSendChats: false,
      };


       //  unread message counts
    case types.UNREAD_MESSAGE_COUNT_REQUEST:
      return {
        ...state,
        loadingUnread: true,
      };
    case types.UNREAD_MESSAGE_COUNT_SUCCESS:
      return {
        ...state,
        unreadChatCount: action.payload,
        loadingUnread: false,
      };
    case types.UNREAD_MESSAGE_COUNT_FAILURE:
      return {
        ...state,
        loadingUnread: false,
      };

    default: {
      return { ...state };
    }
  }
};

export default chatReducer;