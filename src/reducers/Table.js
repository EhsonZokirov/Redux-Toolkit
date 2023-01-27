import { createSlice } from "@reduxjs/toolkit";

var cnt = 0;
const tableSlice = createSlice({
  name: "table",
  initialState: {
    tr: [],
  },
  reducers: {
    addTr(state, action) {
      //   console.log(state);
      state.tr.push({
        id: cnt++,
        name: action.payload.name,
        course: action.payload.course,
        email: action.payload.email,
      });
    },
    deleteTr(state, action) {
      state.tr = state.tr.filter((e) => e.id !== action.payload);
    },
    allDeteled: (state) => {
      state.tr = [];
    },
    editTr(state, action) {
        state.tr.splice(action.payload.index, 1, action.payload.obj);
      },
  },
});

export const { addTr, deleteTr, allDeteled,editTr } = tableSlice.actions;
export default tableSlice.reducer;
