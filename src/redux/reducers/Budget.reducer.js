import { BudgetStorage } from "../../containers/storage/budget/BudgetStorage"
import { REQUEST_ALL_BUDGETS, RECEIVE_ALL_BUDGETS, GET_BUDGETS, GET_LIST, ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  budgets: []
}

const budgetReducer = (state = initialState, action) => {

  let teste = []
  switch (action.type) {
    case GET_LIST:
      teste = [
        {
          nome: "teste1",
          "amount": "100777"
        },
        {
          nome: "teste2",
          "amount": "100"
        },
        {
          nome: "teste3",
          "amount": "100"
        },
      ]
      return teste;

    case REQUEST_ALL_BUDGETS:
      budgets = []
      return budgets;

    case RECEIVE_ALL_BUDGETS:
      budgets = action.payload.budgets
      return budgets
    default:
      teste = [
        {
          nome: "defalut",
          "amount": "888"
        },
        {
          nome: "teste2",
          "amount": "100"
        },
        {
          nome: "teste3",
          "amount": "100"
        },
      ]
      return teste
  }
}

export default budgetReducer;