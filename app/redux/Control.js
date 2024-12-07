// slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
  language: "uz",
};

const controlSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDarkMode(state, action) {
      state.darkmode = action.payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
  },
});

export const { setDarkMode, setLanguage } = controlSlice.actions;

export default controlSlice.reducer;
