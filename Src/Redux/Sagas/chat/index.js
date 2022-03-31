import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/chat';
import { getChatsApi } from './api';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { navigate } from '../../../Navigation/AppNavigation';

// getAllUserChats
function* getAllUserChats(action) {
  try {
    const result = yield getChatsApi(action.payload);
    console.log('Chat result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_ALL_CHATS_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_ALL_CHATS_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GET_ALL_CHATS_FAILURE, payload: error });
    console.log("The Error", error);
  }
}

export function* chatWatcher() {
  yield takeEvery(types.GET_ALL_CHATS_REQUEST, getAllUserChats);
}