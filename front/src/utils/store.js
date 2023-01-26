import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user';
import messageReducer from '../features/message';

export default configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer
  },
})