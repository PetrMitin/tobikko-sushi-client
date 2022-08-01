import axios from "axios";
import { API_URL } from "../utils/consts/urlConsts";

const $admin_api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$admin_api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})
$admin_api.interceptors.response.use()

export default $admin_api