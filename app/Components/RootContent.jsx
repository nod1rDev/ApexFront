"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Alert from "./Alert";

function RootContent({ children }) {
  const darkMode = useSelector((s) => s.control.darkmode);
  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <Alert />
      {children}
    </>
  );
}

export default RootContent;
