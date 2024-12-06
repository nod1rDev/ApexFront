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
    setDarkModee(state, action) {
      state.darkmode = action.payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
  },
});

export const { setDarkModee } = controlSlice.actions;

export default controlSlice.reducer;
