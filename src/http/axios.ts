import axios from "axios";
import { API_URL } from "../utils/consts";

const $admin_api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$admin_api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    config.headers!["Content-Type"] = 'application/json'
    return config
})
$admin_api.interceptors.response.use()

export default $admin_api