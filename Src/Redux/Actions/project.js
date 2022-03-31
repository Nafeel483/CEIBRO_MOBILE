
import { types } from "../Types/project";


export function getAllProjects(user) {
  return {
    type: types.GET_ALL_PROJECTS_REQUEST,
    payload: user
  };
}