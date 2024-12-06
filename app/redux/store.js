// store.js
import { configureStore } from "@reduxjs/toolkit";
import controlSlice from "./Control";
export const store = configureStore({
  reducer: {
    control: controlSlice,
  },
});

export default store;
