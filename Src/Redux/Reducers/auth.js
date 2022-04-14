import { types } from "../Types/auth";

let initialState = {

};
const authReducer = (state = initialState, action) => {
  switch (action.type) {



    //  Login Email
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loadingLoginEmail: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        userLogin: action.payload,
        loadingLoginEmail: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loadingLoginEmail: false,
      };


    // Register User
    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
        loadingRegister: true,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        userRegister: action.payload,
        loadingRegister: false,
      };
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        loadingRegister: false,
      };


    // Forgot Password User
    case types.FORGOT_USER_REQUEST:
      return {
        ...state,
        loadingForgot: true,
      };
    case types.FORGOT_USER_SUCCESS:
      return {
        ...state,
        // forgotEmail: action.payload,
        loadingForgot: false,
      };
    case types.FORGOT_USER_FAILURE:
      return {
        ...state,
        loadingForgot: false,
      };

    // Verify User
    case types.VERIFY_USER_REQUEST:
      return {
        ...state,
        loadingVerifyOtp: true,
      };
    case types.VERIFY_USER_SUCCESS:
      return {
        ...state,
        verifyOtp: action.payload,
        loadingVerifyOtp: false,
      };
    case types.VERIFY_USER_FAILURE:
      return {
        ...state,
        loadingVerifyOtp: false,
      };



    // Reset User Password
    case types.RESET_USER_PASSWORD_REQUEST:
      return {
        ...state,
        loadingReset: true,
      };
    case types.RESET_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: action.payload,
        loadingReset: false,
      };
    case types.RESET_USER_PASSWORD_FAILURE:
      return {
        ...state,
        loadingReset: false,
      };

    // Logout User
    case types.LOGOUT_USER_REQUEST:
      return {
        ...state,
      };
    case types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
      };
    case types.LOGOUT_USER_FAILURE:
      return {
        ...state,
      };


    default: {
      return { ...state };
    }
  }
};

export default authReducer;