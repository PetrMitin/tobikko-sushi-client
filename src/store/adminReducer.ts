import { Reducer } from 'redux'
import { IAdminState } from '../utils/interfaces'
import { action, ActionsTypes } from './actions'

const initialState: IAdminState = {
    isPageDisabled: false
}

const adminReducer: Reducer<IAdminState | undefined, action | {type: ''}> = (state=initialState, action: action | {type: ''}): IAdminState => {
    switch(action.type) {
        case ActionsTypes.SET_IS_PAGE_DISABLED:
            return {...state, isPageDisabled: action.payload}
        default: 
            return state
    }
}

export default adminReducer