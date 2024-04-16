
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/user-progress-slice"


export const store = configureStore({
    reducer: {
        userProgress: userReducer
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>