
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/user-progress-slice"
import challengeReducer from './features/challenge/challenge-slice'
import exitChallengeReducer from './features/modals/exit-challenge-modal'

export const makeStore = () => {
    return configureStore({
        reducer: {
            userProgress: userReducer,
            challengeProgress: challengeReducer,
            exitChallengeModal: exitChallengeReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore["dispatch"]
