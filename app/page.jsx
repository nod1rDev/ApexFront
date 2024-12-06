"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight } from "lucide-react";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import t from "./utils/language";
import { useDispatch } from "react-redux";
import { setDarkModee } from "./redux/Control";
import { motion } from "framer-motion";
import { AnimatedText } from "./shared/AnimatedText";
import { RotatingText } from "./shared/RotatingText";
import Link from "next/link";
import {
  Bot,
  Mic,
  Languages,
  Clock,
  Mail,
  MapPin,
  Phone,
  PenTool,
} from "lucide-react";

function Landing() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("uz");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const rotatingTexts = [
    "Innovating AI Solutions",
    "Redefining Multilingual Voice Tech",
    "Empowering the Future of AI",
  ];
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      key: "address",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      key: "email",
      href: "mailto:contact@apexbart.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      key: "phone",
      href: "tel:+855123456789",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      key: "hours",
    },
  ];
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Automation",
      description: "Streamline your processes with cutting-edge AI solutions",
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Recording",
      description: "Professional multilingual voice recording services",
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Translation",
      description: "Accurate translation and localization services",
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Creation",
      description: "Engaging content that resonates with your audience",
    },
  ];

  const projects = [
    {
      title: "Khmer Voice Recording",
      description: "900+ voice recordings for AI training",
      image:
        "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Russian Voice Collection",
      description: "1,200 sentences across various dialects",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AI Social Media Manager",
      description: "Automated content distribution system",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];
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
      <div id="hero" className="   relative min-h-screen flex items-center">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        {/* Content */}
        <div className="container max-w-[90%] mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <AnimatedText
              text="ApexBart Solutions"
              className="text-5xl font-bold mb-4"
            />
            <RotatingText
              texts={rotatingTexts}
              className="text-2xl font-medium text-blue-300 mb-6"
            />
            <AnimatedText
              text="Transform your digital communication with our cutting-edge AI solutions and professional voice recording services."
              className="text-xl mb-8 text-gray-200 block"
              delay={0.2}
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink
                to="service"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn text-white btn-primary"
              >
                {t[currentLanguage].exploreServices}
                <ArrowRight className="ml-2 h-5 w-5" />
              </ScrollLink>

              <Link
                href="/login"
                className="btn text-white btn-secondary inline-flex items-center justify-center"
              >
                {t[currentLanguage].getStarted}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className=" max-w-[90%] mx-auto pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">About ApexBart Solutions</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {t[currentLanguage].ourStory}
              </h2>
              <p className="text-gray-400 mb-6">{t[currentLanguage].about1}</p>
              <p className="text-gray-400">{t[currentLanguage].about2}</p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8">
              {t[currentLanguage].ourTeam}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Shakhzod Tursunov",
                  role: "Founder & CEO",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Kami",
                  role: "Project Manager & Chief Content Strategist",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Gulsima",
                  role: "Recruitment Specialist & Translator",
                  image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* service Section */}
      <section id="service" className="   py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t[currentLanguage].ourService}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t[currentLanguage].offer}
            </p>
          </motion.div>

          <div className="max-w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-blue-500 hover:text-blue-600">
                  Learn more →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-[90%] mx-auto py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {" "}
              {t[currentLanguage].featureProjects}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t[currentLanguage].projectDiskription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="text-blue-500 hover:text-blue-600">
                    View details →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* contact us */}
      <div id="contact" className="max-w-[90%] mx-auto pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h3 className="font-medium">{t[currentLanguage].email}</h3>
                    <p className="text-gray-400">
                      {t[currentLanguage].emailText}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h3 className="font-medium">{t[currentLanguage].phone}</h3>
                    <p className="text-gray-400">
                      {t[currentLanguage].phoneText}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h3 className="font-medium">
                      {t[currentLanguage].location}
                    </h3>
                    <p className="text-gray-400">
                      {t[currentLanguage].locationText}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block dark:text-gray-400 text-sm font-medium text-gray-700"
                  >
                    {t[currentLanguage].name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input dark:bg-slate-300 dark:text-black input-bordered bg-white border border-gray-300 mt-2 min-w-full max-w-xs"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block dark:text-gray-400 text-sm font-medium text-gray-700"
                  >
                    {t[currentLanguage].email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered dark:text-black dark:bg-slate-300 bg-white border border-gray-300 mt-2 min-w-full max-w-xs"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block dark:text-gray-400 text-sm font-medium text-gray-700"
                  >
                    {t[currentLanguage].subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input input-bordered dark:text-black dark:bg-slate-300 bg-white border border-gray-300 mt-2 min-w-full max-w-xs"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    {t[currentLanguage].message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="textarea dark:bg-slate-300 dark:text-black textarea-bordered bg-white mt-2 border border-gray-300 min-w-full"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn text-white btn-primary"
                >
                  {t[currentLanguage].sendMessage}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer currentLanguage={currentLanguage} t={t} />
    </div>
  );
}

export default Landing;
