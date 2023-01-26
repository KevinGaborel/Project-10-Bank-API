import { createSlice } from '@reduxjs/toolkit'

export const formProfilSlice = createSlice({
  name: 'form',
  initialState: {
    isOpen: false
  },
  reducers: {
    openForm: (state, action) => {
      state.isOpen = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { openForm, deleteMessage } = formProfilSlice.actions

export default formProfilSlice.reducer