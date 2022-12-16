import { createSlice } from "@reduxjs/toolkit";
export interface TimerSliceState {
  numbers: string[];
}

const initialState: TimerSliceState = {
  numbers: [],
};

export const TimerSlice = createSlice({
  name: `timer`,
  initialState,
  reducers: {
    addTimer: (state, action) => {
      state.numbers = action.payload;
    },
  },
});

export const { addTimer } = TimerSlice.actions;
export default TimerSlice.reducer;
