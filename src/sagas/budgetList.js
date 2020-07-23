import { GET_ALL_BUDGETS, listBudgets } from "../redux/ducks/budgets"
import { call, put, takeEvery } from 'redux-saga/effects';
import {getBudgets} from "../services/realm/budgetModel"
import {RealmConnection, RealmConnection2, closeConnection} from "../services/realm"


export function* getBudgetsFromRealm() {
    const {connection} = yield call(RealmConnection2)
    console.log("pann",connection)
    const budgets = yield call(getBudgets, connection)
    console.log("ueeeee",budgets)
    yield put(listBudgets(budgets))
    //yield call(closeConnection, connection)
    console.log('Hello Sagas!xxxx')
}



export function* getAllBudgets() {
    yield takeEvery(GET_ALL_BUDGETS, getBudgetsFromRealm)
}