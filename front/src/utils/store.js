import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user';
import messageReducer from '../features/message';
import formReducer from '../features/formProfil';
import tokenReducer from '../features/token';

export default configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    form: formReducer,
    token: tokenReducer
  },
})