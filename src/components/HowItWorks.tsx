"use client";

import { howItWorks } from "@/lib/data";
import RevealWrapper from "./ui/RevealWrapper";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="sec-light py-24 px-4">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2.5 bg-orange/10 rounded-full px-4 py-2 mb-5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange"></span>
            <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#E85520", boxShadow: "0 0 10px #E85520, 0 0 20px rgba(232,85,32,0.4)" }}></span>
          </span>
          <span className="text-orange text-xs font-bold uppercase tracking-wider">Proceso</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
          <span className="text-[#1A0E05]">Tres pasos.</span>
          <br />
          <span className="gradient-text-orange">Cero fricción.</span>
        </h2>

        <p className="text-[#7A5C48] text-lg mt-4 max-w-md mx-auto">
          Desde publicar tu turno hasta tener a alguien trabajando. Así de simple.
        </p>

        <div className="w-16 h-1 bg-orange rounded-full mx-auto mt-6" />

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {howItWorks.map((step, index) => (
            <RevealWrapper key={step.number} delay={index * 0.08}>
              <div className="group relative bg-white/90 rounded-[28px] p-8 border border-light-border text-left overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/20 shadow-xl shadow-orange/5">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange/30 to-orange/10 opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute top-4 right-4 text-7xl font-extrabold text-orange/10 group-hover:text-orange/20 transition">
                  {step.number}
                </span>
                <span className="text-3xl mb-4 block">{step.icon}</span>
                <h3 className="text-lg font-bold text-[#1A0E05] mb-2">{step.title}</h3>
                <p className="text-[#7A5C48] text-sm leading-relaxed">{step.description}</p>
                <span className="mt-4 inline-block bg-orange text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  {step.chip}
                </span>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-[#9A7A60] text-sm mb-4">¿Listo para simplificar tu contratación?</p>
          <a
            href="#precios"
            className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange2 transition"
            style={{ boxShadow: "0 8px 30px rgba(232,85,32,0.3)" }}
          >
            Empezar gratis →
          </a>
        </div>
      </div>
    </section>
  );
}
