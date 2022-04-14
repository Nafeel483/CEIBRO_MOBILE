import { Alert } from 'react-native';
import { put, takeEvery, call, delay } from 'redux-saga/effects';
import { types } from '../../Types/auth';
import {
  loginWithEmailApi, registerUserApi,
  forgotUserApi, logoutApi,
  verifyUserApi, resetUserPasswordApi
} from './api';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { navigate } from '../../../Navigation/AppNavigation';


// loginWithEmail
function* loginWithEmail(action) {
  try {
    const result = yield loginWithEmailApi(action.payload);
    console.log('Login Email Response', result)
    if (result.status === 200) {
      yield put({ type: types.LOGIN_SUCCESS, payload: result.message });
      // saveLoginData(result.message)     
      navigate('BottomTabView', {
        screen: 'Dashboard',
      });
    }
    else {
      yield put({ type: types.LOGIN_FAILURE, payload: result.message });
      if (result.message?.message) {
        showMessage({
          message: "Email Password Error",
          description: `${result.message?.message}`,
          type: "default",
          backgroundColor: "#9c1730", // background color
          color: "white", // text color
        });
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.LOGIN_FAILURE, payload: error });
    console.log("The Error", error);
  }
}
const saveLoginData = async (res) => {
  try {
    //we want to wait for the Promise returned by AsyncStorage.setItem()
    //to be resolved to the actual value before returning the value
    const jsonToken = JSON.stringify(res)
    await AsyncStorage.setItem('EmailLogin', jsonToken)
    await AsyncStorage.setItem('PhoneLogin', 'null')
    navigate('BottomTabView', {
      screen: 'Dashboard',
    });
  } catch (error) {
  }
}



// registerUser
function* registerUser(action) {
  try {
    const result = yield registerUserApi(action.payload);
    console.log('Register Email Response', result)
    if (result?.status === 201) {
      yield put({ type: types.REGISTER_USER_SUCCESS, payload: result.message });
      showMessage({
        message: "Register Successfully",
        description: "Check Email to Verify Account",
        type: "default",
        backgroundColor: "#009900", // background color
        color: "white" // text color
      })
      navigate('AuthStack', {
        screen: 'VerifyEmail',
      });
    }
    else {
      yield put({ type: types.REGISTER_USER_FAILURE, payload: result.message });
      if (result.message?.message) {
        showMessage({
          message: `${result.message?.message}`,
          description: "User Already Register with this Email",
          type: "default",
          backgroundColor: "#9c1730", // background color
          color: "white", // text color
        });
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.REGISTER_USER_FAILURE, payload: error });
    console.log("The Error", error);
  }
}



// forgotPasswordUser
function* forgotPasswordUser(action) {
  try {
    const result = yield forgotUserApi(action.payload);
    console.log('Forgot Email Response', result)
    if (result?.status === 204) {
      yield put({ type: types.FORGOT_USER_SUCCESS, payload: result.message });
      // saveLoginData(result.message)     
      showMessage({
        message: "Check Email",
        description: "Check Email for Verification",
        type: "default",
        backgroundColor: "#009900", // background color
        color: "white" // text color
      })
      navigate('AuthStack', {
        screen: 'ResetPassword',
      });
    }
    else {
      yield put({ type: types.FORGOT_USER_FAILURE, payload: result.message });
      if (result.message?.message) {
        showMessage({
          message: "Email Not Found",
          description: "No Such Email Found",
          type: "default",
          backgroundColor: "#9c1730", // background color
          color: "white" // text color
        })
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.FORGOT_USER_FAILURE, payload: error });
    console.log("The Error", error);
  }
}

// logoutUser
function* logoutUser(action) {
  try {
    const result = yield logoutApi(action.payload);
    console.log('Logout Response', result)
    if (result?.status == 204) {
      yield put({ type: types.LOGOUT_USER_SUCCESS, payload: result.message });
      navigate('AuthStack', {
        screen: 'Login',
      });
    }
    else {
      yield put({ type: types.LOGOUT_USER_FAILURE, payload: result.message });
      if (result.message?.message) {
        // showMessage({
        //   message: "Email Not Found",
        //   description: "No Such Email Found",
        //   type: "default",
        //   backgroundColor: "#9c1730", // background color
        //   color: "white" // text color
        // })
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.LOGOUT_USER_FAILURE, payload: error });
    console.log("The Error", error);
  }
}


// verifyUser
function* verifyUser(action) {
  try {
    const result = yield verifyUserApi(action.payload);
    console.log('verifyUserApi Response', result)
    if (result?.status == 200) {
      yield put({ type: types.VERIFY_USER_SUCCESS, payload: result.message });
      showMessage({
        message: "Email Verified",
        description: "Email verified Now Login",
        type: "default",
        backgroundColor: "#009900", // background color
        color: "white" // text color
      })
      navigate('AuthStack', {
        screen: 'Login',
      });
    }
    else {
      yield put({ type: types.VERIFY_USER_FAILURE, payload: result.message });
      if (result.message?.message) {
        showMessage({
          message: "Verify Email Failed",
          description: "Verify Email Failed",
          type: "default",
          backgroundColor: "#9c1730", // background color
          color: "white" // text color
        })
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.VERIFY_USER_FAILURE, payload: error });
    console.log("The Error", error);
  }
}



// resetUserPassword
function* resetUserPassword(action) {
  try {
    const result = yield resetUserPasswordApi(action.payload);
    console.log('resetUserPassword Response', result)
    if (result?.status == 200) {
      yield put({ type: types.RESET_USER_PASSWORD_SUCCESS, payload: result.message });
      showMessage({
        message: "Reset Successfully Done",
        description: "Reset Successfully Done",
        type: "default",
        backgroundColor: "#009900", // background color
        color: "white" // text color
      })
      navigate('AuthStack', {
        screen: 'Login',
      });
    }
    else {
      yield put({ type: types.RESET_USER_PASSWORD_FAILURE, payload: result.message });
      if (result.message?.message) {
        showMessage({
          message: "Password Reset Failed",
          description: "Reset Failed! Try Again ",
          type: "default",
          backgroundColor: "#9c1730", // background color
          color: "white" // text color
        })
      }
      else {
      }
    }
  } catch (error) {
    yield put({ type: types.RESET_USER_PASSWORD_FAILURE, payload: error });
    console.log("resetUserPassword The Error", error);
  }
}


export function* authWatcher() {
  yield takeEvery(types.LOGIN_REQUEST, loginWithEmail);
  yield takeEvery(types.REGISTER_USER_REQUEST, registerUser);
  yield takeEvery(types.FORGOT_USER_REQUEST, forgotPasswordUser);
  yield takeEvery(types.VERIFY_USER_REQUEST, verifyUser);
  yield takeEvery(types.RESET_USER_PASSWORD_REQUEST, resetUserPassword);


  yield takeEvery(types.LOGOUT_USER_REQUEST, logoutUser);


}