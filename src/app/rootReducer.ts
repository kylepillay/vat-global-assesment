import { combineReducers } from '@reduxjs/toolkit'
import {searchQuotesReducer, allQuotesReducer, singleQuotesReducer} from '../containers/Search/store/search.reducer'

const rootReducer = combineReducers({
    allQuotes: allQuotesReducer,
    searchAll: searchQuotesReducer,
    getSingle: singleQuotesReducer
} as {
    searchAll: any
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer