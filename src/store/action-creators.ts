import { RootState } from "./store";
import { action, ActionsTypes } from "./actions";
import userApiActions from "../actions/userActions";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ActionCreator } from "redux";
import adminActions from "../actions/adminActions";
import { IServerError } from "../utils/interfaces/apiInterfaces";
import { ICurrentBasketItem } from "../utils/interfaces/dbInterfaces";

export class AdminActionCreators {
    static loginAdmin: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (email: string, password: string) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                // console.log(email, password);
                const res = await adminActions.login(email, password)
                // console.log(res);
                localStorage.setItem('accessToken', res.accessToken)
                dispatch({type: ActionsTypes.AUTHORIZE_ADMIN, payload: res})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static registrateAdmin: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (email: string, password: string) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.registration(email, password)
                // console.log(res);
                localStorage.setItem('accessToken', res.accessToken)
                dispatch({type: ActionsTypes.AUTHORIZE_ADMIN, payload: res})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static logoutAdmin: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = () => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.logout()
                localStorage.removeItem('accessToken')
                dispatch({type: ActionsTypes.LOGOUT_ADMIN})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static checkAuthAdmin: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = () => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.checkAuth()
                // console.log(res);
                localStorage.setItem('accessToken', res.accessToken)
                dispatch({type: ActionsTypes.AUTHORIZE_ADMIN, payload: res})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static setIsPageDisabled = (isPageDisabled: boolean): action => ({
        type: ActionsTypes.SET_IS_PAGE_DISABLED,
        payload: isPageDisabled
    })
}

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

    static setMenuItemTypesFilter = (filter: number | null): action => ({
        type: ActionsTypes.SET_MENU_ITEM_TYPES_FILTER,
        payload: filter
    })

    static setCurrentBasketItems = (currentBasketItems: ICurrentBasketItem[]): action => ({
        type: ActionsTypes.SET_CURRENT_BASKET_ITEMS,
        payload: currentBasketItems
    })

    static setErrorAction = (error: IServerError | null): action => ({
        type: ActionsTypes.SET_ERROR,
        payload: error   
    })

    static setIsLoadingAction = (isLoading: boolean): action => ({
        type: ActionsTypes.SET_IS_LOADING,
        payload: isLoading
    })
}