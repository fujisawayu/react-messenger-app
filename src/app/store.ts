import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: userReducer,
});

export type AppDispath = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
