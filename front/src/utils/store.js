import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user';
import messageReducer from '../features/message';
import formReducer from '../features/formProfil';

export default configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    form: formReducer
  },
})