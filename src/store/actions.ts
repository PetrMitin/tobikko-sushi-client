import { IBasket, ICurrentBasketItem, IMenuItem, IMenuItemType, IUser } from "../utils/interfaces"

export enum ActionsTypes {
    SET_IS_PAGE_DISABLED = 'SET_IS_PAGE_DISABLED',
    REGISTRATE_USER = 'REGISTRATE_USER',
    SET_CURRENT_BASKET_ITEMS = 'SET_CURRENT_BASKET_ITEMS',
    GET_MENU_ITEMS = 'GET_MENU_ITEMS',
    GET_MENU_ITEM_TYPES = 'GET_MENU_ITEM_TYPES',
    SET_MENU_ITEM_TYPES_FILTER = 'SET_MENU_ITEM_TYPES_FILTER',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

interface SetIsPageDisabledAction {
    type: ActionsTypes.SET_IS_PAGE_DISABLED,
    payload: boolean
}

interface RegistrateUserAction {
    type: ActionsTypes.REGISTRATE_USER,
    payload: {
        user: IUser,
        basket: IBasket
    }
}

interface SetCurrentBasketItemsAction {
    type: ActionsTypes.SET_CURRENT_BASKET_ITEMS,
    payload: ICurrentBasketItem[]
}

interface GetMenuItemsAction {
    type: ActionsTypes.GET_MENU_ITEMS,
    payload: IMenuItem[]
}

interface GetMenuItemTypesAction {
    type: ActionsTypes.GET_MENU_ITEM_TYPES,
    payload: IMenuItemType[]
}

interface SetMenuItemTypesFilterAction {
    type: ActionsTypes.SET_MENU_ITEM_TYPES_FILTER,
    payload: number | null
}

interface SetErrorAction {
    type: ActionsTypes.SET_ERROR,
    payload: Error | null
}

interface SetIsLoadingAction {
    type: ActionsTypes.SET_IS_LOADING,
    payload: boolean
}

export type action = SetIsPageDisabledAction | RegistrateUserAction | SetCurrentBasketItemsAction | GetMenuItemsAction | GetMenuItemTypesAction | SetMenuItemTypesFilterAction | SetErrorAction | SetIsLoadingAction
