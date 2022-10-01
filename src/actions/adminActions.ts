import axios from "axios"
import $admin_api from "../http/axios"
import { API_URL } from "../utils/consts/urlConsts"
import { IMenuItemData } from "../utils/interfaces/apiInterfaces"
import { IMenuItemType, IMenuItemInfo } from "../utils/interfaces/dbInterfaces"
import { ILoginResponse } from "../utils/interfaces/UIInterfaces"

axios.defaults.withCredentials = true

class AdminApiActions {
    baseApiUrl = `${API_URL}/api`

    login = async (email: string, password: string): Promise<ILoginResponse> => {
        const res = await $admin_api.post('api/user/login', {email, password, role: 'ADMIN'}, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.data
    }

    registration = async (email: string, password: string): Promise<ILoginResponse> => {
        const res = await $admin_api.post('api/user/registration', {email, password, role: 'ADMIN'}, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.data
    }

    logout = async () => {
        await $admin_api.get('api/user/logout', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    checkAuth = async (): Promise<ILoginResponse> => {
        const res = await axios.get(`${this.baseApiUrl}/user/refresh`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.data
    }

    createNewType = async (name: string, icon: File) => {
        let formData = new FormData()
        formData.append('icon', icon)
        formData.append('name', name)
        let obj: any = {}
        formData.forEach((value, key) => obj[key] = value)
        const res = await axios.post(`${API_URL}/api/type/`, formData, {
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        return res.data
    }

    updateType = async (id: number, name?: string, icon?: File) => {
        let formData = new FormData()
        formData.append('icon', icon || '')
        formData.append('name', name || '')
        const res = await axios.put(`${API_URL}/api/type/${id}`, formData, {
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        return res.data
    }

    deleteType = async (id: number) => {
        await axios({
            url: `${API_URL}/api/type/${id}`,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
    }

    createNewMenuItem = async (newMenuItem: IMenuItemData) => {
        let formData = new FormData()
        let key: keyof IMenuItemData;
        for (key in newMenuItem) {
            const value = newMenuItem[key]
            if (value instanceof File) {
                if (value.name) {
                    formData.append(key, value)
                } else {
                    window.alert('Invalid image specified')
                    throw new Error('Invalid image specified')
                }
            } else if (
                    value === undefined 
                    || (value !== null && value.constructor === Array && value.length === 0)
                ) {
                window.alert('Invalid data specified')
                throw new Error('Invalid data specified')
            } else {
                formData.append(key, typeof value === 'string' ? value : JSON.stringify(value))
            }
        }
        const res = await axios.post(`${API_URL}/api/items/`, formData, {
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        return res.data
    }

    updateMenuItem = async (id: number, newMenuItem: IMenuItemData) => {
        let formData = new FormData()
        let key: keyof IMenuItemData;
        for (key in newMenuItem) {
            const value = newMenuItem[key]
            if (value instanceof File) {
                formData.append(key, value)
            } else if (value === undefined || (value !== null && value.constructor === Array && value.length === 0)) {
                formData.append(key, '')
            } else {
                formData.append(key, typeof value === 'string' ? value : JSON.stringify(value))
            }
        }
        const res = await axios.put(`${API_URL}/api/items/${id}`, formData, {
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        return res.data
    }

    deleteMenuItem = async (id: number) => {
        await axios({
            url: `${API_URL}/api/items/${id}`,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
    }
}

export default new AdminApiActions()