import { combineReducers } from '@reduxjs/toolkit'
import searchReducer from '../containers/Search/store/search.reducer'

const rootReducer = combineReducers({
    searchAll: searchReducer
} as {
    searchAll: any
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer