import axios from "axios"
import DoubleLinkedList from "../utils/classes/DoubleLinkedList"
import { DADATA_API_TOKEN } from "../utils/consts/apiConsts"
import { ADDRESS_API_URL, API_URL } from "../utils/consts/urlConsts"
import { IAboutUsParagraph, IDaDataSuggestion, IDaDataSuggestionResponse, IDiscount, IPromotion } from "../utils/interfaces/apiInterfaces"
import { IUser, IBasket, IMenuItem, IMenuItemType, ICurrentBasketItem } from "../utils/interfaces/dbInterfaces"
import { IDeliveryRegion, IImage } from "../utils/interfaces/UIInterfaces"


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
        return DoubleLinkedList.sortToArray<IMenuItem>(jsonRes)
    }

    getMenuItemTypes = async (): Promise<IMenuItemType[]> => {
        const res = await fetch(`${this.baseApiUrl}/type/`)
        if (!res.ok) throw new Error('Could not fetch item types')
        const jsonRes = await res.json()
        return jsonRes
    }

    getAboutUsParagraphs = async (): Promise<IAboutUsParagraph[]> => {
        const res = await fetch(`${this.baseApiUrl}/static-data/`)
        if (!res.ok) throw new Error('Could not fetch paragraphs')
        const jsonRes = await res.json()
        return DoubleLinkedList.sortToArray(jsonRes)
    }

    getAboutUsImages = async (): Promise<IImage[]> => {
        const res = await fetch(`${this.baseApiUrl}/static-data/images`)
        if (!res.ok) throw new Error('Could not fetch images')
        const jsonRes = await res.json()
        return jsonRes.images.map((imgData: {id: number, filename: string}) => ({src: `${API_URL}/${imgData.filename}`, id: imgData.id}))
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

    getActiveDiscount = async(): Promise<IDiscount> => {
        const res = await fetch(`${this.baseApiUrl}/discount/get-active-discount`)
        if (!res.ok) throw new Error('Could not fetch discounts')
        const jsonRes: IDiscount = await res.json()
        return jsonRes
    }

    getActivePromotion = async(): Promise<IPromotion> => {
        const res = await fetch(`${this.baseApiUrl}/discount/active-promotion`)
        if (!res.ok) throw new Error('Could not fetch promo')
        const jsonRes: {activePromotion: {startDate: string, endDate: string, primaryText: string, secondaryText: string}} = await res.json()
        return {
            ...jsonRes.activePromotion, 
            startDate: new Date(Date.parse(jsonRes.activePromotion.startDate)), 
            endDate: new Date(Date.parse(jsonRes.activePromotion.endDate))
        }
    }

    initializePayment = async (userId: number, 
        phone: string, 
        email: string, 
        name: string,
        numberOfPeople: number, 
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
            numberOfPeople, 
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