import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const linksLeft = [
    t("footer.links.about"),
    t("footer.links.services"),
    t("footer.links.case"),
    t("footer.links.contact"),
  ];

  const linksRight = [
    t("footer.links.privacy"),
    t("footer.links.terms"),
    t("footer.links.support"),
    t("footer.links.faq"),
  ];

  return (
    <footer className="bg-white pt-24 pb-10 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* LOGO + SOCIAL */}
          <div data-aos="fade-up">
            <h1 className="text-2xl font-bold mb-4">Omega</h1>
            <p className="text-gray-600 mb-6 max-w-sm">
              {t("footer.description")}
            </p>

            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white transition">
                <FaFacebookF />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-400 hover:text-white transition">
                <FaTwitter />
              </a>

              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white transition">
                <FaInstagram />
              </a>

              <a href="https://t.me/FX1_09" target="_blank" rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition">
                <FaTelegramPlane />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-xl font-semibold mb-6">
              {t("footer.quickLinks")}
            </h3>

            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <ul className="space-y-3">
                {linksLeft.map((item, i) => (
                  <li key={i} className="hover:text-blue-500 cursor-pointer transition">
                    ▪ {item}
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {linksRight.map((item, i) => (
                  <li key={i} className="hover:text-blue-500 cursor-pointer transition">
                    ▪ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-6">
              {t("footer.contactTitle")}
            </h3>

            <p className="text-gray-600 mb-6">
              {t("footer.contactDesc")}
            </p>

            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-medium text-gray-900">
                  {t("footer.phone")}:
                </span>{" "}
                <a href="tel:+998881121307" className="text-blue-500 hover:underline">
                  +998 88 112 13 07
                </a>
              </li>

              <li>
                <span className="font-medium text-gray-900">
                  {t("footer.email")}:
                </span>{" "}
                <a href="mailto:xatamovafarzona@gmail.com"
                  className="text-blue-500 hover:underline">
                  xatamovafarzona@gmail.com
                </a>
              </li>

              <li>
                <span className="font-medium text-gray-900">
                  {t("footer.address")}:
                </span>{" "}
                <a href="https://google.com" target="_blank" rel="noreferrer"
                  className="text-blue-500 hover:underline">
                  Toshkent, Xadra
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-20 text-center text-gray-500 text-sm border-t pt-8"
        >
          © {new Date().getFullYear()} Propartnyor JS. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
