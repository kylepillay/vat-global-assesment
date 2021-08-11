import axios from 'axios';

export const fetchQuotes = ({ page, perPage }: { page: string, perPage: string}) => {
    return axios.get('/quotes', {
        params: {
            page,
            perPage
        }
      });
}
