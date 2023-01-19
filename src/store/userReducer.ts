import { Reducer } from 'react'
import { IUserState } from '../utils/interfaces/reduxInterfaces'
import {ActionsTypes, action} from './actions'

const initialState: IUserState = {
    user: null,
    basket: null,
    currentBasketItems: [],
    menuItems: [],
    menuItemTypesFilter: null,
    menuItemTypes: [],
    aboutUsParagraphs: [],
    aboutUsImages: [],
    totalDiscounts: [],
    activePromotion: null,
    addressSuggestions: [],
    isLoading: false,
    error: null
}

const userReducer: Reducer<IUserState | undefined, action | {type: ''}> = (state=initialState, action: action | {type: ''}): IUserState => {
    switch(action.type) {
        case ActionsTypes.REGISTRATE_USER:
            return {...state, user: action.payload.user, basket: action.payload.basket}
        case ActionsTypes.SET_CURRENT_BASKET_ITEMS:
            return {...state, currentBasketItems: action.payload}
        case ActionsTypes.SET_TOTAL_DISCOUNTS:
            return {...state, totalDiscounts: action.payload}
        case ActionsTypes.GET_ACTIVE_PROMOTION:
            return {...state, activePromotion: action.payload}
        case ActionsTypes.SET_ACTIVE_PROMOTION:
            return {...state, activePromotion: action.payload}
        case ActionsTypes.GET_MENU_ITEMS:
            return {...state, menuItems: action.payload}
        case ActionsTypes.GET_MENU_ITEM_TYPES:
            return {...state, menuItemTypes: action.payload}
        case ActionsTypes.GET_PARAGRAPHS:
            return {...state, aboutUsParagraphs: action.payload}
        case ActionsTypes.GET_IMAGES:
            return {...state, aboutUsImages: action.payload}
        case ActionsTypes.GET_ADDRESS_SUGGESTIONS:
            return {...state, addressSuggestions: action.payload}
        case ActionsTypes.SET_ADDRESS_SUGGESTIONS:
            return {...state, addressSuggestions: action.payload}
        case ActionsTypes.SET_MENU_ITEM_TYPES_FILTER:
            return {...state, menuItemTypesFilter: action.payload}
        case ActionsTypes.SET_ERROR:
            return {...state, error: action.payload}
        case ActionsTypes.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default: 
            return state
    }
}

export default userReducer