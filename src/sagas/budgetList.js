import { GET_ALL_BUDGETS, CREATE_BUDGET, listBudgets } from "../redux/ducks/budgets"
import { call, put, takeEvery } from 'redux-saga/effects';
import {getBudgets, create} from "../services/realm/budgetModel"
import { RealmConnection} from "../services/realm"


export function* getBudgetsFromRealm() {
    const {connection} = yield call(RealmConnection)
    const budgets = yield call(getBudgets, connection)
    yield put(listBudgets(budgets))
}

function* createBudget(action){
    const {connection} = yield call(RealmConnection)
    yield call(create, connection, action.payload.budget)
}



export function* getAllBudgets() {
    yield takeEvery(GET_ALL_BUDGETS, getBudgetsFromRealm)
}

export function* createBudgetEffect() {
    yield takeEvery(CREATE_BUDGET, createBudget)
}