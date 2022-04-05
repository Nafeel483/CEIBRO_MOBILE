import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/users';
import {
  getAllUsersApi, getMyProfileApi, updateMyProfileApi,
  updateMyProfilePicApi
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


export function* usersWatcher() {
  yield takeEvery(types.GET_ALL_USERS_REQUEST, getAllUsers);
  yield takeEvery(types.GET_MY_PROFILE_REQUEST, getMyProfile);
  yield takeEvery(types.UPDATE_MY_PROFILE_REQUEST, updateMyProfile);

  yield takeEvery(types.UPDATE_MY_PROFILE_PIC_REQUEST, updateMyProfilePic);

}