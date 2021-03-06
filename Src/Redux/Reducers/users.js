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





    //  Get MY Profile
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



    //  Update My Profile
    case types.UPDATE_MY_PROFILE_REQUEST:
      return {
        ...state,
        loadingUpdateProfile: true,
      };
    case types.UPDATE_MY_PROFILE_SUCCESS:
      return {
        ...state,
        myUpdateProfile: action.payload,
        loadingUpdateProfile: false,
      };
    case types.UPDATE_MY_PROFILE_FAILURE:
      return {
        ...state,
        loadingUpdateProfile: false,
      };


    //  Update My Profile Pic
    case types.UPDATE_MY_PROFILE_PIC_REQUEST:
      return {
        ...state,
        loadingUpdateProfilePic: true,
      };
    case types.UPDATE_MY_PROFILE_PIC_SUCCESS:
      return {
        ...state,
        myUpdateProfilePic: action.payload,
        loadingUpdateProfilePic: false,
      };
    case types.UPDATE_MY_PROFILE_PIC_FAILURE:
      return {
        ...state,
        loadingUpdateProfilePic: false,
      };



    // Get All Invites
    case types.GET_ALL_INVITES_REQUEST:
      return {
        ...state,
        loadingGetInvites: true,
      };
    case types.GET_ALL_INVITES_SUCCESS:
      return {
        ...state,
        allInvites: action.payload,
        loadingGetInvites: false,
      };
    case types.GET_ALL_INVITES_FAILURE:
      return {
        ...state,
        loadingGetInvites: false,
      };


    // Get All Connections
    case types.GET_ALL_CONNECTIONS_REQUEST:
      return {
        ...state,
        loadingGetConnections: true,
      };
    case types.GET_ALL_CONNECTIONS_SUCCESS:
      return {
        ...state,
        allConnections: action.payload,
        loadingGetConnections: false,
      };
    case types.GET_ALL_CONNECTIONS_FAILURE:
      return {
        ...state,
        loadingGetConnections: false,
      };



    // Get Invite Count
    case types.GET_MY_INVITE_COUNT_REQUEST:
      return {
        ...state,
        loadingInviteCount: true,
      };
    case types.GET_MY_INVITE_COUNT_SUCCESS:
      return {
        ...state,
        inviteCount: action.payload,
        loadingInviteCount: false,
      };
    case types.GET_MY_INVITE_COUNT_FAILURE:
      return {
        ...state,
        loadingInviteCount: false,
      };


       // Get Connection Count
    case types.GET_MY_CONNECTIONS_COUNT_REQUEST:
      return {
        ...state,
        loadingInviteCount: true,
      };
    case types.GET_MY_CONNECTIONS_COUNT_SUCCESS:
      return {
        ...state,
        connectionCount: action.payload,
        loadingInviteCount: false,
      };
    case types.GET_MY_CONNECTIONS_COUNT_FAILURE:
      return {
        ...state,
        loadingInviteCount: false,
      };



    default: {
      return { ...state };
    }
  }
};

export default userReducer;