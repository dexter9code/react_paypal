import { createSlice } from "@reduxjs/toolkit";

type AllFormData = {
  phoneNumber: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const initialState: AllFormData = {
  confirmPassword: "",
  password: "",
  phoneNumber: "",
  username: "",
};

export const signupSlice = createSlice({
  name: `signup`,
  initialState,
  reducers: {
    addPhone(state, action) {
      state.phoneNumber = action.payload;
    },
    addUserName(state, action) {
      state.username = action.payload;
    },
    addPassword(state, action) {
      state.password = action.payload;
    },
    addConfirmPassword(state, action) {
      state.confirmPassword = action.payload;
    },
  },
});

export const { addConfirmPassword, addPassword, addPhone, addUserName } =
  signupSlice.actions;

export default signupSlice.reducer;
