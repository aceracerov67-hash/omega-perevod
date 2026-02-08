import React, { useEffect, useState } from "react";
import img from "../Header/img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // 🔥 SENING ESKI AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t("header.demos"), link: "#Demos" },
    { name: t("header.pages"), link: "#Pages" },
    { name: t("header.support"), link: "#Support" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 bg-violet-600 shadow-sm"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO */}
            <h1 className="text-3xl font-bold text-white cursor-pointer hover:scale-105 transition-transform">
              Omega
            </h1>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-10 font-medium text-white">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  data-aos="fade-down"
                  data-aos-delay={index * 100}
                  className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}

              {/* LANGUAGE SWITCHER */}
              <div className="flex items-center bg-white/20 rounded-full p-1 ml-6">
                {["uz", "ru", "en"].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={`px-3 py-1 text-sm rounded-full transition ${
                      i18n.language === lng
                        ? "bg-white text-violet-700 font-semibold"
                        : "text-white hover:bg-white/30"
                    }`}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                data-aos="zoom-in"
                data-aos-delay="400"
                className="bg-pink-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-pink-700 transition shadow-md active:scale-90"
              >
                {t("header.getStarted")}
              </button>
            </ul>

            {/* BURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1.5 z-50"
            >
              <span className={`w-6 h-0.5 bg-white transition ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-white transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            data-aos="fade-down"
            className="md:hidden bg-violet-700 text-white absolute w-full left-0 top-20 shadow-lg"
          >
            <ul className="flex flex-col items-center gap-6 py-8 font-medium">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:text-pink-200"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}

              {/* Mobile Language */}
              <div className="flex gap-2">
                {["uz", "ru", "en"].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className="bg-white/20 px-3 py-1 rounded-full"
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setOpen(false)}
                className="bg-pink-600 px-8 py-3 rounded-full font-medium hover:bg-pink-700 transition"
              >
                {t("header.getStarted")}
              </button>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <div
        id="Demos"
        className="bg-gradient-to-r from-violet-600 to-pink-600 text-white overflow-hidden scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                {t("hero1.title")} <br />
                <span className="text-pink-200">
                  {t("hero1.highlight")}
                </span>
              </h1>

              <p
                className="text-lg text-white/90 mb-8 max-w-xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {t("hero1.description")}
              </p>

              <div
                className="flex flex-col sm:flex-row items-center gap-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <button className="bg-white text-violet-700 px-8 py-4 rounded-full font-semibold hover:bg-violet-50 transition shadow-lg active:scale-95">
                  {t("hero1.button")}
                </button>
                <span className="text-sm text-white/80 italic">
                  {t("hero1.note")}
                </span>
              </div>
            </div>

            <div className="relative" data-aos="fade-left" data-aos-delay="300">
              <img
                src={img}
                alt="Hero"
                className="w-full rounded-2xl shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-3xl z-0" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;


