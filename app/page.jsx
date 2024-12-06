"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import t from "./utils/language";
import { useDispatch } from "react-redux";
import { setDarkModee } from "./redux/Control";
import Image from "next/image";

function Landing() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("uz");
  const dispatch = useDispatch();

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const savedLanguage = localStorage.getItem("language");
    if (savedMode) setDarkMode(JSON.parse(savedMode));
    if (savedLanguage) setCurrentLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("language", currentLanguage);
    document.documentElement.classList.toggle("dark", darkMode);
    dispatch(setDarkModee(darkMode));
  }, [darkMode, currentLanguage, dispatch]);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <div className="fixed top-0 left-0 w-full z-50 bg-opacity-90 bg-white dark:bg-gray-900 shadow">
        <Header
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          t={t}
        />
      </div>

      {/* Hero Section */}
      <div
        id="hero"
        className="hero min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl font-extrabold text-white leading-snug mb-5">
              ApexBrat Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t[currentLanguage].hero}
            </p>
            <div className="flex justify-center gap-4">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn text-white btn-primary px-6 py-3 text-lg font-semibold"
              >
                {t[currentLanguage].about_us}
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn btn-outline btn-secondary px-6 py-3 text-lg text-white font-semibold"
              >
                {t[currentLanguage].projects}
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t[currentLanguage].about_us}
          </h2>
          <p className="text-lg mb-6 max-w-[70%] text-center mx-auto">
            {t[currentLanguage].about_intro}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/about.jpg"
              alt={t[currentLanguage].about_us_alt}
              className="rounded-lg shadow-lg mx-auto"
              width={400}
              height={300}
            />
            <div>
              <p className="text-lg">{t[currentLanguage].about_detail}</p>
              <ul className="list-disc list-inside mt-4 text-left">
                <li>{t[currentLanguage].service_1}</li>
                <li>{t[currentLanguage].service_2}</li>
                <li>{t[currentLanguage].service_3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 bg-gray-100 dark:bg-gray-900"
      >
        <h2 className="text-center text-3xl font-bold mb-6">
          {t[currentLanguage].projects}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Example Project */}
          {[
            { title: "Telegram bot", img: "bot-telega.jpg" },
            { title: "Telegram AI bot", img: "ai-bot.jpg" },
            { title: "Telegram chat bot", img: "chat-bot.jpg" },
          ].map((project, idx) => (
            <div
              key={idx}
              className="bg-white p-6 cursor-pointer rounded-lg dark:bg-gray-800 shadow-lg"
            >
              <Image
                src={`/${project.img}`}
                alt={project.title}
                width={400}
                height={200}
                className="rounded"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm">
                Loyihaning qisqacha ta&apos;riflari o&apos;z ichiga olgan.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer currentLanguage={currentLanguage} t={t} />
    </div>
  );
}

export default Landing;
