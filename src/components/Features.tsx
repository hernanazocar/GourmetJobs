"use client";

import { features, trustBars, earningsData } from "@/lib/data";

import RevealWrapper from "./ui/RevealWrapper";

export default function Features() {
  return (
    <section id="features" className="sec-dark py-24 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center">
          <span className="inline-flex items-center gap-2.5 bg-white/15 rounded-full px-4 py-2 mb-5">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              Features
            </span>
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-[1.05]">
            <span className="text-white">Todo lo que necesitas.</span>
            <br />
            <span className="gradient-text">Nada que no.</span>
          </h2>

          <p className="text-white/60 text-base mt-4 max-w-lg mx-auto leading-relaxed">
            Herramientas diseñadas para que gestiones tu equipo gastronómico sin fricción.
          </p>

          <div className="w-16 h-1 bg-white/30 rounded-full mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-14">
          {features.map((feature, index) => (
            <RevealWrapper
              key={feature.title}
              delay={index * 0.06}
              className={feature.size === "span4" ? "md:col-span-4" : "md:col-span-2"}
            >
              <div
                className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 h-full ${
                  feature.accent
                    ? "bg-gradient-to-br from-orange to-[#C04515] shadow-xl"
                    : "bg-white shadow-xl"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 ${
                    feature.accent ? "bg-white/20" : "bg-orange/10"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3
                  className={`text-lg font-bold mb-1 ${
                    feature.accent ? "text-white" : "text-[#1A0E05]"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm ${
                    feature.accent ? "text-white/80" : "text-[#7A5C48]"
                  }`}
                >
                  {feature.description}
                </p>
                {feature.chip && (
                  <span
                    className={`mt-3 inline-block text-xs font-bold px-3 py-1 rounded-full ${
                      feature.accent
                        ? "bg-white/20 text-white"
                        : "bg-[#FFF0E6] text-orange"
                    }`}
                  >
                    {feature.chip}
                  </span>
                )}

                {/* Special content: Trust Bars (first card, accent) */}
                {index === 0 && feature.accent && (
                  <div className="mt-4">
                    {trustBars.map((bar) => (
                      <div key={bar.label} className="mt-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white/80">{bar.label}</span>
                          <span className="text-white font-semibold">{bar.value}%</span>
                        </div>
                        <div className="bg-white/20 rounded-full h-2">
                          <div
                            className="bg-white rounded-full h-2"
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
                        <div className="text-lg font-bold text-orange">{item.value}</div>
                        <div className="text-[#7A5C48] text-xs">{item.label}</div>
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
