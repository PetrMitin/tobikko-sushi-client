export interface IUserState {
    user: IUser | null,
    basket: IBasket | null,
    currentBasketItems: ICurrentBasketItem[],
    menuItems: IMenuItem[],
    menuItemTypesFilter: null | number,
    menuItemTypes: IMenuItemType[],
    isLoading: boolean,
    error: Error | null
}

export interface IAdminState {
    isPageDisabled: boolean
}

export interface IMenuItem {
    id: number,
    name: string,
    price: number,
    massInGramms: number,
    calories: number,
    image: string,
    menu_item_types: IMenuItemType[],
    menu_item_infos: IMenuItemInfo[],
    createdAt: string,
    updatedAt: string
}

export interface IMenuItemType {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string
}

export interface IMenuItemInfo {
    id: number,
    title: string,
    info: string,
    menuItemId: number,
    createdAt: string,
    updatedAt: string
}

export interface IBasket {
    id: number,
    is_paid: boolean,
    userId: number,
    createdAt: string,
    updatedAt: string
}

export interface IBasketItem {
    id: number,
    amount: number,
    basketId: number,
    menuItemId: number,
    createdAt: string,
    updatedAt: string
}

export interface ICurrentBasketItem {
    amount: number,
    basketId: number,
    menuItemId: number
}

export interface IUser {
    id: number,
    email: string,
    password: string,
    role: 'USER' | 'ADMIN',
    IP: string,
    userConfirmationLink: string | null,
    adminConfirmationLink: string | null,
    isConfirmedEmail: boolean,
    isConfirmedAdmin: boolean,
    createdAt: string,
    updatedAt: string
}

export interface IImage {
    src: string,
    alt: string,
    label?: string,
    text?: string
}

export interface IDeliveryRegion {
    name: string,
    price: string
}