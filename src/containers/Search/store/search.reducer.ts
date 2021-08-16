import * as types from './search.types'
import * as constants from './search.constants'

const singleQuoteInitialState: types.SingleQuoteState = {
  tags: [],
  _id: '',
  author:'',
  length: 0,
  content: ''
}

const initialState: types.QuoteListState = {
    count: 0,
    totalCount: 0,
    page: 0,
    totalPages: 0,
    lastItemIndex: 0,
    isLoading: false,
    results: []
  }

  /* -------------------------------------------------------------------------- */
  /*                               Get All Quotes                               */
  /* -------------------------------------------------------------------------- */

  export const allQuotesReducer = (
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

  /* -------------------------------------------------------------------------- */
  /*                                Search Quotes                               */
  /* -------------------------------------------------------------------------- */

  export const searchQuotesReducer = (
    state: types.SearchQuoteListState = initialState,
    action: types.SearchQuotesAction,
  ): types.SearchQuoteListState => {
      
    switch (action.type) {
      case constants.SEARCH_ALL_QUOTES:
        return {
          ...state,
          isLoading: true,
        }
      case constants.SEARCH_ALL_QUOTES_FAILED:
        return {
          ...state,
          isLoading: false,
          ...(action.payload.error && { error: action.payload.error }),
        }
      case constants.SEARCH_ALL_QUOTES_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isLoading: false,
        }
      case constants.SEARCH_ALL_QUOTES_COMPLETE:
        return initialState
      default:
        return state
    }
  }

/* -------------------------------------------------------------------------- */
/*                                Single Quote                                */
/* -------------------------------------------------------------------------- */

  export const singleQuotesReducer = (
    state: types.SingleQuoteState = singleQuoteInitialState,
    action: types.GetSingleAction,
  ): types.SingleQuoteState => {
      
    switch (action.type) {
      case constants.GET_SINGLE_QUOTES:
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
      case constants.GET_SINGLE_QUOTES_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isLoading: false,
        }
      case constants.GET_SINGLE_QUOTES_COMPLETE:
        return singleQuoteInitialState
      default:
        return state
    }
  }
  