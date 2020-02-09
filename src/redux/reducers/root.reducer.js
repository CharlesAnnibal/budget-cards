import { combineReducers } from "redux";
import budgetReducer from "./Budget.reducer";

export default combineReducers({ budget:budgetReducer });