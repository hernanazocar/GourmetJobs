"use client";

import { pricingPlans } from "@/lib/data";

import RevealWrapper from "./ui/RevealWrapper";

export default function Pricing() {
  return (
    <section id="precios" className="sec-dark py-24 px-4">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="label inline-block px-4 py-1.5 rounded-full text-xs bg-white/15 text-orange">
          PRECIOS
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-[1.05]">
          <span className="text-white">Simple, transparente.</span>
          <br />
          <span className="gradient-text">Sin letra chica.</span>
        </h2>

        <p className="text-white/65 text-lg mt-5 max-w-lg mx-auto leading-relaxed">
          Empieza gratis. Escala cuando quieras. Cancela cuando quieras.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-14">
          {pricingPlans.map((plan, index) => (
            <RevealWrapper key={plan.name} delay={index * 0.1}>
              <div
                className={`relative rounded-card p-8 border text-left transition-all duration-300 hover:-translate-y-1  ${
                  plan.popular
                    ? "bg-gradient-to-b from-orange/10 to-white border-orange/20"
                    : "bg-card border-border"
                }`}
                style={{ borderRadius: "28px" }}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                    Más popular
                  </span>
                )}

                <p className="text-white/65 text-sm font-semibold uppercase tracking-wider">
                  {plan.name}
                </p>

                <p className="text-4xl font-extrabold mt-2">
                  <span className={plan.popular ? "gradient-text" : "text-white"}>
                    {plan.price}
                  </span>
                  <span className="text-white/65 text-base font-normal">{plan.period}</span>
                </p>

                <p className="text-white/65 text-sm mt-2">{plan.description}</p>

                <hr className="border-t border-border my-6" />

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="bg-white/15 w-6 h-6 rounded-lg flex items-center justify-center text-orange text-xs">
                        ✓
                      </span>
                      <span className="text-white/65 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3.5 rounded-btn font-semibold text-sm text-center transition ${
                    plan.popular
                      ? "bg-orange text-white hover:bg-orange2"
                      : "text-white border border-[#1A0E05]/20 hover:bg-[#1A0E05]/5"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
