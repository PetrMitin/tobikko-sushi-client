import { IServerError } from "../utils/interfaces/apiInterfaces"
import { IUser, IBasket, ICurrentBasketItem, IMenuItem, IMenuItemType } from "../utils/interfaces/dbInterfaces"
import { ILoginResponse } from "../utils/interfaces/UIInterfaces"

export enum ActionsTypes {
    AUTHORIZE_ADMIN = 'AUTHORIZE_ADMIN',
    LOGOUT_ADMIN = 'LOGOUT_ADMIN',
    CREATE_NEW_TYPE = 'CREATE_NEW_TYPE',
    UPDATE_TYPE = 'UPDATE_TYPE',
    DELETE_TYPE = 'DELETE_TYPE',
    CREATE_NEW_MENU_ITEM = 'CREATE_NEW_MENU_ITEM',
    UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM',
    DELETE_MENU_ITEM = 'DELETE_MENU_ITEM',
    SET_IS_PAGE_DISABLED = 'SET_IS_PAGE_DISABLED',
    REGISTRATE_USER = 'REGISTRATE_USER',
    SET_CURRENT_BASKET_ITEMS = 'SET_CURRENT_BASKET_ITEMS',
    GET_MENU_ITEMS = 'GET_MENU_ITEMS',
    GET_MENU_ITEM_TYPES = 'GET_MENU_ITEM_TYPES',
    SET_MENU_ITEM_TYPES_FILTER = 'SET_MENU_ITEM_TYPES_FILTER',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

interface AuthorizeAdminAction {
    type: ActionsTypes.AUTHORIZE_ADMIN,
    payload: ILoginResponse
}

interface LogoutAdminAction {
    type: ActionsTypes.LOGOUT_ADMIN
}

interface CreateNewTypeAction {
    type: ActionsTypes.CREATE_NEW_TYPE
}

interface UpdateTypeAction {
    type: ActionsTypes.UPDATE_TYPE
}

interface DeleteTypeAction {
    type: ActionsTypes.DELETE_TYPE
}

interface CreateNewMenuItemAction {
    type: ActionsTypes.CREATE_NEW_MENU_ITEM
}

interface UpdateMenuItemAction {
    type: ActionsTypes.UPDATE_MENU_ITEM
}

interface DeleteMenuItemAction {
    type: ActionsTypes.DELETE_MENU_ITEM
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
    payload: IServerError | null
}

interface SetIsLoadingAction {
    type: ActionsTypes.SET_IS_LOADING,
    payload: boolean
}

export type action = AuthorizeAdminAction | 
                    LogoutAdminAction | 
                    CreateNewTypeAction | 
                    UpdateTypeAction | 
                    DeleteTypeAction | 
                    CreateNewMenuItemAction |
                    UpdateMenuItemAction |
                    DeleteMenuItemAction |
                    SetIsPageDisabledAction | 
                    RegistrateUserAction | 
                    SetCurrentBasketItemsAction | 
                    GetMenuItemsAction | 
                    GetMenuItemTypesAction | 
                    SetMenuItemTypesFilterAction | 
                    SetErrorAction | 
                    SetIsLoadingAction
