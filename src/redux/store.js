import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import budgets from "../redux/ducks/budgets";
import contextMenu from "../redux/ducks/contextMenu"
import {helloSaga} from "../sagas/main"
import {getAllBudgets} from "../sagas/budgetList"
import createSagaMiddleware from 'redux-saga'


console.log("antes de juntar os reducers:", {contextMenu:contextMenu, budgets:budgets})

const rootReducer = combineReducers({contextMenu, budgets });

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);


const sagas = [
    helloSaga,
    getAllBudgets
]

sagas.forEach((saga)=>{
    sagaMiddleware.run(saga)
  })

export default store;