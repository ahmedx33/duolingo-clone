import { UserProgress } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    value: {
        userId: "",
        userName: "",
        userImageSrc: "",
        hearts: 0,
        points: 0,
        activeCourseId: null
    }
}

const initialState: initialState = {
    value: {
        userId: "",
        userName: "",
        userImageSrc: "",
        hearts: 0,
        points: 0,
        activeCourseId: null
    }
}

const userSlice = createSlice({
    name: "userProgress",
    initialState,
    reducers: {
        mainUser: (state, action) => {
            state.value = action.payload
        }
    }
})



export const { mainUser } = userSlice.actions

export default userSlice.reducer