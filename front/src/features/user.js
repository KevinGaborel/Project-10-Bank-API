import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    createdAt: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    updatedAt: ""
  },
  reducers: {
    add: (state, action) => {
      state.createdAt = action.payload.createdAt;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.id = action.payload.id;
      state.lastName = action.payload.lastName;
      state.updatedAt = action.payload.updatedAt;
    },
    update: (state, action) => {
      state.createdAt = action.payload.createdAt;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    deleteUser: (state) => {
      state = {
        createdAt: "",
        email: "",
        firstName: "",
        id: "",
        lastName: "",
        updatedAt: ""
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, update, deleteUser } = userSlice.actions

export default userSlice.reducer