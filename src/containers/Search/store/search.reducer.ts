import * as types from './search.types'
import * as constants from './search.constants'

const initialState: types.QuoteListState = {
    count: 0,
    totalCount: 0,
    page: 0,
    totalPages: 0,
    lastItemIndex: 0,
    isLoading: false,
    results: []
  }

  const searchReducer = (
    state: types.QuoteListState = initialState,
    action: types.GetQuoteListAction,
  ): types.QuoteListState => {
      
    switch (action.type) {
      case constants.GET_ALL_QUOTES:
        return {
          ...state,
          isLoading: true,
        }
      case constants.GET_ALL_QUOTES_FAILED:
        return {
          ...state,
          isLoading: false,
          ...(action.payload.error && { error: action.payload.error }),
        }
      case constants.GET_ALL_QUOTES_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isLoading: false,
        }
      case constants.GET_ALL_QUOTES_COMPLETE:
        return initialState
      default:
        return state
    }
  }

  export default searchReducer
  