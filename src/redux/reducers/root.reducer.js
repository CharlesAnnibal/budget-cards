import { combineReducers } from "redux";
import budgetReducer from "./Budget.reducer";


const initialState = {
    show:"test"
}
const contextMenu = (state = initialState, action) => {
    console.log("Chamou o root reducer action:",action)
    console.log("Chamou o root reducer  state:",state)
    switch (action.type) {
        case "SHOW_MENU":
            console.log("passou aki?",action)
            return Object.assign({}, state, {budgetList:{show: true, id:action.payload.budgetId}})
        case "HIDE_MENU":
            return Object.assign({}, state, {budgetList:{show: true, id:action.payload.budgetId}})
        default:
            return state;
    }
}

export default combineReducers({contextMenu:contextMenu, budgets: budgetReducer });