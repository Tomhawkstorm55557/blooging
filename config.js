import axios from "axios"

export const axiosInstance = axios.create(
    {
        baseURL: " https://ill-crow-blazer.cyclic.app/api/"
    }
)
