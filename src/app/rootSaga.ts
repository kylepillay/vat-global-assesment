import { all, spawn, call } from 'redux-saga/effects'
import fetchAllQuotes from '../containers/Search/store/search.sagas'

export default function* rootSaga () {
    const sagas = [
      fetchAllQuotes
    ];
  
    yield all(sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      }))
    );
  }