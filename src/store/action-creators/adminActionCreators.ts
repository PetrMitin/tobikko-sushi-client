import { ActionCreator } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import adminActions from "../../actions/adminActions"
import { DATE20_DISCOUNT } from "../../utils/consts/apiConsts"
import { IDiscount, IMenuItemData, IPromotion } from "../../utils/interfaces/apiInterfaces"
import { action, ActionsTypes } from "../actions"
import { RootState } from "../store"
import { UserActionCreators } from "./userActionCreators"

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

    static createNewType: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (name: string, icon: File) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                window.alert(name + icon + ' action creator')
                const res = await adminActions.createNewType(name, icon)
                window.alert(res)
                dispatch({type: ActionsTypes.CREATE_NEW_TYPE})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static updateType: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (id: number, name?: string, icon?: File) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.updateType(id, name, icon)
                console.log(res);
                dispatch({type: ActionsTypes.UPDATE_TYPE})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static deleteType: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (id: number) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.deleteType(id)
                console.log(res);
                dispatch({type: ActionsTypes.DELETE_TYPE})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static createNewMenuItem: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (newMenuItem: IMenuItemData) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.createNewMenuItem(newMenuItem)
                console.log(res);
                dispatch({type: ActionsTypes.CREATE_NEW_MENU_ITEM})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static updateMenuItem: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (id: number, newMenuItem: IMenuItemData) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.updateMenuItem(id, newMenuItem)
                console.log(res);
                dispatch({type: ActionsTypes.UPDATE_MENU_ITEM})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static incrementMenuItem: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (id: number) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.incrementMenuItem(id)
                console.log(res);
                dispatch({type: ActionsTypes.INCREMENT_MENU_ITEM})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static decrementMenuItem: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (id: number) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.decrementMenuItem(id)
                console.log(res);
                dispatch({type: ActionsTypes.DECREMENT_MENU_ITEM})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }


    static deleteMenuItem: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (id: number) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.deleteMenuItem(id)
                console.log(res);
                dispatch({type: ActionsTypes.DELETE_MENU_ITEM})
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static createNewAboutUsParagraph: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (text: string) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.createNewAboutUsParagraph(text)
                console.log(res);
                dispatch({type: ActionsTypes.CREATE_NEW_PARAGRAPH})
                dispatch(UserActionCreators.getAboutUsParagraphs())
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static updateAboutUsParagraph: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (id:number, text: string) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.updateAboutUsParagraph(id, text)
                console.log(res);
                dispatch({type: ActionsTypes.UPDATE_PARAGRAPH})
                dispatch(UserActionCreators.getAboutUsParagraphs())
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static deleteAboutUsParagraph: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (id: number) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.deleteAboutUsParagraph(id)
                console.log(res);
                dispatch({type: ActionsTypes.DELETE_PARAGRAPH})
                dispatch(UserActionCreators.getAboutUsParagraphs())
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static incrementAboutUsParagraph: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (id: number) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.incrementAboutUsParagraph(id)
                console.log(res);
                dispatch({type: ActionsTypes.INCREMENT_PARAGRAPH})
                dispatch(UserActionCreators.getAboutUsParagraphs())
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static decrementAboutUsParagraph: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (id: number) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.decrementAboutUsParagraph(id)
                console.log(res);
                dispatch({type: ActionsTypes.DECREMENT_PARAGRAPH})
                dispatch(UserActionCreators.getAboutUsParagraphs())
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static addAboutUsImage: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (imgData: FormData) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.addAboutUsImage(imgData)
                console.log(res);
                dispatch({type: ActionsTypes.ADD_IMAGE})
                dispatch(UserActionCreators.getAboutUsImages())
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static deleteAboutUsImage: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (id: number) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.deleteAboutUsImage(id)
                console.log(res)
                dispatch({type: ActionsTypes.DELETE_IMAGE})
                dispatch(UserActionCreators.getAboutUsImages())
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    

    static setActiveDiscount: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (discount: IDiscount) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.setActiveDiscount(discount)
                if (res) dispatch(UserActionCreators.setTotalDiscounts([res]))
                dispatch(UserActionCreators.setErrorAction(null))
            } catch(e: any) {
                if (e instanceof Error) dispatch(UserActionCreators.setErrorAction({message: e.message}))
            } finally {
                dispatch(UserActionCreators.setIsLoadingAction(false))
            }
        }
    }

    static setActivePromotion: ActionCreator<
    ThunkAction<Promise<void>, RootState, void, action>> = (promotion: IPromotion) => {
        return async (dispatch: ThunkDispatch<RootState, void, action>): Promise<void> => {
            try {
                dispatch(UserActionCreators.setIsLoadingAction(true))
                const res = await adminActions.setActivePromotion(promotion)
                if (res) dispatch(UserActionCreators.setActivePromotion(promotion as IPromotion))
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