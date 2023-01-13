import { configureStore } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit'
 
export const toggleTheme = createAction('theme/toggle');

export const store = configureStore({
  reducer: {
    //counter: counterReducer,
  },
});