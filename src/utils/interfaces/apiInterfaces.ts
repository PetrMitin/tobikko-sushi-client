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

export interface IPromotion {
    startDate: Date,
    endDate: Date,
    primaryText: string,
    secondaryText: string
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

export interface IAboutUsParagraph {
    id: number,
    text: string,
    prev: number,
    next: number
}

export interface IImageData {
    id: number,
    filename: string
}