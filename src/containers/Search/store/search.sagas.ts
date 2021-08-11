import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_ALL_QUOTES, GET_ALL_QUOTES_SUCCESS } from './search.constants';
import { fetchQuotes } from '../../../api/quotes.api'

function* fetchQuotesSaga(): any {
    
    try {
        const data = yield call(fetchQuotes, { perPage: '20', page: '2' })    

        yield put({ type: GET_ALL_QUOTES_SUCCESS, payload: data.data })
    } catch (e) {
        yield put({ type: GET_ALL_QUOTES_SUCCESS, e })
    }
}
export default function* actionWatcher() {
     yield takeLatest(GET_ALL_QUOTES, fetchQuotesSaga)
}