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


    default: {
      return { ...state };
    }
  }
};

export default authReducer;