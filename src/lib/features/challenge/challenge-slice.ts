import { Challenge } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";



interface ChallengeProps {
    value: {

        challengeId: string;
    }
}

const initialState:ChallengeProps  = {
    value: {
        challengeId: ""
    }
   
}

const challengeSlice = createSlice({
    name: "challenge-progress-slice",
    initialState,
    reducers: {
        setChallengeId: (state, action) => {
            state.value.challengeId = action.payload
        },
    }
})


export const { setChallengeId } = challengeSlice.actions


export default challengeSlice.reducer