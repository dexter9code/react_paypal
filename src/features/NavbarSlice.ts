import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NavbarState {
  isShown: boolean;
  isBusinessShown: boolean;
  isPartnersShown: boolean;
  isUsefulInfoShown: boolean;
}

enum ChooseNavbar {
  shown,
  business,
  partner,
  info,
}

const initialState: NavbarState = {
  isShown: false,
  isBusinessShown: false,
  isPartnersShown: false,
  isUsefulInfoShown: false,
};

export const NavbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    activeShown: (state, action) => {
      if (action.payload === "shown") {
        state.isShown = true;
      } else if (action.payload === "business") {
        state.isBusinessShown = true;
      } else if (action.payload === "info") {
        state.isUsefulInfoShown = true;
      }
    },
    closeShown: (state, action) => {
      if (action.payload === "shown") {
        state.isShown = false;
      } else if (action.payload === "business") {
        state.isBusinessShown = false;
      } else if (action.payload === "info") {
        state.isUsefulInfoShown = false;
      }
    },
  },
});

export const { activeShown, closeShown } = NavbarSlice.actions;

export default NavbarSlice.reducer;
