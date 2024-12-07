"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight } from "lucide-react";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import t from "./utils/language";
import { useDispatch, useSelector } from "react-redux";

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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Landing() {
  const darkMode = useSelector((s) => s.control.darkmode);
  const currentLanguage = useSelector((s) => s.control.language);

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

  const rotatingTexts = [
    "Innovating AI Solutions",
    "Redefining Multilingual Voice Tech",
    "Empowering the Future of AI",
  ];

  const servicesRu = [
    {
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      title: "Автоматизация социальных сетей с AI",
      description:
        "Упростите своё присутствие в соцсетях с помощью умных решений для автоматизации.",
      features: [
        "Оптимизация расписания публикаций",
        "Автоматическое распространение контента",
        "Анализ производительности",
        "Управление несколькими платформами",
      ],
    },
    {
      icon: <Mic className="w-12 h-12 text-blue-500" />,
      title: "Многоязычная запись голоса",
      description:
        "Профессиональные услуги записи голоса на нескольких языках для разных целей.",
      features: [
        "Носители языка",
        "Множество языков",
        "Высококачественное оборудование",
        "Быстрая обработка",
      ],
    },
    {
      icon: <Languages className="w-12 h-12 text-blue-500" />,
      title: "Перевод и локализация",
      description:
        "Точные переводческие услуги с сохранением культурного контекста.",
      features: [
        "Культурная адаптация",
        "Технический перевод",
        "Локализация контента",
        "Обеспечение качества",
      ],
    },
    {
      icon: <PenTool className="w-12 h-12 text-blue-500" />,
      title: "Создание контента",
      description:
        "Увлекательный контент, который найдет отклик у вашей целевой аудитории.",
      features: [
        "Написание сценариев",
        "Блог-посты",
        "Контент для социальных сетей",
        "Техническая документация",
      ],
    },
  ];

  const servicesUz = [
    {
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      title: "AI asosidagi ijtimoiy media avtomatlashtirish",
      description:
        "Ijtimoiy tarmoqlardagi ishtirokingizni aqlli avtomatlashtirish yechimlari bilan soddalashtiring.",
      features: [
        "Optimallashtirilgan post jadvali",
        "Avtomatlashtirilgan kontent tarqatish",
        "Natijalarni tahlil qilish",
        "Ko‘p platformali boshqaruv",
      ],
    },
    {
      icon: <Mic className="w-12 h-12 text-blue-500" />,
      title: "Ko‘p tildagi ovoz yozish",
      description: "Turli sohalar uchun professional ovoz yozish xizmatlari.",
      features: [
        "Ona tilida so‘zlashuvchilar",
        "Bir nechta tillar",
        "Yuqori sifatli uskunalar",
        "Tezkor yetkazib berish",
      ],
    },
    {
      icon: <Languages className="w-12 h-12 text-blue-500" />,
      title: "Tarjima va lokalizatsiya",
      description:
        "Madaniy muvofiqlik va kontekstni saqlagan holda aniq tarjima xizmatlari.",
      features: [
        "Madaniy moslashuv",
        "Texnik tarjima",
        "Kontentni lokalizatsiya qilish",
        "Sifatni ta’minlash",
      ],
    },
    {
      icon: <PenTool className="w-12 h-12 text-blue-500" />,
      title: "Kontent yaratish",
      description:
        "Ma’qsadli auditoriyangizga mos keladigan qiziqarli kontent.",
      features: [
        "Ssenariy yozish",
        "Blog yozuvlari",
        "Ijtimoiy tarmoqlar uchun kontent",
        "Texnik hujjatlar",
      ],
    },
  ];

  const servicesEn = [
    {
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      title: "AI-Powered Social Media Automation",
      description:
        "Streamline your social media presence with our intelligent automation solutions.",
      features: [
        "Optimized posting schedules",
        "Automated content distribution",
        "Performance analytics",
        "Multi-platform management",
      ],
    },
    {
      icon: <Mic className="w-12 h-12 text-blue-500" />,
      title: "Multilingual Voice Recording",
      description:
        "Professional voice recording services in multiple languages for various applications.",
      features: [
        "Native speakers",
        "Multiple languages",
        "High-quality equipment",
        "Quick turnaround",
      ],
    },
    {
      icon: <Languages className="w-12 h-12 text-blue-500" />,
      title: "Translation and Localization",
      description:
        "Accurate translation services that maintain cultural relevance and context.",
      features: [
        "Cultural adaptation",
        "Technical translation",
        "Content localization",
        "Quality assurance",
      ],
    },
    {
      icon: <PenTool className="w-12 h-12 text-blue-500" />,
      title: "Content Creation",
      description: "Engaging content that resonates with your target audience.",
      features: [
        "Scriptwriting",
        "Blog posts",
        "Social media content",
        "Technical documentation",
      ],
    },
  ];

  const commonQuestions = [
    {
      question: "Bu project aniq ishonchlimi?",
      answear: "Albatta, bizning telegram kanalimizdagi gruhda isboti mavjud",
    },
    {
      question: "Bu project aniq ishonchlimi?",
      answear: "Albatta, bizning telegram kanalimizdagi gruhda isboti mavjud",
    },
    {
      question: "Bu project aniq ishonchlimi?",
      answear: "Albatta, bizning telegram kanalimizdagi gruhda isboti mavjud",
    },
    {
      question: "Bu project aniq ishonchlimi?",
      answear: "Albatta, bizning telegram kanalimizdagi gruhda isboti mavjud",
    },
    {
      question: "Bu project aniq ishonchlimi?",
      answear: "Albatta, bizning telegram kanalimizdagi gruhda isboti mavjud",
    },
    {
      question: "Bu project aniq ishonchlimi?",
      answear: "Albatta, bizning telegram kanalimizdagi gruhda isboti mavjud",
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
  const teamMembers = [
    {
      name: "Navruz Muradovich",
      role: "Director of Social Media Strategy",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      exportise:
        "Social media trends, platform algorithms, and engagement tactics",
      responsibility:
        "Developing and executing social media strategies across platforms.",
    },
    {
      exportise: "AI algorithms, machine learning, and data analytics.",
      responsibility:
        "Leading AI initiatives, model development, and performance optimization.",
      name: "Zarina Mamadullayeva",
      role: "Head of AI Development",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Obidkhon Makhamatov",
      role: "Lead Automation Architect",
      image: "https://demo-source.imgix.net/bucket_hat.jpg",
      exportise: "Automation systems, integration, and scalability",
      responsibility: "Designing and maintaining automation infrastructure.",
    },
    {
      exportise:
        "Content strategy, voice talent management, and multilingual communication.",
      responsibility:
        "Overseeing content quality, alignment with brand voice, and talent development.",
      name: "Gulsima Movlonova",
      role: "Chief Content Strategist and Voice Talent Coordinator",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
  ];

  // Slider sozlamalari
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, // Mobil format uchun
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false, // Mobil versiyada autoplay o'chiriladi
        },
      },
    ],
  };
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <div className="fixed top-0 left-0 w-full z-50 bg-opacity-90 bg-white dark:bg-gray-900 shadow">
        <Header />
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
            <div className="hidden md:block">
              <Slider {...sliderSettings}>
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 h-[400px] rounded-lg shadow-md overflow-hidden mb-2.5 last:mb-0"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-gray-400">{member.role}</p>
                      <div className="ml-3">
                        <div className="flex gap-2 mt-2 items-start">
                          <div className="w-[10px] h-[8px] dark:bg-white mt-2 rounded-[999px] bg-black"></div>
                          <span className="text-gray-400">
                            <strong className="text-black dark:text-white mr-1 font-bold">
                              Expertise:
                            </strong>
                            {member.exportise}
                          </span>
                        </div>
                        <div className="flex gap-2 items-start">
                          <div className="w-[10px] h-[8px] dark:bg-white mt-2 rounded-[999px] bg-black"></div>
                          <span className="text-gray-400">
                            <strong className="text-black  dark:text-white mr-1 font-bold">
                              Responsibilities:
                            </strong>
                            {member.responsibility}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Slider>
            </div>
            <div className="grid md:hidden gap-8">
              {teamMembers.map((member, index) => (
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
                    <div className="ml-3">
                      <div className="flex gap-2 mt-2 items-start">
                        <div className="w-[10px] h-[8px] dark:bg-white mt-2 rounded-[999px] bg-black"></div>
                        <span className="text-gray-400">
                          <strong className="text-black  dark:text-white mr-1 font-bold">
                            Expertise:
                          </strong>
                          {member.exportise}
                        </span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <div className="w-[10px] h-[8px] mt-2 rounded-[999px] bg-black dark:bg-white"></div>
                        <span className="text-gray-400">
                          <strong className="text-black  dark:text-white mr-1 font-bold">
                            Responsibilities:
                          </strong>
                          {member.responsibility}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* service Section */}
      <div id="service" className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-center">
            {t[currentLanguage].ourService}
          </h1>

          <div className="grid max-w-[90%] mx-auto md:grid-cols-2 gap-8">
            {currentLanguage == "uz"
              ? servicesUz.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
                  >
                    <div className="mb-6">{service.icon}</div>
                    <h2 className="text-2xl font-semibold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center dark:text-gray-400 text-gray-700"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))
              : currentLanguage == "ru"
              ? servicesRu.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
                  >
                    <div className="mb-6">{service.icon}</div>
                    <h2 className="text-2xl font-semibold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center dark:text-gray-400 text-gray-700"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))
              : servicesEn.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
                  >
                    <div className="mb-6">{service.icon}</div>
                    <h2 className="text-2xl font-semibold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-700 dark:text-gray-400"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
          </div>
        </motion.div>
      </div>

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

          <div className="text-center mt-12">
            <Link href="/projects" className="btn text-white btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/*Common questions */}
      <div
        id="about"
        className="w-full bg-gray-50 dark:bg-gray-950  pt-24 pb-16"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">
          {t[currentLanguage].mostCommonQuestions}
        </h1>
        <div className="max-w-[90%] md:max-w-[65%] mx-auto">
          {commonQuestions.map((common, i) => (
            <div
              key={i}
              className="collapse collapse-arrow bg-white dark:bg-gray-900 text-black dark:text-white"
            >
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                {common.question}
              </div>
              <div className="collapse-content">
                <p>{common.answear}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      <Footer />
    </div>
  );
}

export default Landing;
