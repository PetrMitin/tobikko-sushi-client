import axios from "axios"
import $admin_api from "../http/axios"
import { API_URL } from "../utils/consts/urlConsts"
import { IAboutUsParagraph, IDiscount, IImageData, IMenuItemData, IPromotion } from "../utils/interfaces/apiInterfaces"
import { IImage, ILoginResponse } from "../utils/interfaces/UIInterfaces"

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

    incrementMenuItem = async (id: number) => {
        const res = await axios.put(`${API_URL}/api/items/${id}/increment`, {}, {
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        return res.data
    }

    decrementMenuItem = async (id: number) => {
        const res = await axios.put(`${API_URL}/api/items/${id}/decrement`, {}, {
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

    createNewAboutUsParagraph = async (text: string): Promise<IAboutUsParagraph> => {
        const res = await fetch(`${this.baseApiUrl}/static-data`, {
            method: 'POST',
            body: JSON.stringify({
                text
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (!res.ok) throw new Error('Could not create new paragraph')
        const jsonRes = await res.json()
        return jsonRes.paragraph
    } 

    updateAboutUsParagraph = async (id: number, text: string): Promise<void> => {
        const res = await fetch(`${this.baseApiUrl}/static-data/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                text
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (!res.ok) throw new Error('Could not update paragraph')
    } 

    deleteAboutUsParagraph = async (id: number): Promise<void> => {
        const res = await fetch(`${this.baseApiUrl}/static-data/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (!res.ok) throw new Error('Could not delete paragraph')
    } 

    incrementAboutUsParagraph = async (id: number): Promise<void> => {
        const res = await fetch(`${this.baseApiUrl}/static-data/${id}/increment`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (!res.ok) throw new Error('Could not update paragraph')
    } 

    decrementAboutUsParagraph = async (id: number): Promise<void> => {
        const res = await fetch(`${this.baseApiUrl}/static-data/${id}/decrement`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (!res.ok) throw new Error('Could not update paragraph')
    } 

    addAboutUsImage = async (imageData: FormData): Promise<IImage> => {
        const res = await axios.post<{image: IImageData}>(`${API_URL}/api/static-data/images`, imageData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        const addedImageData = res.data.image
        return {id: addedImageData.id, src: `${API_URL}/${addedImageData.filename}`}
    }

    deleteAboutUsImage = async (id: number): Promise<void> => {
        const res = await fetch(`${this.baseApiUrl}/static-data/images/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (!res.ok) throw new Error('Could not delete paragraph')
    }

    setActiveDiscount = async(discount: IDiscount): Promise<IDiscount> => {
        const res = await fetch(`${this.baseApiUrl}/discount/set-active-discount`, {
            method: 'POST',
            body: JSON.stringify({
                ...discount
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (!res.ok) throw new Error('Could not set active discount')
        const jsonRes = await res.json()
        return jsonRes
    }

    setActivePromotion = async(promotion: IPromotion): Promise<boolean> => {
        const res = await fetch(`${this.baseApiUrl}/discount/active-promotion`, {
            method: 'POST',
            body: JSON.stringify({
                ...promotion, 
                startDate: promotion.startDate.toDateString(), 
                endDate: promotion.endDate.toDateString()
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (!res.ok) throw new Error('Could not set promo')
        const jsonRes = await res.json()
        return true
    }
}

export default new AdminApiActions()