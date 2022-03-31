import { types } from "../Types/users";

let initialState = {

};
const userReducer = (state = initialState, action) => {
  switch (action.type) {



    //  Get All Chats
    case types.GET_ALL_USERS_REQUEST:
      return {
        ...state,
        loadingAllUsers: true,
      };
    case types.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: action.payload,
        loadingAllUsers: false,
      };
    case types.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        loadingAllUsers: false,
      };





      //  Get All Chats
    case types.GET_MY_PROFILE_REQUEST:
      return {
        ...state,
        loadingMyProfile: true,
      };
    case types.GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        myProfile: action.payload,
        loadingMyProfile: false,
      };
    case types.GET_MY_PROFILE_FAILURE:
      return {
        ...state,
        loadingMyProfile: false,
      };

   


    default: {
      return { ...state };
    }
  }
};

export default userReducer;