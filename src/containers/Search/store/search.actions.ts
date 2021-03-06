import { GET_ALL_QUOTES, GET_ALL_QUOTES_FAILED, GET_ALL_QUOTES_COMPLETE, GET_ALL_QUOTES_SUCCESS, SEARCH_ALL_QUOTES, SEARCH_ALL_QUOTES_FAILED, SEARCH_ALL_QUOTES_COMPLETE, SEARCH_ALL_QUOTES_SUCCESS, GET_SINGLE_QUOTES, GET_SINGLE_QUOTES_SUCCESS, GET_SINGLE_QUOTES_COMPLETE } from "./search.constants";
import { 
    GetAllQuotesPayload, 
    GetAllQuotesFailedPayload, 
    GetAllQuotesSuccessPayload, 
    SearchAllQuotesPayload, 
    SearchAllQuotesFailedPayload, 
    SearchAllQuotesSuccessPayload,
    GetSingleQuotesPayload, 
    GetSingleQuotesFailedPayload, 
    GetSingleQuotesSuccessPayload 
} from "././search.types";


/* -------------------------------------------------------------------------- */
/*                               Get All Quotes                               */
/* -------------------------------------------------------------------------- */

export const getAllQuotesAction = ({ page, perPage }: GetAllQuotesPayload) =>
  ({
    type: GET_ALL_QUOTES,
    payload: { page, perPage } as GetAllQuotesPayload
  } as const)

  export const getAllQuotesSuccessAction = (payload: GetAllQuotesSuccessPayload) =>
  ({
    type: GET_ALL_QUOTES_SUCCESS,
    payload: payload as GetAllQuotesSuccessPayload
  } as const)

  export const getAllQuotesFailedAction = ({ error }: GetAllQuotesFailedPayload) =>
  ({
    type: GET_ALL_QUOTES_FAILED,
    payload: { error } as GetAllQuotesFailedPayload
  } as const)

  export const getAllQuotesCompleteAction = () =>
  ({
    type: GET_ALL_QUOTES_COMPLETE
  } as const)


/* -------------------------------------------------------------------------- */
/*                                Search Quotes                               */
/* -------------------------------------------------------------------------- */


  export const searchAllQuotesAction = ({ page, perPage, query }: SearchAllQuotesPayload) =>
  ({
    type: SEARCH_ALL_QUOTES,
    payload: { page, perPage, query } as SearchAllQuotesPayload
  } as const)

  export const searchAllQuotesSuccessAction = (payload: SearchAllQuotesSuccessPayload) =>
  ({
    type: SEARCH_ALL_QUOTES_SUCCESS,
    payload: payload as SearchAllQuotesSuccessPayload
  } as const)

  export const searchAllQuotesFailedAction = ({ error }: SearchAllQuotesFailedPayload) =>
  ({
    type: SEARCH_ALL_QUOTES_FAILED,
    payload: { error } as SearchAllQuotesFailedPayload
  } as const)

  export const searchAllQuotesCompleteAction = () =>
  ({
    type: SEARCH_ALL_QUOTES_COMPLETE
  } as const)

/* -------------------------------------------------------------------------- */
/*                              Get Single Quote                              */
/* -------------------------------------------------------------------------- */


export const getSingleQuotesAction = ({ id }: GetSingleQuotesPayload) =>
({
  type: GET_SINGLE_QUOTES,
  payload: { id } as GetSingleQuotesPayload
} as const)

export const getSingleQuotesSuccessAction = (payload: GetSingleQuotesSuccessPayload) =>
({
  type: GET_SINGLE_QUOTES_SUCCESS,
  payload: payload as GetSingleQuotesSuccessPayload
} as const)

export const getSingleQuotesFailedAction = ({ error }: GetSingleQuotesFailedPayload) =>
({
  type: GET_ALL_QUOTES_FAILED,
  payload: { error } as GetSingleQuotesFailedPayload
} as const)

export const getSingleQuotesCompleteAction = () =>
({
  type: GET_SINGLE_QUOTES_COMPLETE
} as const)