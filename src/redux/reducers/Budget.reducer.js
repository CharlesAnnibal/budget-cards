
const initialState = {
  budgetList: []
}

const budgetReducer = (state = initialState, action) => {
  console.log("Chamou o budget reducer",action)
  console.log("action wuando chamou o budget:",state)
  switch (action.type) {
    case "GET_ALL_BUDGETS":
      console.log("novo state:",Object.assign({}, state, {budgetList:action.payload.budgets}))
      return  Object.assign({}, state, {budgetList:action.payload.budgets})

    default:
      return state
  }
}

export default budgetReducer;