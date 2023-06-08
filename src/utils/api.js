import axios from 'axios';


const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + API_KEY,
};  

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;    
    } catch (error) {
        console.error(error);
        return error;
    }
}