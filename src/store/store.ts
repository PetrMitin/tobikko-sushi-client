import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
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
export type AppDispatch = typeof store.dispatch