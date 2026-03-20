"use client";

import { features, trustBars, earningsData } from "@/lib/data";

import RevealWrapper from "./ui/RevealWrapper";

export default function Features() {
  return (
    <section id="features" className="sec-dark py-24 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center">
          <span className="label inline-block px-4 py-1.5 rounded-full text-xs bg-white/15 text-white">
            FEATURES
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-[1.05]">
            <span className="text-white">Todo lo que necesitas.</span>
            <br />
            <span className="gradient-text">Nada que no.</span>
          </h2>

          <p className="text-white/65 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Herramientas diseñadas para que gestiones tu equipo gastronómico sin fricción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-14">
          {features.map((feature, index) => (
            <RevealWrapper
              key={feature.title}
              delay={index * 0.06}
              className={feature.size === "span4" ? "md:col-span-4" : "md:col-span-2"}
            >
              <div
                className={`rounded-[28px] p-7 border transition-all duration-300 hover:-translate-y-1 h-full  ${
                  feature.accent
                    ? "bg-white/15 border-orange/20"
                    : "bg-card border-border"
                }`}
              >
                <span className="text-2xl mb-3 block">{feature.icon}</span>
                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-white/65 text-sm">{feature.description}</p>
                {feature.chip && (
                  <span className="mt-3 inline-block bg-white/15 text-white/65 text-xs font-semibold px-3 py-1 rounded-full">
                    {feature.chip}
                  </span>
                )}

                {/* Special content: Trust Bars (first card, accent) */}
                {index === 0 && feature.accent && (
                  <div className="mt-4">
                    {trustBars.map((bar) => (
                      <div key={bar.label} className="mt-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white/65">{bar.label}</span>
                          <span className="text-white font-semibold">{bar.value}%</span>
                        </div>
                        <div className="bg-white/15 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-orange to-orange3 rounded-full h-2"
                            style={{ width: `${bar.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Special content: Earnings Data (second card) */}
                {index === 1 && (
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {earningsData.map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="text-lg font-bold gradient-text">{item.value}</div>
                        <div className="text-white/65 text-xs">{item.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
