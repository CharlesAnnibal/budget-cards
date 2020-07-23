import { combineReducers } from "redux";
import budgets from "./budgets";
import contextMenu from "./contextMenu"



console.log("antes de juntar os reducers:", {contextMenu:contextMenu, budgets:budgets})
export default combineReducers({contextMenu, budgets });