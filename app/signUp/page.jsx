"use client";

import React, { useEffect, useState } from "react";
import t from "../utils/language";
import Link from "next/link";
import { useSelector } from "react-redux";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("uz");
  const darkMode = useSelector((s) => s.control.darkmode);
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) setCurrentLanguage(savedLanguage);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("https://apexbrat1.onrender.com/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || t[currentLanguage].error);
      }

      setSuccess(t[currentLanguage].success);
    } catch (err) {
      setError(err.message || t[currentLanguage].error);
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 justify-center  ">
      <div className="w-[50%] h-[100vh] hidden md:block">
        <img
          className="w-full h-full object-cover"
          src="https://www.unite.ai/wp-content/uploads/2023/08/Alex_Mc_Website_building._technology._futuristic._f454efd7-0cc8-4dc2-98b6-1f71c9128d75.jpg"
          alt="Login background"
        />
      </div>
      <div className="w-full md:w-[50%] flex justify-center items-center">
        <div className="w-[390px] p-8 rounded-lg    mx-auto flex flex-col gap-10">
          <img
            src="/favicon.png"
            className="w-[90px] mx-auto h-[90px] rounded-full"
            alt="Logo"
          />
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
            {t[currentLanguage].signUp}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">
                  {t[currentLanguage].username}
                </span>
              </label>
              <input
                type="text"
                placeholder={t[currentLanguage].username}
                className="input input-bordered w-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">
                  {t[currentLanguage].password}
                </span>
              </label>
              <input
                type="password"
                placeholder={t[currentLanguage].password}
                className="input input-bordered w-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              {t[currentLanguage].login_button}
            </button>
          </form>
          <Link href={"/login"} className="link -mt-4 link-info text-[12px]">
            {t[currentLanguage].loginSentences}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
