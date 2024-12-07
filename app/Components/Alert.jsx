"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../redux/alerSlice";

function Alert() {
  const alert = useSelector((s) => s.alert.alert);
  const dispatch = useDispatch();
  useEffect(() => {
    if (alert.open) {
      setTimeout(() => {
        dispatch(closeAlert());
      }, 3000);
    }
  }, [alert.open]);
  return (
    <div
      role="alert"
      className={`absolute top-3 md:top-10 max-w-[350px] text-white right-3 md:right-10 ${
        alert.open ? "flex" : "hidden"
      } alert ${alert.success ? "alert-success" : "alert-error"} `}
    >
      {alert.success ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      <span className="text-[14px]">{alert.message}</span>
    </div>
  );
}

export default Alert;
