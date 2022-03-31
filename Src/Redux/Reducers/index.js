import { combineReducers } from 'redux'
import authReducer from './auth';
import chatReducer from './chat';
import userReducer from './users';
import projectReducer from './project';

export default combineReducers({
  auth: authReducer,
  chat: chatReducer,
  user: userReducer,
  project: projectReducer
});