import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../reducers";

export const store = configureStore({
  reducer: {
    dataSlice,
  },
});
