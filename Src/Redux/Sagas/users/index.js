import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/users';
import { getAllUsersApi, getMyProfileApi } from './api';
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


export function* usersWatcher() {
  yield takeEvery(types.GET_ALL_USERS_REQUEST, getAllUsers);
  yield takeEvery(types.GET_MY_PROFILE_REQUEST, getMyProfile);

}