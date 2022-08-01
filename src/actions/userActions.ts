import { API_URL } from "../utils/consts/urlConsts"
import { IUser, IBasket, IMenuItem, IMenuItemType } from "../utils/interfaces/dbInterfaces"


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
}

export default new UserApiActions()