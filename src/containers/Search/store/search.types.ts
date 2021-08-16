import * as actions from './search.actions'


/* -------------------------------------------------------------------------- */
/*                                Initial State                               */
/* -------------------------------------------------------------------------- */

export interface QuoteListItem {
    tags: string[]
    _id: string
    author: string
    authorSlug: string
    dateAdded: string
    dateModified: string
}

export interface QuoteListState {
    count: number
    totalCount: number
    page: number
    totalPages: number
    lastItemIndex: number
    results: Array<QuoteListItem>
    isLoading?: boolean
}


export interface SearchQuoteListState {
  count: number
  totalCount: number
  page: number
  totalPages: number
  lastItemIndex: number
  results: Array<QuoteListItem>
  isLoading?: boolean
}

export interface SingleQuoteState {
  tags: string[]
  _id: string
  author: string
  length: number
  content: string
  isLoading?: boolean
}

/* -------------------------------------------------------------------------- */
/*                                   Actions                                  */
/* -------------------------------------------------------------------------- */

export type GetAllQuotesAction = ReturnType<
  typeof actions.getAllQuotesAction
>

export type GetAllQuotesFailedAction = ReturnType<
  typeof actions.getAllQuotesFailedAction
>

export type GetAllQuotesSuccessAction = ReturnType<
  typeof actions.getAllQuotesSuccessAction
>

export type GetAllQuoteCompleteAction = ReturnType<
  typeof actions.getAllQuotesCompleteAction
>

export type SearchAllQuotesAction = ReturnType<
  typeof actions.searchAllQuotesAction
>

export type SearchAllQuotesFailedAction = ReturnType<
  typeof actions.searchAllQuotesFailedAction
>

export type SearchAllQuotesSuccessAction = ReturnType<
  typeof actions.searchAllQuotesSuccessAction
>

export type SearchAllQuoteCompleteAction = ReturnType<
  typeof actions.searchAllQuotesCompleteAction
>

export type GetSingleQuotesAction = ReturnType<
  typeof actions.getSingleQuotesAction
>

export type GetSingleQuotesFailedAction = ReturnType<
  typeof actions.getSingleQuotesFailedAction
>

export type GetSingleQuotesSuccessAction = ReturnType<
  typeof actions.getSingleQuotesSuccessAction
>

export type GetSingleQuoteCompleteAction = ReturnType<
  typeof actions.getSingleQuotesCompleteAction
>

/* -------------------------------------------------------------------------- */
/*                                  Payloads                                  */
/* -------------------------------------------------------------------------- */

export interface GetAllQuotesPayload {
    page: number
    perPage: number
    query: string
  }
  
export interface GetAllQuotesFailedPayload {
    error: any
}
export interface GetAllQuotesSuccessPayload {
    
  count: number
  totalCount: number
  page: number
  totalPages: number
  lastItemIndex: number
  results: Array<QuoteListItem>
  isLoading?: boolean
}

export interface SearchAllQuotesPayload {
  page: number
  perPage: number
  query: string
}

export interface SearchAllQuotesFailedPayload {
  error: any
}
export interface SearchAllQuotesSuccessPayload {
  
count: number
totalCount: number
page: number
totalPages: number
lastItemIndex: number
results: Array<QuoteListItem>
isLoading?: boolean
}


export interface GetSingleQuotesPayload {
  id: string
}

export interface GetSingleQuotesFailedPayload {
  error: any
}
export interface GetSingleQuotesSuccessPayload {
  
  tags: string[]
  _id: string
  author: string
  length: number
  content: string
}
/* -------------------------------------------------------------------------- */
/*                                Consolidated                                */
/* -------------------------------------------------------------------------- */

export type GetQuoteListAction =
  | GetAllQuotesAction
  | GetAllQuotesFailedAction
  | GetAllQuotesSuccessAction
  | GetAllQuoteCompleteAction

  export type SearchQuotesAction =
  | SearchAllQuotesAction
  | SearchAllQuotesFailedAction
  | SearchAllQuotesSuccessAction
  | SearchAllQuoteCompleteAction


  export type GetSingleAction =
  | GetSingleQuotesAction
  | GetSingleQuotesFailedAction
  | GetSingleQuotesSuccessAction
  | GetSingleQuoteCompleteAction