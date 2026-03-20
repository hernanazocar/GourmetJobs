"use client";

import { pricingPlans } from "@/lib/data";

import RevealWrapper from "./ui/RevealWrapper";

export default function Pricing() {
  return (
    <section id="precios" className="sec-dark py-24 px-4">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="label inline-block px-4 py-1.5 rounded-full text-xs bg-white/15 text-white">
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
                    ? "bg-white border-orange/20"
                    : "bg-white/15 border-border"
                }`}
                style={{ borderRadius: "28px" }}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                    Más popular
                  </span>
                )}

                <p className={`text-sm font-semibold uppercase tracking-wider ${plan.popular ? "text-[#7A5C48]" : "text-white/65"}`}>
                  {plan.name}
                </p>

                <p className="text-4xl font-extrabold mt-2">
                  <span className={plan.popular ? "gradient-text-orange" : "text-white"}>
                    {plan.price}
                  </span>
                  <span className={`text-base font-normal ${plan.popular ? "text-[#7A5C48]" : "text-white/65"}`}>{plan.period}</span>
                </p>

                <p className={`text-sm mt-2 ${plan.popular ? "text-[#7A5C48]" : "text-white/65"}`}>{plan.description}</p>

                <hr className={`border-t my-6 ${plan.popular ? "border-[#E5D5CC]" : "border-border"}`} />

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${plan.popular ? "bg-orange/10 text-[#E85520]" : "bg-white/15 text-white"}`}>
                        ✓
                      </span>
                      <span className={`text-sm ${plan.popular ? "text-[#7A5C48]" : "text-white/65"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3.5 rounded-btn font-semibold text-sm text-center transition ${
                    plan.popular
                      ? "bg-orange text-white hover:bg-orange2"
                      : "bg-white/15 text-white hover:bg-white/25"
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
