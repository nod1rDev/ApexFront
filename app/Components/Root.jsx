"use client"
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

function Root({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Root;
