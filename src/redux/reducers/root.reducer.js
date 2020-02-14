import { combineReducers } from "redux";
import budgetReducer from "./Budget.reducer";


function reducerTeste(){
    return [
        {
            budget:{
                nome:"teste1",
                "amount":"100"
            }
        }
    ]
}

export default combineReducers(reducerTeste);