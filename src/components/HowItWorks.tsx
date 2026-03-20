"use client";

import { howItWorks } from "@/lib/data";
import RevealWrapper from "./ui/RevealWrapper";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="sec-light py-28 px-4">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <RevealWrapper>
          <div className="inline-flex items-center gap-2.5 bg-orange/10 rounded-full px-4 py-2 mb-5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange" />
              <span
                className="relative inline-flex rounded-full h-3 w-3"
                style={{
                  background: "#E85520",
                  boxShadow: "0 0 10px #E85520, 0 0 20px rgba(232,85,32,0.4)",
                }}
              />
            </span>
            <span className="text-orange text-xs font-bold uppercase tracking-wider">
              Proceso
            </span>
          </div>
        </RevealWrapper>

        {/* Title */}
        <RevealWrapper delay={0.05}>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mt-4">
            <span className="text-[#1A0E05]">As&iacute; de simple.</span>
            <br />
            <span className="gradient-text-orange">3 pasos, 0 fricci&oacute;n.</span>
          </h2>
        </RevealWrapper>

        {/* Subtitle */}
        <RevealWrapper delay={0.1}>
          <p className="text-[#7A5C48] text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Desde que publicas tu turno hasta que llega el profesional. Todo en
            minutos.
          </p>
        </RevealWrapper>

        {/* Decorative line */}
        <RevealWrapper delay={0.12}>
          <div className="w-16 h-1 bg-orange rounded-full mx-auto mt-6" />
        </RevealWrapper>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {howItWorks.map((step, index) => (
            <RevealWrapper key={step.number} delay={0.15 + index * 0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300 text-center h-full">
                {/* Step number */}
                <div className="w-16 h-16 rounded-2xl bg-orange text-white text-2xl font-extrabold flex items-center justify-center mx-auto">
                  {step.number}
                </div>

                {/* Icon */}
                <span className="text-3xl mt-4 block">{step.icon}</span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1A0E05] mt-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#7A5C48] text-sm leading-relaxed mt-2">
                  {step.description}
                </p>

                {/* Time chip */}
                <span className="bg-orange text-white rounded-full px-4 py-1.5 text-xs font-bold mt-4 inline-block">
                  {step.chip}
                </span>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Connector line on desktop */}
        <RevealWrapper delay={0.5}>
          <div className="hidden md:flex items-center justify-center gap-0 mt-10">
            <div className="w-4 h-4 rounded-full bg-orange" />
            <div className="w-24 h-0.5 bg-orange/30" />
            <div className="w-4 h-4 rounded-full bg-orange" />
            <div className="w-24 h-0.5 bg-orange/30" />
            <div className="w-4 h-4 rounded-full bg-orange" />
          </div>
        </RevealWrapper>

        {/* Bottom CTA */}
        <RevealWrapper delay={0.6}>
          <div className="mt-14">
            <p className="text-[#9A7A60] text-sm mb-4">
              &iquest;Listo para simplificar tu contrataci&oacute;n?
            </p>
            <a
              href="#precios"
              className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange2 transition-all duration-300"
              style={{ boxShadow: "0 8px 30px rgba(232,85,32,0.3)" }}
            >
              Publica tu primer turno gratis &rarr;
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
