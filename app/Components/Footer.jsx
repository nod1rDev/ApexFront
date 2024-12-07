"use client"
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Link as ScrollLink } from "react-scroll";
import t from "../utils/language";

const Footer = () => {

  const currentLanguage = useSelector((s) => s.control.language);
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container max-w-[80%] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ApexBart Solutions</h3>
            <p className="text-gray-400">
              {t[currentLanguage].hero_subtitle}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t[currentLanguage].service}</h4>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {t[currentLanguage].home}
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="service"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {t[currentLanguage].service}
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {t[currentLanguage].projects}
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {t[currentLanguage].contact_us}
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t[currentLanguage].service}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">{t[currentLanguage].service_1}</Link>
              </li>
              <li>
                <Link href="/">{t[currentLanguage].service_2}</Link>
              </li>
              <li>
                <Link href="/">{t[currentLanguage].service_3}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t[currentLanguage].contact_us}</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com/apexbart"
                className="hover:text-blue-400"
              >
                <Facebook />
              </a>
              <a
                href="https://instagram.com/apexbart"
                className="hover:text-pink-400"
              >
                <Instagram />
              </a>
              <a
                href="https://twitter.com/ApexBart"
                className="hover:text-blue-300"
              >
                <Twitter />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              {t[currentLanguage].email}: contact@apexbart.xyz
              <br />
              {t[currentLanguage].location}: Phnom Penh, Cambodia
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ApexBart Solutions. {t[currentLanguage].rights_reserved}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
