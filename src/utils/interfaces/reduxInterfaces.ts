import { IDiscount, IServerError } from "./apiInterfaces"
import { IUser, IBasket, ICurrentBasketItem, IMenuItem, IMenuItemType } from "./dbInterfaces"

export interface IUserState {
    user: IUser | null,
    basket: IBasket | null,
    currentBasketItems: ICurrentBasketItem[],
    menuItems: IMenuItem[],
    menuItemTypesFilter: null | number,
    menuItemTypes: IMenuItemType[],
    totalDiscounts: IDiscount[],
    isLoading: boolean,
    error: IServerError | null
}

export interface IAdminState {
    isPageDisabled: boolean,
    isLoggedIn: boolean,
    adminData: IAdminData
}

export interface IAdminData extends IUser {
    id: number,
    email: string,
    password: string,
    role: 'ADMIN',
    IP: string,
    userConfirmationLink: string,
    adminConfirmationLink: string,
    isConfirmedEmail: boolean,
    isConfirmedAdmin: boolean,
    createdAt: string,
    updatedAt: string
}