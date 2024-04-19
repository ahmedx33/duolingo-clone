
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/user-progress-slice"
import challengeReducer from './features/challenge/challenge-slice'


export const store = configureStore({
    reducer: {
        userProgress: userReducer,
        challengeProgress: challengeReducer
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>