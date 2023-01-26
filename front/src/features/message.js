import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    value: "",
    style: ""
  },
  reducers: {
    createMessage: (state, action) => {
      state.value = action.payload.value;
      state.style = action.payload.style;
    },
    deleteMessage: (state) => {
      state.value = "";
    },
  },
})

// Action creators are generated for each case reducer function
export const { createMessage, deleteMessage } = messageSlice.actions

export default messageSlice.reducer