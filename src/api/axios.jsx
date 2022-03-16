import axios from "axios";

export function createApi(url = null){
    const api = axios.create({
        baseURL: url,
    });
    return api;
}