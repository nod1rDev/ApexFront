import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { Link as ScrollLink } from "react-scroll"; // react-scroll kutubxonasidan ScrollLink
import Link from "next/link";

export function Header({
  currentLanguage,
  setCurrentLanguage,
  darkMode,
  setDarkMode,
  t,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setIsDropdownOpen(false);
    setIsMenuOpen(false); // Close the menu when a language is selected
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`w-full ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } shadow-xl`}
    >
      <div className="max-w-[95%] md:max-w-[85%] mx-auto py-4 flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center space-x-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#3B82F6" />
              <path d="M2 23L16 30L30 23V9L16 16L2 9V23Z" fill="#2563EB" />
            </svg>
            <span className="text-xl font-bold dark:text-white text-gray-900">ApexBart</span>
          </div>
        </Link>

        <div className="flex items-center gap-6 md:gap-4">
          {/* Desktop Menu */}
          <motion.div
            className=" gap-6 items-center hidden  md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 cursor-pointer"
            >
              {t[currentLanguage].home}
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 cursor-pointer"
            >
              {t[currentLanguage].about_us}
            </ScrollLink>
            <ScrollLink
              to="service"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 cursor-pointer"
            >
              {t[currentLanguage].service}
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 cursor-pointer"
            >
              {t[currentLanguage].projects}
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 cursor-pointer"
            >
              {t[currentLanguage].contact_us}
            </ScrollLink>
          </motion.div>

          {/* Language Switch */}
          <div className="relative hidden md:block">
            <motion.div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-transparent text-black dark:text-white border-none px-3 py-1 rounded-md cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">
                <img
                  src={`/${currentLanguage}.png`}
                  alt={currentLanguage}
                  className="w-5 h-5 inline-block"
                />
              </span>
              {currentLanguage.toUpperCase()}
            </motion.div>

            {isDropdownOpen && (
              <motion.ul
                className="absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-lg mt-2 rounded-md z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {["uz", "ru", "en"].map((lang) => (
                  <motion.li
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={`/${lang}.png`}
                      alt={lang}
                      className="w-5 h-5 inline-block"
                    />
                    {lang.toUpperCase()}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="text-black dark:text-white px-3 py-2 rounded-md flex items-center"
            whileTap={{ scale: 0.95 }}
          >
            {darkMode ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
          </motion.button>

          {/* Sign In & Sign Up buttons */}
          <div className=" gap-4 hidden md:flex">
            <Link href="/login">
              <motion.button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
              >
                Sign In
              </motion.button>
            </Link>
            <Link href="/signUp">
              <motion.button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                whileHover={{ scale: 1.05 }}
              >
                Sign Up
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className=" block md:hidden">
            <motion.button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-black dark:text-white px-3 py-2 rounded-md"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-white dark:bg-gray-800 p-4 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            {/* Linklarni bosganda menyuni yopish */}
            <ScrollLink
              to="hero"
              onClick={() => setIsMenuOpen(false)}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 cursor-pointer"
            >
              {t[currentLanguage].home}
            </ScrollLink>
            <ScrollLink
              to="about"
              onClick={() => setIsMenuOpen(false)}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 cursor-pointer"
            >
              {t[currentLanguage].about_us}
            </ScrollLink>
            <ScrollLink
              to="service"
              onClick={() => setIsMenuOpen(false)}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 cursor-pointer"
            >
              {t[currentLanguage].service}
            </ScrollLink>
            <ScrollLink
              to="projects"
              onClick={() => setIsMenuOpen(false)}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 cursor-pointer"
            >
              {t[currentLanguage].projects}
            </ScrollLink>
            <ScrollLink
              to="contact"
              onClick={() => setIsMenuOpen(false)}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue-500 cursor-pointer"
            >
              {t[currentLanguage].contact_us}
            </ScrollLink>

            {/* Tilni tanlash uchun dropdown */}
            <div className="relative">
              <motion.div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-transparent text-black dark:text-white border-none px-3 py-1 rounded-md cursor-pointer"
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">
                  <img
                    src={`/${currentLanguage}.png`}
                    alt={currentLanguage}
                    className="w-5 h-5 inline-block"
                  />
                </span>
                {currentLanguage.toUpperCase()}
              </motion.div>

              {isDropdownOpen && (
                <motion.ul
                  className="absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-lg mt-2 rounded-md z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {["uz", "ru", "en"].map((lang) => (
                    <motion.li
                      key={lang}
                      onClick={() => {
                        changeLanguage(lang);
                        setIsMenuOpen(false); // Menyu yopilsin
                      }}
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={`/${lang}.png`}
                        alt={lang}
                        className="w-5 h-5 inline-block"
                      />
                      {lang.toUpperCase()}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>

            {/* Sign In va Sign Up tugmalari */}
            <Link href="/login">
              <motion.button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </motion.button>
            </Link>
            <Link href="/signUp">
              <motion.button
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600"
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
