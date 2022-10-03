import axios from "axios"
import { DADATA_API_TOKEN } from "../utils/consts/apiConsts"
import { ADDRESS_API_URL, API_URL } from "../utils/consts/urlConsts"
import { IDaDataSuggestion, IDaDataSuggestionResponse, IDiscount } from "../utils/interfaces/apiInterfaces"
import { IUser, IBasket, IMenuItem, IMenuItemType, ICurrentBasketItem } from "../utils/interfaces/dbInterfaces"
import { IDeliveryRegion } from "../utils/interfaces/UIInterfaces"


class UserApiActions {
    baseApiUrl = `${API_URL}/api`

    registrateUser = async (): Promise<{user: IUser, basket: IBasket}> => {
        const res = await fetch(`${this.baseApiUrl}/user/registration`, {
            method: 'POST',
            body: JSON.stringify({
                email: '',
                password: '',
                role: 'USER'
            })
        })
        if (!res.ok) throw new Error('Could not registrate user')
        const jsonRes = await res.json()
        return jsonRes
    }

    getMenuItems = async (): Promise<IMenuItem[]> => {
        const res = await fetch(`${this.baseApiUrl}/items/`)
        if (!res.ok) throw new Error('Could not fetch items')
        const jsonRes = await res.json()
        return jsonRes
    }

    getMenuItemTypes = async (): Promise<IMenuItemType[]> => {
        const res = await fetch(`${this.baseApiUrl}/type/`)
        if (!res.ok) throw new Error('Could not fetch item types')
        const jsonRes = await res.json()
        return jsonRes
    }

    getAddressSuggestions = async(query: string): Promise<IDaDataSuggestion[]> => {
        const res = await axios.post<IDaDataSuggestionResponse>(`${ADDRESS_API_URL}`, {query}, {
            withCredentials: false,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + DADATA_API_TOKEN
            },
        })
        return res.data.suggestions
    }

    initializePayment = async (userId: number, 
        phone: string, 
        email: string, 
        name: string, 
        address: string, 
        deliveryRegion: IDeliveryRegion,
        paymentMethod: 'courier' | 'online',
        discounts: IDiscount[],
        currentBasketItems: ICurrentBasketItem[],
        comment?: string): Promise<any> => {
            console.log(currentBasketItems);
            window.console.log(userId, 
                phone, 
                email, 
                name, 
                address, 
                deliveryRegion,
                paymentMethod, 
                currentBasketItems,
                comment)
        const res = await axios.post(`${this.baseApiUrl}/payment/initialize`, {
            userId, 
            phone, 
            email, 
            name, 
            address, 
            deliveryRegion,
            paymentMethod, 
            discounts,
            currentBasketItems,
            comment
        }, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.status >= 400) throw new Error('Could not save your order')
        return res.data
    }
}

export default new UserApiActions()