import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/CounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
