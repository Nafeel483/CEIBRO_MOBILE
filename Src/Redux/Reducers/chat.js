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


   


    default: {
      return { ...state };
    }
  }
};

export default chatReducer;