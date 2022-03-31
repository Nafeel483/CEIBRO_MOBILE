import { types } from "../Types/project";

let initialState = {

};
const projectReducer = (state = initialState, action) => {
  switch (action.type) {



    //  Get All Chats
    case types.GET_ALL_PROJECTS_REQUEST:
      return {
        ...state,
        loadingAllProjects: true,
      };
    case types.GET_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        allProjects: action.payload,
        loadingAllProjects: false,
      };
    case types.GET_ALL_PROJECTS_FAILURE:
      return {
        ...state,
        loadingAllProjects: false,
      };


   


    default: {
      return { ...state };
    }
  }
};

export default projectReducer;