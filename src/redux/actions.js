

import { GET_LIST, ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0
export const getList = content => ({
  type: GET_LIST,
  payload: {
    content,
    other:"eeeee"
  }
})