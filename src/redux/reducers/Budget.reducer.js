import { BudgetStorage } from "../../containers/storage/budget/BudgetStorage"
import { GET_LIST, ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  budgets: []
}

const budgetReducer = (state = initialState, action) => {
  console.log("action", action);
  console.log(state);
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
      return teste
    case ADD_TODO:
      teste = [
        {
          nome: "ADDTODO RODOU",
          "amount": "500"
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