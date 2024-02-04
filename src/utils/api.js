import axios from "axios";

const BASE_URL = 'https://www.googleapis.com/customsearch/v1'

const params = {
    key: 'AIzaSyBCQJxlNPN9DFeyX46Sq9Vd4lEXpMbGepM',
    cx : '815492747c0cc4bb9'
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    })
    return data;
};
