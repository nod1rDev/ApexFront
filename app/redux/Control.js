// slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
};

const controlSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDarkModee(state, action) {
      state.darkmode = action.payload;
    },
  },
});

export const { setDarkModee } = controlSlice.actions;

export default controlSlice.reducer;
