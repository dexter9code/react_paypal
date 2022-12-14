import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/NavbarSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;