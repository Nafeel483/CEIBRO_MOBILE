import { types } from "../Types/users";


export function getAllUsers(user) {
  return {
    type: types.GET_ALL_USERS_REQUEST,
    payload: user
  };
}


export function getMyProfile(user) {
  return {
    type: types.GET_MY_PROFILE_REQUEST,
    payload: user
  };
}

export function updateMyProfile(user) {
  return {
    type: types.UPDATE_MY_PROFILE_REQUEST,
    payload: user
  };
}

export function updateMyProfilePic(user) {
  return {
    type: types.UPDATE_MY_PROFILE_PIC_REQUEST,
    payload: user
  };
}


export function getMyAllInvites(user) {
  return {
    type: types.GET_ALL_INVITES_REQUEST,
    payload: user
  };
}

export function getMyAllConnections(user) {
  return {
    type: types.GET_ALL_CONNECTIONS_REQUEST,
    payload: user
  };
}


export function getMyInviteCount(user) {
  return {
    type: types.GET_MY_INVITE_COUNT_REQUEST,
    payload: user
  };
}

export function getMyConnectionsCount(user) {
  return {
    type: types.GET_MY_CONNECTIONS_COUNT_REQUEST,
    payload: user
  };
}