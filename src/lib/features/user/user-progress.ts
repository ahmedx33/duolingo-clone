import { UserProgress } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";



const initialState: UserProgress = {
    userId: "",
    userName: "",
    userImageSrc: "",
    hearts: 0,
    points: 0,
    activeCourseId: null
}

const userSlice = createSlice({
    name: "userProgress",
    initialState,
    reducers: {
        mainUser: (state, action) => {
            state = action.payload
        }
    }
})



export const { mainUser } = userSlice.actions

export default userSlice.reducer