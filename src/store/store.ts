import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/NavbarSlice";
import timerReducer from "../features/TimerSlice";
import singupReducer from "../features/SignupSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    timer: timerReducer,
    singup: singupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
