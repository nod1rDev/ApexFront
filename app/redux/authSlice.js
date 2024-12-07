import { createSlice } from "@reduxjs/toolkit";

// Function to check if we are on the client-side
const isClient = typeof window !== "undefined";

const initialState = {
  user: isClient
    ? localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { ok: false, username: "", password: "", token: "" }
    : { ok: false, username: "", password: "", token: "" }, // Default when SSR
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
      // Optionally, update sessionStorage if needed
      if (isClient) {
        sessionStorage.setItem("user", JSON.stringify(payload));
      }
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
