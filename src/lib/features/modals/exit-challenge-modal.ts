import { createSlice } from "@reduxjs/toolkit"


const exitChallengeModal = createSlice({
    name: "exitChallengeModal",
    initialState: {
        isOpen: false
    },
    reducers: {
      onOpen: (state) => {
        state.isOpen = true
      },

      onClose: (state) => {
        state.isOpen = false
      }
    }
})



export const { onClose, onOpen } = exitChallengeModal.actions

export default exitChallengeModal.reducer