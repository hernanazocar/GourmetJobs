"use client";

import { features, trustBars, earningsData } from "@/lib/data";
import RevealWrapper from "./ui/RevealWrapper";

export default function Features() {
  return (
    <section id="features" className="sec-dark py-28 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <RevealWrapper>
            <div className="inline-flex items-center gap-2.5 bg-white/15 rounded-full px-4 py-2 mb-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white" />
                <span
                  className="relative inline-flex rounded-full h-3 w-3"
                  style={{
                    background: "#FFFFFF",
                    boxShadow:
                      "0 0 10px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.3)",
                  }}
                />
              </span>
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                Plataforma
              </span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.05}>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-[1.05]">
              <span className="text-white">Todo lo que necesitas.</span>
              <br />
              <span className="gradient-text">Nada que no.</span>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.1}>
            <p className="text-white/60 text-lg mt-5 max-w-lg mx-auto leading-relaxed">
              Herramientas dise&ntilde;adas para la velocidad de la
              gastronom&iacute;a.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.12}>
            <div className="w-16 h-1 bg-white/30 rounded-full mx-auto mt-6" />
          </RevealWrapper>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mt-16">
          {features.map((feature, index) => (
            <RevealWrapper
              key={feature.title}
              delay={0.15 + index * 0.08}
              className={
                feature.size === "span4" ? "md:col-span-4" : "md:col-span-2"
              }
            >
              <div
                className={`rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 h-full ${
                  feature.accent
                    ? "bg-gradient-to-br from-orange to-[#C04515] shadow-xl shadow-black/20"
                    : "bg-white shadow-xl"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 ${
                    feature.accent ? "bg-white/20" : "bg-orange/10"
                  }`}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-1.5 ${
                    feature.accent ? "text-white" : "text-[#1A0E05]"
                  }`}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    feature.accent ? "text-white/80" : "text-[#7A5C48]"
                  }`}
                >
                  {feature.description}
                </p>

                {/* Chip */}
                {feature.chip && (
                  <span
                    className={`mt-4 inline-block text-xs font-bold px-4 py-1.5 rounded-full ${
                      feature.accent
                        ? "bg-white/20 text-white"
                        : "bg-[#FFF0E6] text-orange"
                    }`}
                  >
                    {feature.chip}
                  </span>
                )}

                {/* Trust Bars (first card, accent) */}
                {index === 0 && feature.accent && (
                  <div className="mt-6 space-y-3">
                    {trustBars.map((bar) => (
                      <div key={bar.label}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-white/80">{bar.label}</span>
                          <span className="text-white font-bold">
                            {bar.value}%
                          </span>
                        </div>
                        <div className="bg-white/20 rounded-full h-2.5">
                          <div
                            className="bg-white rounded-full h-2.5 transition-all duration-700"
                            style={{ width: `${bar.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Earnings Data (second card) */}
                {index === 1 && (
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {earningsData.map((item) => (
                      <div
                        key={item.label}
                        className="text-center bg-orange/5 rounded-xl py-3"
                      >
                        <div className="text-xl font-extrabold text-orange">
                          {item.value}
                        </div>
                        <div className="text-[#7A5C48] text-xs mt-0.5">
                          {item.label}
                        </div>
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
