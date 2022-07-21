import axios from "axios"
import $admin_api from "../http/axios"
import { ILoginResponse } from "../utils/interfaces/UIInterfaces"

class AdminApiActions {
    baseApiUrl = 'http://localhost:4000/api'

    login = async (email: string, password: string): Promise<ILoginResponse> => {
        const res = await $admin_api.post('api/user/login', {email, password, role: 'ADMIN'})
        return res.data
    }

    registration = async (email: string, password: string): Promise<ILoginResponse> => {
        const res = await $admin_api.post('api/user/registration', {email, password, role: 'ADMIN'})
        return res.data
    }

    logout = async () => {
        await $admin_api.get('api/user/logout')
    }

    checkAuth = async (): Promise<ILoginResponse> => {
        const res = await axios.get(`${this.baseApiUrl}/user/refresh`, {withCredentials: true})
        return res.data
    }
}

export default new AdminApiActions()