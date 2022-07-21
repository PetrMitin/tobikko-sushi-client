import {configureStore} from '@reduxjs/toolkit'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { action } from './actions'
import adminReducer from './adminReducer'
import userReducer from './userReducer'

export const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer
    },
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, void, action>