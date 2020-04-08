

import { REQUEST_ALL_BUDGETS, RECEIVE_ALL_BUDGETS, GET_BUDGETS, ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

export const requestAllBudgets = () => {
  console.log("dispatched action","request all budgets")
  return{
    type: REQUEST_ALL_BUDGETS
  }
}

export const receiveAllBudgets = (content) => {
  console.log("dispatched action receive all budgets");
  return {
    type: RECEIVE_ALL_BUDGETS,
    payload: {
      budgets: content
    }
  }
}

  export const addTodo = content => {
    return {
      type: ADD_TODO,
      payload: {
        content: content + " tesstingueee",
        other: "eeee33333e"
      }
    }
  }
