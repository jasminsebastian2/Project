import {
    put,
    takeEvery,
    call
} from "redux-saga/effects";
import Axios from "axios";

import {
    GET_HOME,
} from '../actions/action-types';


const url = 'https://restcountries.com/v2/all?fields=name,region,flag ';
const instance = Axios.create();
const baseURL = url;


function* getHome() {
    try {
        const response = yield call(instance.get, `${baseURL}`);
        const payload = {
            loading: false,
            error: false,
            message: response.data
        };
        console.log(payload, response.data);
        yield put({ type: 'GET_HOME_SUCCESSFULLY', payload });
    } catch (error) {
        yield put({ type: 'GET_HOME_FAILED', error });
    }
}

function* rootSaga() {
    yield takeEvery(GET_HOME, getHome);
}

export default rootSaga;
