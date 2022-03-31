import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/project';
import { getAllProjectsApi } from './api';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { navigate } from '../../../Navigation/AppNavigation';

// getAllProjects
function* getAllProjects(action) {
  try {
    const result = yield getAllProjectsApi(action.payload);
    console.log('All Projects result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_ALL_PROJECTS_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_ALL_PROJECTS_FAILURE, payload: result.message });
      if (result.message?.error) {
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.GET_ALL_PROJECTS_FAILURE, payload: error });
    console.log("The Error", error);
  }
}

export function* projectWatcher() {
  yield takeEvery(types.GET_ALL_PROJECTS_REQUEST, getAllProjects);
}