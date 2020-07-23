
export const GET_ALL_BUDGETS = "budgets/GET_ALL_BUDGETS"
export const LIST_BUDGETS = "budgets/LIST_BUDGETS"

const initialState = {
  list: []
}

export default function (state = initialState, action){
  console.log("REDUCER BUDGETS:", action)
  switch (action.type) {
    case LIST_BUDGETS:
      return {
        ...state,
        list: action.payload.budgets
      }

    default:
      return state
  }
}

export const getAllBudgets = () =>{
  console.log("getAllBudgets")
  return{
    type:GET_ALL_BUDGETS,
  }
}

export const listBudgets = content =>{
  console.log("listBudgets", content)
  return{
    type:LIST_BUDGETS,
    payload:{
      budgets:content
    }
  }
}