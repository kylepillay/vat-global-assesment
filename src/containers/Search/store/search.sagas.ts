import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_ALL_QUOTES, GET_ALL_QUOTES_SUCCESS, GET_SINGLE_QUOTES, GET_SINGLE_QUOTES_FAILED, GET_SINGLE_QUOTES_SUCCESS, SEARCH_ALL_QUOTES, SEARCH_ALL_QUOTES_FAILED, SEARCH_ALL_QUOTES_SUCCESS } from './search.constants';
import { fetchQuotes, getQuote, searchQuotes } from '../../../api/quotes.api'
import { GetAllQuotesAction, GetSingleQuotesAction, SearchAllQuotesAction } from './search.types';

/* -------------------------------------------------------------------------- */
/*                                 View Quotes                                */
/* -------------------------------------------------------------------------- */

function* fetchQuotesSaga(action: GetAllQuotesAction): any {
    const {payload: {  perPage, page } } = action
    try {
        const data = yield call(fetchQuotes, { perPage, page })    

        yield put({ type: GET_ALL_QUOTES_SUCCESS, payload: data.data })
    } catch (e) {
        yield put({ type: GET_ALL_QUOTES_SUCCESS, payload: e })
    }
}
export function* fetchQuotesActionWatcher() {
     yield takeLatest(GET_ALL_QUOTES, fetchQuotesSaga)
}

/* -------------------------------------------------------------------------- */
/*                                Search Quotes                               */
/* -------------------------------------------------------------------------- */

function* searchQuotesSaga(action: SearchAllQuotesAction): any {
    const {payload: { perPage, page, query } } = action
    try {
        const data = yield call(searchQuotes, { perPage, page, query })

        yield put({ type: SEARCH_ALL_QUOTES_SUCCESS, payload: data.data })
    } catch (e) {
        yield put({ type: SEARCH_ALL_QUOTES_FAILED, payload: e })
    }
}
export function* searchQuotesActionWatcher() {
     yield takeLatest(SEARCH_ALL_QUOTES, searchQuotesSaga)
}

/* -------------------------------------------------------------------------- */
/*                                Single Quote                                */
/* -------------------------------------------------------------------------- */

function* getQuoteSaga(action: GetSingleQuotesAction): any {
    const {payload: { id } } = action
    try {
        const data = yield call(getQuote, { id })    
        console.log(data)
        yield put({ type: GET_SINGLE_QUOTES_SUCCESS, payload: data.data })
    } catch (e) {
        yield put({ type: GET_SINGLE_QUOTES_FAILED, payload: e })
    }
}
export function* getQuoteActionWatcher() {
     yield takeLatest(GET_SINGLE_QUOTES, getQuoteSaga)
}

