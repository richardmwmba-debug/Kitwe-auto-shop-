import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import productsReducer from './redux/productsSlice';
import salesReducer from './redux/salesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    sales: salesReducer,
  },
});
