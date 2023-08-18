import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import articleReducer from '../reducers/articleReducer';
export const store = configureStore({
  reducer: { user: userReducer, article: articleReducer },
});
