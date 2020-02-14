import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from "./reducers/root.reducer";
import BudgetReducer from  "./reducers/Budget.reducer"

const middlewares = [logger];

function reducerTeste(){
    return [
            {
                nome:"teste1",
                "amount":"100"
            },
            {
                nome:"teste2",
                "amount":"100"
            },
            {
                nome:"teste3",
                "amount":"100"
            },
     
    ]
}
const store = createStore(rootReducer);
export default store;