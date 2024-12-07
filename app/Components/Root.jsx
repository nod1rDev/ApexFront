"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Alert from "./Alert";

function Root({ children }) {

  
  return (
    <Provider store={store}>
      <>
        <Alert />
        {children}
      </>
    </Provider>
  );
}

export default Root;
