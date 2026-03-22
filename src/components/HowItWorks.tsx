"use client";

import { useState } from "react";
import { howItWorks, howItWorksWorkers } from "@/lib/data";
import RevealWrapper from "./ui/RevealWrapper";

const stepColors = [
  { bg: "#E85520", light: "#FFF0E6" },
  { bg: "#16a34a", light: "#ECFDF5" },
  { bg: "#7C3AED", light: "#F3F0FF" },
];

export default function HowItWorks() {
  const [tab, setTab] = useState<"empresa" | "trabajador">("empresa");
  const steps = tab === "empresa" ? howItWorks : howItWorksWorkers;

  return (
    <section id="como-funciona" className="sec-light py-28 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <RevealWrapper>
            <div className="inline-flex items-center gap-2.5 bg-orange/10 rounded-full px-4 py-2 mb-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full" style={{ background: "#E85520" }} />
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#E85520" }} />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#E85520" }}>
                Cómo funciona
              </span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.05}>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              <span className="text-[#1A0E05]">Así de simple.</span>
              <br />
              <span className="gradient-text-orange">Contrata en minutos.</span>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.1}>
            <p className="text-[#7A5C48] text-lg mt-5 max-w-xl mx-auto leading-relaxed">
              Encuentra talento disponible o recibe candidatos recomendados. Todo en minutos.
            </p>
          </RevealWrapper>

          {/* Tabs */}
          <RevealWrapper delay={0.12}>
            <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-lg mt-8" style={{ border: "1px solid rgba(232,85,32,0.1)" }}>
              <button
                onClick={() => setTab("empresa")}
                className="px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300"
                style={{
                  background: tab === "empresa" ? "#E85520" : "transparent",
                  color: tab === "empresa" ? "#fff" : "#7A5C48",
                }}
              >
                🏢 Soy empresa
              </button>
              <button
                onClick={() => setTab("trabajador")}
                className="px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300"
                style={{
                  background: tab === "trabajador" ? "#E85520" : "transparent",
                  color: tab === "trabajador" ? "#fff" : "#7A5C48",
                }}
              >
                👨‍🍳 Soy trabajador
              </button>
            </div>
          </RevealWrapper>
        </div>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-0.5" style={{ background: "linear-gradient(to right, #E85520, #16a34a, #7C3AED)" }} />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const color = stepColors[index];
              return (
                <RevealWrapper key={`${tab}-${step.number}`} delay={0.15 + index * 0.1}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300 text-center h-full relative">
                    {/* Step number circle */}
                    <div className="relative z-10 mx-auto mb-5">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-extrabold mx-auto shadow-lg"
                        style={{ background: color.bg, boxShadow: `0 8px 24px ${color.bg}40` }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                      style={{ background: color.light }}
                    >
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1A0E05]">{step.title}</h3>

                    {/* Description */}
                    <p className="text-[#7A5C48] text-sm leading-relaxed mt-3">{step.description}</p>

                    {/* Chip */}
                    <div className="mt-5">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-white"
                        style={{ background: color.bg }}
                      >
                        {index === 0 && "🟢"}
                        {index === 1 && "⚡"}
                        {index === 2 && "✓"}
                        {" "}{step.chip}
                      </span>
                    </div>
                  </div>
                </RevealWrapper>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <RevealWrapper delay={0.6}>
          <div className="text-center mt-14">
            <a
              href="/registro"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-all duration-300"
              style={{ background: "#E85520", boxShadow: "0 8px 30px rgba(232,85,32,0.3)" }}
            >
              Empieza gratis ahora
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-[#9A7A60] text-sm mt-4">Sin tarjeta de crédito · Configura en 2 minutos</p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
