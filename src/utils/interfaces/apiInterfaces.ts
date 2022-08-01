import { IMenuItemType, IMenuItemInfo } from "./dbInterfaces"

export interface IServerError {
    message: string
}

export interface IMenuItemData {
    name?: string,
    price?: number,
    massInGramms?: number,
    image?: File,
    menuItemTypesId?: number[],
    info?: IMenuItemInfoData[]
}

export interface IMenuItemInfoData {
    title: string,
    info: string
}