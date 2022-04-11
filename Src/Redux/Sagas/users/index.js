import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/users';
import {
  getAllUsersApi, getMyProfileApi, updateMyProfileApi,
  updateMyProfilePicApi, getMyAllInvitesApi,
  getMyAllConnectionsApi,
  getMyInviteCountAPI,
  getMyConnectionsCountAPI
} from './api';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { navigate } from '../../../Navigation/AppNavigation';

// getAllUsers
function* getAllUsers(action) {
  try {
    const result = yield getAllUsersApi(action.payload);
    console.log('All Users result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_ALL_USERS_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_ALL_USERS_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GET_ALL_USERS_FAILURE, payload: error });
    console.log("The Error", error);
  }
}



// getMyProfile
function* getMyProfile(action) {
  try {
    const result = yield getMyProfileApi(action.payload);
    console.log('getMyProfile result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_MY_PROFILE_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_MY_PROFILE_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GET_MY_PROFILE_FAILURE, payload: error });
    console.log("The Error", error);
  }
}



// updateMyProfile
function* updateMyProfile(action) {
  try {
    const result = yield updateMyProfileApi(action.payload);
    console.log('updateMyProfile result Response', result)
    if (result.status === 200) {
      yield put({ type: types.UPDATE_MY_PROFILE_SUCCESS, payload: result.message });
      showMessage({
        message: "Profile Updated Successfully",
        description: "User Profile Updated Successfully",
        type: "default",
        backgroundColor: "#009900", // background color
        color: "white" // text color
      })
    }
    else {
      yield put({ type: types.UPDATE_MY_PROFILE_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.UPDATE_MY_PROFILE_FAILURE, payload: error });
    console.log("The Error", error);
  }
}

// updateMyProfilePic
function* updateMyProfilePic(action) {
  try {
    const result = yield updateMyProfilePicApi(action.payload);
    console.log('updateMyProfile result Response', result)
    if (result.status === 200) {
      yield put({ type: types.UPDATE_MY_PROFILE_PIC_SUCCESS, payload: result.message });
      showMessage({
        message: "Profile Picture Updated",
        description: "Profile Picture Updated Successfully",
        type: "default",
        backgroundColor: "#009900", // background color
        color: "white" // text color
      })
    }
    else {
      yield put({ type: types.UPDATE_MY_PROFILE_PIC_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.UPDATE_MY_PROFILE_PIC_FAILURE, payload: error });
    console.log("The Error", error);
  }
}


// getMyAllInvites
function* getMyAllInvites(action) {
  try {
    const result = yield getMyAllInvitesApi(action.payload);
    console.log('getMyAllInvitesApi result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_ALL_INVITES_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_ALL_INVITES_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GET_ALL_INVITES_FAILURE, payload: error });
    console.log("getMyAllInvitesApi Error", error);
  }
}



// getMyAllConnections
function* getMyAllConnections(action) {
  try {
    const result = yield getMyAllConnectionsApi(action.payload);
    console.log('getMyAllConnectionsApi result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_ALL_CONNECTIONS_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_ALL_CONNECTIONS_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GET_ALL_CONNECTIONS_FAILURE, payload: error });
    console.log("getMyAllConnectionsApi Error", error);
  }
}


// getMyInviteCount
function* getMyInviteCount(action) {
  try {
    const result = yield getMyInviteCountAPI(action.payload);
    console.log('getMyInviteCountAPI result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_MY_INVITE_COUNT_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_MY_INVITE_COUNT_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GET_MY_INVITE_COUNT_FAILURE, payload: error });
    console.log("getMyInviteCountAPI Error", error);
  }
}


// getMyConnectionsCount
function* getMyConnectionsCount(action) {
  try {
    const result = yield getMyConnectionsCountAPI(action.payload);
    console.log('getMyConnectionsCountAPI result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_MY_CONNECTIONS_COUNT_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_MY_CONNECTIONS_COUNT_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GET_MY_CONNECTIONS_COUNT_FAILURE, payload: error });
    console.log("getMyConnectionsCountAPI Error", error);
  }
}


export function* usersWatcher() {
  yield takeEvery(types.GET_ALL_USERS_REQUEST, getAllUsers);
  yield takeEvery(types.GET_MY_PROFILE_REQUEST, getMyProfile);
  yield takeEvery(types.UPDATE_MY_PROFILE_REQUEST, updateMyProfile);

  yield takeEvery(types.UPDATE_MY_PROFILE_PIC_REQUEST, updateMyProfilePic);
  yield takeEvery(types.GET_ALL_INVITES_REQUEST, getMyAllInvites);
  yield takeEvery(types.GET_ALL_CONNECTIONS_REQUEST, getMyAllConnections);

  yield takeEvery(types.GET_MY_INVITE_COUNT_REQUEST, getMyInviteCount);
  yield takeEvery(types.GET_MY_CONNECTIONS_COUNT_REQUEST, getMyConnectionsCount);


}