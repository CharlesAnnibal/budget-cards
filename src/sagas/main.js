import { takeEvery } from 'redux-saga/effects';
import { GET_ALL_BUDGETS } from "../redux/ducks/budgets"

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* test2() {
    console.log('Hello Sagas!xxxx')
}

export function* test() {
    yield takeEvery(GET_ALL_BUDGETS, test2)
}