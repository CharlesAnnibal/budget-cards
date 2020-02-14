

import { GET_LIST, ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

export const getList = content => ({
  type: GET_LIST,
  payload: {
    content,
    other:"eeeee"
  }
})

export const addTodo = content => {
  return {
    type: ADD_TODO,
    payload: {
      content:content+" tesstingueee",
      other:"eeee33333e"
    }
  }
}