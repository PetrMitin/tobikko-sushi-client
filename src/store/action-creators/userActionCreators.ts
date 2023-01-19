import { ActionCreator } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { IDaDataSuggestion, IDiscount, IPromotion, IServerError } from "../../utils/interfaces/apiInterfaces"
import { ICurrentBasketItem } from "../../utils/interfaces/dbInterfaces"
import { action, ActionsTypes } from "../actions"
import { RootState } from "../store"
import userApiActions from '../../actions/userActions'
import { IDeliveryRegion } from "../../utils/interfaces/UIInterfaces"
import { CLIENT_URL } from "../../utils/consts/urlConsts"
import { DATE20_DISCOUNT } from "../../utils/consts/apiConsts"

export class UserActionCreators {
    static registrateUser: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = () => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const {user, basket} = await userApiActions.registrateUser()
                dispatch({type: ActionsTypes.REGISTRATE_USER, payload: {user, basket}})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    static getMenuItems: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = () => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const items = await userApiActions.getMenuItems()
                dispatch({type: ActionsTypes.GET_MENU_ITEMS, payload: items})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    static getMenuItemTypes: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = () => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const itemTypes = await userApiActions.getMenuItemTypes()
                dispatch({type: ActionsTypes.GET_MENU_ITEM_TYPES, payload: itemTypes})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    static getAboutUsParagraphs: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = () => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const paragraphs = await userApiActions.getAboutUsParagraphs()
                dispatch({type: ActionsTypes.GET_PARAGRAPHS, payload: paragraphs})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    static getAboutUsImages: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = () => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const images = await userApiActions.getAboutUsImages()
                dispatch({type: ActionsTypes.GET_IMAGES, payload: images})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }


    static getAddressSuggestions: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (query: string) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const suggestions = await userApiActions.getAddressSuggestions(query)
                window.console.log(suggestions)
                dispatch(this.setAddressSuggestions(suggestions))
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    static getActiveDiscountAndSet: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = () => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const res = await userApiActions.getActiveDiscount()
                if (res) dispatch(this.setTotalDiscounts([res]))
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    static getActivePromotion: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = () => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const promotion = await userApiActions.getActivePromotion()
                if (promotion) dispatch(this.setActivePromotion(promotion as IPromotion))
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    static initializePayment: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (
        userId: number, 
        phone: string, 
        email: string, 
        name: string, 
        numberOfPeople: number,
        address: string, 
        deliveryRegion: IDeliveryRegion,
        paymentMethod: 'courier' | 'online',
        discounts: IDiscount[],
        currentBasketItems: ICurrentBasketItem[],
        comment?: string) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const res = await userApiActions.initializePayment(userId, phone, email, name, numberOfPeople, address, deliveryRegion, paymentMethod, discounts, currentBasketItems, comment)
                dispatch({type: ActionsTypes.INITIALIZE_PAYMENT})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
                window.location.assign(`${CLIENT_URL}/successful-checkout`)
            }
        }
    }

    static setMenuItemTypesFilter = (filter: number | null): action => ({
        type: ActionsTypes.SET_MENU_ITEM_TYPES_FILTER,
        payload: filter
    })

    static setCurrentBasketItems = (currentBasketItems: ICurrentBasketItem[]): action => {
        localStorage.setItem('currentBasketItems', JSON.stringify(currentBasketItems))
        return {
            type: ActionsTypes.SET_CURRENT_BASKET_ITEMS,
            payload: currentBasketItems
        }
    }

    static setTotalDiscounts = (totalDiscounts: IDiscount[]): action => {
        if ((new Date).getDate() === 20) totalDiscounts.push(DATE20_DISCOUNT)
        return {
            type: ActionsTypes.SET_TOTAL_DISCOUNTS,
            payload: totalDiscounts
        }
    }

    static setActivePromotion = (promotion: IPromotion): action => {
        return {
            type: ActionsTypes.SET_ACTIVE_PROMOTION,
            payload: promotion
        }
    }

    static setAddressSuggestions = (suggestions: IDaDataSuggestion[]): action => {
        return {
            type: ActionsTypes.SET_ADDRESS_SUGGESTIONS,
            payload: suggestions
        }
    }

    static setErrorAction = (error: IServerError | null): action => ({
        type: ActionsTypes.SET_ERROR,
        payload: error   
    })

    static setIsLoadingAction = (isLoading: boolean): action => ({
        type: ActionsTypes.SET_IS_LOADING,
        payload: isLoading
    })
}