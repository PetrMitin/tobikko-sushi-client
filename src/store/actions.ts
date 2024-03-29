import { IAboutUsParagraph, IDaDataSuggestion, IDiscount, IPromotion, IServerError } from "../utils/interfaces/apiInterfaces"
import { IUser, IBasket, ICurrentBasketItem, IMenuItem, IMenuItemType } from "../utils/interfaces/dbInterfaces"
import { IImage, ILoginResponse } from "../utils/interfaces/UIInterfaces"

export enum ActionsTypes {
    AUTHORIZE_ADMIN = 'AUTHORIZE_ADMIN',
    LOGOUT_ADMIN = 'LOGOUT_ADMIN',
    CREATE_NEW_TYPE = 'CREATE_NEW_TYPE',
    UPDATE_TYPE = 'UPDATE_TYPE',
    DELETE_TYPE = 'DELETE_TYPE',
    CREATE_NEW_MENU_ITEM = 'CREATE_NEW_MENU_ITEM',
    UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM',
    INCREMENT_MENU_ITEM = 'INCREMENT_MENU_ITEM',
    DECREMENT_MENU_ITEM = 'DECREMENT_MENU_ITEM',
    DELETE_MENU_ITEM = 'DELETE_MENU_ITEM',
    GET_PARAGRAPHS = 'GET_PARAGRAPHS',
    CREATE_NEW_PARAGRAPH = 'CREATE_NEW_PARAGRAPH',
    UPDATE_PARAGRAPH = 'UPDATE_PARAGRAPH',
    DELETE_PARAGRAPH = 'DELETE_PARAGRAPH',
    INCREMENT_PARAGRAPH = 'INCREMENT_PARAGRAPH',
    DECREMENT_PARAGRAPH = 'DECREMENT_PARAGRAPH',
    GET_IMAGES = 'GET_IMAGES',
    ADD_IMAGE = 'ADD_IMAGE',
    DELETE_IMAGE = 'DELETE_IMAGE',  
    SET_IS_PAGE_DISABLED = 'SET_IS_PAGE_DISABLED',
    REGISTRATE_USER = 'REGISTRATE_USER',
    SET_CURRENT_BASKET_ITEMS = 'SET_CURRENT_BASKET_ITEMS',
    SET_TOTAL_DISCOUNTS = 'SET_TOTAL_DISCOUNTS',
    GET_ACTIVE_PROMOTION = 'GET_ACTIVE_PROMOTION',
    SET_ACTIVE_PROMOTION = 'SET_ACTIVE_PROMOTION',
    GET_MENU_ITEMS = 'GET_MENU_ITEMS',
    GET_MENU_ITEM_TYPES = 'GET_MENU_ITEM_TYPES',
    GET_ADDRESS_SUGGESTIONS = 'GET_ADDRESS_SUGGESTIONS',
    SET_ADDRESS_SUGGESTIONS = 'SET_ADDRESS_SUGGESTIONS',
    INITIALIZE_PAYMENT = 'INITIALIZE_PAYMENT',
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

interface IncrementMenuItemAction {
    type: ActionsTypes.INCREMENT_MENU_ITEM
}

interface DecrementMenuItemAction {
    type: ActionsTypes.DECREMENT_MENU_ITEM
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

interface SetTotalDiscounts {
    type: ActionsTypes.SET_TOTAL_DISCOUNTS,
    payload: IDiscount[]
}

interface GetActivePromotion {
    type: ActionsTypes.GET_ACTIVE_PROMOTION,
    payload: IPromotion
}

interface SetActivePromotion {
    type: ActionsTypes.SET_ACTIVE_PROMOTION,
    payload: IPromotion
}

interface GetMenuItemsAction {
    type: ActionsTypes.GET_MENU_ITEMS,
    payload: IMenuItem[]
}

interface GetMenuItemTypesAction {
    type: ActionsTypes.GET_MENU_ITEM_TYPES,
    payload: IMenuItemType[]
}

interface GetAddressSuggestions {
    type: ActionsTypes.GET_ADDRESS_SUGGESTIONS,
    payload: IDaDataSuggestion[]
}

interface SetAddressSuggestions {
    type: ActionsTypes.SET_ADDRESS_SUGGESTIONS,
    payload: IDaDataSuggestion[]
}

interface InitializePaymentAction {
    type: ActionsTypes.INITIALIZE_PAYMENT
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

interface GetParagraphsAction {
    type: ActionsTypes.GET_PARAGRAPHS,
    payload: IAboutUsParagraph[]
}

interface CreateNewParagraphAction {
    type: ActionsTypes.CREATE_NEW_PARAGRAPH
}

interface UpdateParagraphAction {
    type: ActionsTypes.UPDATE_PARAGRAPH,
}

interface DeleteParagraphAction {
    type: ActionsTypes.DELETE_PARAGRAPH,
}

interface IncrementParagraphAction {
    type: ActionsTypes.INCREMENT_PARAGRAPH
}

interface DecrementParagraphAction {
    type: ActionsTypes.DECREMENT_PARAGRAPH
}

interface GetAboutUsImages {
    type: ActionsTypes.GET_IMAGES,
    payload: IImage[]
}

interface AddAboutUsImage {
    type: ActionsTypes.ADD_IMAGE
}

interface DeleteAboutUsImage {
    type: ActionsTypes.DELETE_IMAGE
}

export type action = AuthorizeAdminAction | 
                    LogoutAdminAction | 
                    CreateNewTypeAction | 
                    UpdateTypeAction | 
                    DeleteTypeAction | 
                    CreateNewMenuItemAction |
                    UpdateMenuItemAction |
                    IncrementMenuItemAction |
                    DecrementMenuItemAction |
                    DeleteMenuItemAction |
                    SetIsPageDisabledAction | 
                    RegistrateUserAction | 
                    SetCurrentBasketItemsAction | 
                    SetTotalDiscounts |
                    GetActivePromotion |
                    SetActivePromotion |
                    GetMenuItemsAction | 
                    GetMenuItemTypesAction | 
                    GetAddressSuggestions |
                    SetAddressSuggestions |
                    SetMenuItemTypesFilterAction | 
                    SetErrorAction | 
                    SetIsLoadingAction | 
                    InitializePaymentAction |
                    GetParagraphsAction |
                    CreateNewParagraphAction |
                    UpdateParagraphAction |
                    DeleteParagraphAction |
                    IncrementParagraphAction |
                    DecrementParagraphAction |
                    GetAboutUsImages |
                    AddAboutUsImage |
                    DeleteAboutUsImage
