"use client";

import { pricingPlans } from "@/lib/data";

import RevealWrapper from "./ui/RevealWrapper";

export default function Pricing() {
  return (
    <section id="precios" className="sec-light py-24 px-4">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="inline-flex items-center gap-2.5 bg-orange/10 rounded-full px-4 py-2 mb-5">
          <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
          <span className="text-orange text-xs font-bold uppercase tracking-wider">
            Precios
          </span>
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-[1.05]">
          <span className="text-[#1A0E05]">Simple, transparente.</span>
          <br />
          <span className="gradient-text-orange">Sin letra chica.</span>
        </h2>

        <p className="text-[#7A5C48] text-base mt-4 max-w-lg mx-auto leading-relaxed">
          Empieza gratis. Escala cuando quieras.
        </p>

        <div className="w-16 h-1 bg-orange/30 rounded-full mx-auto mt-6" />

        <div className="grid md:grid-cols-3 gap-4 mt-14">
          {pricingPlans.map((plan, index) => (
            <RevealWrapper key={plan.name} delay={index * 0.1}>
              <div
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1"
              >
                {plan.popular && (
                  <div className="h-1.5 bg-gradient-to-r from-orange to-orange2" />
                )}

                {plan.popular && (
                  <span className="absolute -top-0 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-5 py-1.5 rounded-b-xl">
                    Más popular
                  </span>
                )}

                <div className="p-8">
                  <p className="text-[#9A7A60] text-sm font-bold uppercase tracking-wider">
                    {plan.name}
                  </p>

                  <p className="mt-2">
                    <span className="text-5xl font-extrabold text-[#1A0E05]">
                      {plan.price}
                    </span>
                    <span className="text-[#9A7A60] text-base">{plan.period}</span>
                  </p>

                  <p className="text-[#7A5C48] text-sm mt-2">{plan.description}</p>

                  <hr className="border-t border-[#F0E6DC] my-6" />

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs bg-orange/10 text-orange">
                          ✓
                        </span>
                        <span className="text-sm text-[#7A5C48]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 w-full py-4 rounded-xl font-bold text-sm text-center transition ${
                      plan.popular
                        ? "bg-orange text-white hover:bg-orange2"
                        : "bg-[#1A0E05] text-white hover:bg-[#2A1A10]"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <p className="text-[#9A7A60] text-sm text-center mt-8">
          Sin contratos · Cancela cuando quieras · Soporte incluido
        </p>
      </div>
    </section>
  );
}
