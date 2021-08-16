import axios from 'axios';

export const fetchQuotes = ({ page, perPage }: { page: number, perPage: number}) => {
    console.log(perPage)
    return axios.get('/quotes', {
        params: {
            page,
            limit: perPage
        }
      });
}

export const searchQuotes = ({ page, perPage, query }: { page: number, perPage: number, query: string}) => {
    return axios.get('/search/quotes', {
        params: {
            query,
            page,
            limit: perPage
        }
      });
}

export const getQuote = ({ id }: { id: string}) => {
    return axios.get(`/quotes/${id}`);
}