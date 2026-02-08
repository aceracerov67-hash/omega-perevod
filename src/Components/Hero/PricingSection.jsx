import React, { useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const plans = [
    {
      name: t("pricing.starter"),
      price: isYearly ? 150 : 19,
      features: [
        t("pricing.features.f1"),
        t("pricing.features.f2"),
        t("pricing.features.f3"),
        t("pricing.features.f4"),
        t("pricing.features.f5"),
      ],
    },
    {
      name: t("pricing.business"),
      price: isYearly ? 390 : 49,
      features: [
        t("pricing.features.f1"),
        t("pricing.features.f2"),
        t("pricing.features.f3"),
        t("pricing.features.f4"),
        t("pricing.features.f5"),
      ],
    },
  ];

  const faqs = [
    {
      q: t("pricing.faq.q1"),
      a: t("pricing.faq.a1"),
    },
    {
      q: t("pricing.faq.q2"),
      a: t("pricing.faq.a2"),
    },
    {
      q: t("pricing.faq.q3"),
      a: t("pricing.faq.a3"),
    },
    {
      q: t("pricing.faq.q4"),
      a: t("pricing.faq.a4"),
    },
  ];

  return (
    <div className="font-sans antialiased overflow-hidden">
      {/* PRICING */}
      <section id="Support" className="bg-[#F8F9FC] pt-20 pb-40 px-4">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
            {t("pricing.title")}
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg" data-aos="fade-up" data-aos-delay="100">
            {t("pricing.subtitle")}
          </p>

          {/* TOGGLE */}
          <div className="flex items-center justify-center gap-4 mb-16" data-aos="zoom-in" data-aos-delay="200">
            <span className={!isYearly ? "font-semibold text-gray-900" : "text-gray-400"}>
              {t("pricing.monthly")}
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-indigo-100 rounded-full p-1 relative"
            >
              <div className={`w-5 h-5 bg-indigo-600 rounded-full transition-transform duration-300 ${isYearly ? "translate-x-7" : ""}`} />
            </button>

            <span className={isYearly ? "font-semibold text-gray-900" : "text-gray-400"}>
              {t("pricing.yearly")}
            </span>

            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
              {t("pricing.save")}
            </span>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl flex flex-col"
                data-aos={index === 0 ? "fade-right" : "fade-left"}
                data-aos-delay="300"
              >
                <div className="p-10 flex-grow">

                  <span className="text-indigo-600 font-semibold text-sm uppercase">
                    {plan.name}
                  </span>

                  <div className="mt-4 flex items-center justify-center">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-6xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-gray-400 text-xl ml-1">/mo</span>
                  </div>

                  <p className="text-gray-400 text-sm mt-2">
                    {t("pricing.perUser")}
                  </p>

                  <ul className="mt-8 space-y-4 text-left inline-block">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="bg-indigo-100 rounded-full p-1 mr-3">
                          <Check className="w-3 h-3 text-indigo-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-indigo-600 text-white py-5 font-bold text-lg hover:bg-indigo-700 transition">
                  {t("pricing.button")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="bg-[#121212] text-white py-24 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-indigo-600 rounded-full p-1 h-fit">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">{faq.q}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6" data-aos="zoom-out-up">
            {t("pricing.ctaTitle")}
          </h1>

          <p className="text-gray-400 mb-10" data-aos="fade-up">
            {t("pricing.ctaDesc")}
          </p>

          <button className="bg-indigo-600 hover:bg-indigo-900 py-4 px-10 rounded-lg font-bold text-lg transition">
            {t("pricing.button")}
          </button>

          <p className="text-sm text-gray-400 mt-4">
            {t("pricing.noCard")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
