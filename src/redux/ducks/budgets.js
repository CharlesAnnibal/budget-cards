
export const GET_ALL_BUDGETS = "budgets/GET_ALL_BUDGETS"
export const LIST_BUDGETS = "budgets/LIST_BUDGETS"
export const CREATE_BUDGET = "budgets/CREATE_BUDGET"
export const UPDATE_BUDGET = "budgets/UPDATE_BUDGET"
export const DELETE_BUDGET = "budgets/DELETE_BUDGET"



const initialState = {
  list: []
}

export default function (state = initialState, action) {
  console.log("REDUCER BUDGETS:", action)
  switch (action.type) {
    case LIST_BUDGETS:
      return {
        ...state,
        list: action.payload.budgets
      }
    case CREATE_BUDGET:
      return {
        ...state,
        budget: action.payload.budget
      }

    default:
      return state
  }
}

export const getAllBudgets = () => {
  console.log("getAllBudgets")
  return {
    type: GET_ALL_BUDGETS,
  }
}



export const listBudgets = content => {
  console.log("listBudgets", content)
  return {
    type: LIST_BUDGETS,
    payload: {
      budgets: content
    }
  }
}

export const createBudget = content => {
  return {
    type: CREATE_BUDGET,
    payload: { budget: content }
  }
}