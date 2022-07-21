import { Reducer } from 'redux'
import { IAdminState, IAdminData } from '../utils/interfaces/reduxInterfaces'
import { action, ActionsTypes } from './actions'

const initialState: IAdminState = {
    isPageDisabled: true,
    isLoggedIn: false,
    adminData: {} as IAdminData
}

const adminReducer: Reducer<IAdminState | undefined, action | {type: ''}> = (state=initialState, action: action | {type: ''}): IAdminState => {
    switch(action.type) {
        case ActionsTypes.AUTHORIZE_ADMIN:
            return {...state, isLoggedIn: true, adminData: action.payload.user}
        case ActionsTypes.LOGOUT_ADMIN:
            return {...state, isLoggedIn: false, adminData: {} as IAdminData}
        case ActionsTypes.SET_IS_PAGE_DISABLED:
            return {...state, isPageDisabled: action.payload}
        default: 
            return state
    }
}

export default adminReducer