// store.js
import { configureStore } from "@reduxjs/toolkit";
import controlSlice from "./Control";
import alerSlice from "./alerSlice";
import authSlice from "./authSlice";
export const store = configureStore({
  reducer: {
    control: controlSlice,
    alert: alerSlice,
    auth: authSlice
  },
});

export default store;
