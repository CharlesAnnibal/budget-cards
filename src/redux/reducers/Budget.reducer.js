
const initialState = {
    visibilityFilter: "",
    budgets: []
  }

const budgetReducer =(state = initialState, action) => {
  switch(action){
    case "":
      return state;
    default:
      return state;  
  }
}

export default budgetReducer;