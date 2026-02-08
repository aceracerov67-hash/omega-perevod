import React, { useEffect } from "react";
import img from "../Hero/images/layout-11.svg";
import img2 from "../Hero/images/layers-3.png";
import img3 from "../Hero/images/icon3.png";
import clients from "../Hero/images/clients.png";
import image from "../Hero/images/image.png";
import app from "../Hero/images/app.png";
import icon from "../Hero/images/icon.png";
import icon1 from "../Hero/images/icon1.png";
import iMG1 from "../Hero/images/iMG.png";
import PricingSection from "./PricingSection";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* FEATURES */}
      <section className="bg-white py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

            {[1,2,3].map((item,index)=>(
              <div
                key={index}
                className="border border-violet-800 rounded-lg p-6"
                data-aos="fade-up"
                data-aos-delay={index*200}
              >
                <div className="mb-6 w-10 h-10">
                  <img src={item===1?img:item===2?img2:img3} alt="" />
                </div>

                <h1 className="text-lg font-semibold text-gray-900 mb-4">
                  {t(`hero.cards.title${item}`)}
                </h1>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {t("hero.cards.desc")}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-white py-16 overflow-hidden" data-aos="fade-in">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex w-max" style={{ animation: "scroll 60s linear infinite" }}>
            {[...Array(18)].map((_, i) => (
              <img key={i} src={clients} alt="Clients" className="h-10 mx-2 shrink-0" />
            ))}
          </div>
        </div>

        <style>
          {`@keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }`}
        </style>
      </section>

      {/* PAGES SECTION */}
      <section id="Pages" className="bg-[#f7f8fc] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {t("hero.pages.title")} <br />
              {t("hero.pages.highlight")}
            </h1>

            <p className="text-gray-500 text-lg max-w-xl mb-10">
              {t("hero.pages.desc")}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[1,2,3,4].map((i)=>(
                <div key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm">✓</span>
                  <span className="text-gray-700 font-medium">
                    {t(`hero.pages.check${i}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <img src={image} alt="App Preview" />
            <div className="absolute -inset-6 bg-indigo-200/40 blur-3xl -z-10 rounded-3xl"></div>
          </div>

        </div>
      </section>

      {/* DEVICE SECTION */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div data-aos="zoom-in">
            <img src={app} alt="App" className="w-[400px] mx-auto lg:mx-0" />
          </div>

          <div data-aos="fade-left" className="space-y-10">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {t("hero.device.title")}
              </h1>
              <p className="text-gray-500 max-w-xl">
                {t("hero.device.desc")}
              </p>
            </div>

            {[1,2].map((i)=>(
              <div key={i} className="flex items-start gap-5">
                <span className="w-10 h-10 flex items-center justify-center">
                  <img src={i===1?icon:icon1} alt="" />
                </span>
                <div>
                  <h2 className="font-semibold text-gray-900 mb-1">
                    {t(`hero.device.item${i}`)}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {t(`hero.device.item${i}desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

         <section className="bg-[#f7f8fc] py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("hero.testimonial.title")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {t("hero.testimonial.desc")}
            </p>
          </div>

          <Swiper modules={[Navigation]} navigation slidesPerView={1}>
            {[1,2,3].map((slide)=>(
              <SwiperSlide key={slide}>
                <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col lg:flex-row items-center gap-12 m-4">
                  
                  <img
                    src={iMG1}
                    alt="Customer"
                    className="w-[315px] h-[370px] object-cover rounded-xl border border-indigo-500"
                  />

                  <div className="text-center max-w-xl">
                    <div className="text-indigo-600 text-7xl mb-6">’’</div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {t("hero.testimonial.comment")}
                    </p>
                    <h4 className="font-semibold text-gray-900">
                      {t("hero.testimonial.name")}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {t("hero.testimonial.position")}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      <div data-aos="fade-up">
        <PricingSection />
      </div>
    </>
  );
};

export default Hero;
