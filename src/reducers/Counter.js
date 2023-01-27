import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    num: 0,
  },
  reducers: {
    inc(state) {
      state.value += 1;
    },
    reset(state) {
      state.value = 0;
    },
    dec(state) {
      state.value -= 1;
    },
    hadleChange(state, action) {
      state.num += action.payload;
    },

    incByNum(state) {
      state.value += state.num;
    },
    decByNum(state) {
      state.value -= state.num;
    },
  },
});

export const { inc, dec, incByNum, reset, hadleChange, decByNum } =
  slice.actions;

export default slice.reducer;
