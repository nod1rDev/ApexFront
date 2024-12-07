// slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: { open: false, success: false, message: " " },
};

const alertSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openAlert(state, action) {
      state.alert = { open: true, ...action.payload };
    },
    closeAlert(state) {
      state.alert = { open: false, success: false, message: " " };
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;

export default alertSlice.reducer;
