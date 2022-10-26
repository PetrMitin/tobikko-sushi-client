import { IMenuItemType, IMenuItemInfo } from "./dbInterfaces"

export interface IServerError {
    message: string
}

export interface IMenuItemData {
    name?: string,
    price?: number,
    halfportionprice?: number | null,
    halfportionmass?: number,
    massInGramms?: number,
    image?: File,
    prev?: number,
    next?: number, 
    menuItemTypesId?: number[],
    info?: IMenuItemInfoData[]
}

export interface IMenuItemInfoData {
    title: string,
    info: string
}

export interface IDiscount {
    name: string,
    multiplier: number,
    menuItemIds?: number[]
}

export interface IDaDataSuggestion {
    value: string,
    unrestricted_value: string
}

export interface IDaDataSuggestionResponse {
    suggestions: IDaDataSuggestion[]
}

export interface DoubleLinkedListNode {
    id: number,
    prev: number,
    next: number
}