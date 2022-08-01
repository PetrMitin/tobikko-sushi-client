import axios from "axios"
import $admin_api from "../http/axios"
import { API_URL } from "../utils/consts/urlConsts"
import { IMenuItemData } from "../utils/interfaces/apiInterfaces"
import { IMenuItemType, IMenuItemInfo } from "../utils/interfaces/dbInterfaces"
import { ILoginResponse } from "../utils/interfaces/UIInterfaces"

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
        const res = await $admin_api.post('/api/type/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return res.data
    }

    updateType = async (id: number, name?: string, icon?: File) => {
        let formData = new FormData()
        formData.append('icon', icon || '')
        formData.append('name', name || '')
        const res = await $admin_api.put(`/api/type/${id}`, {name, icon}, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return res.data
    }

    deleteType = async (id: number) => {
        await $admin_api.delete(`/api/type/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    createNewMenuItem = async (newMenuItem: IMenuItemData) => {
        let formData = new FormData()
        let key: keyof IMenuItemData;
        for (key in newMenuItem) {
            const value = newMenuItem[key]
            if (value instanceof File) {
                formData.append(key, value)
            } else if (value === undefined) {
                throw new Error('Invalid data specified')
            } else {
                formData.append(key, typeof value === 'string' ? value : JSON.stringify(value))
            }
        }
        const res = await $admin_api.post('/api/items/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
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
            } else if (value === undefined) {
                formData.append(key, '')
            } else {
                formData.append(key, typeof value === 'string' ? value : JSON.stringify(value))
            }
        }
        const res = await $admin_api.put(`/api/items/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return res.data
    }

    deleteMenuItem = async (id: number) => {
        await $admin_api.delete(`/api/items/${id}`)
    }
}

export default new AdminApiActions()