import {BudgetStorage} from "../../containers/storage/budget/BudgetStorage"
import { GET_LIST, ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
    budgets: []
  }

const budgetReducer = (state = initialState, action) => {
  console.log("action",action);
  console.log(state);
  switch(action.type){
    case GET_LIST:
      console.log("get list reducer", action.payload)
      return {
        "list":state,
        //"list":BudgetStorage.getAll()
      }
    default:
      return {
        "default":state
      };  
  }
}

export default budgetReducer;