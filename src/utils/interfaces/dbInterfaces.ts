export interface IMenuItem {
    id: number,
    name: string,
    price: number,
    massInGramms: number,
    image: string,
    menu_item_types: IMenuItemType[],
    menu_item_infos: IMenuItemInfo[],
    createdAt: string,
    updatedAt: string
}

export interface IMenuItemType {
    id: number,
    name: string,
    icon: string,
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
    basketId: number | null,
    menuItemId: number
}

export interface IUser {
    id: number,
    email: string | null,
    name: string | null,
    phone: string | null,
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