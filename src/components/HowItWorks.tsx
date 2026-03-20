"use client";

import { howItWorks } from "@/lib/data";
import RevealWrapper from "./ui/RevealWrapper";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="sec-dark py-24 px-4">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <span className="label inline-block px-4 py-1.5 rounded-full text-xs bg-white/15 text-white">
          PROCESO
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
          <span className="text-white">Tres pasos.</span>
          <br />
          <span className="gradient-text">Cero fricción.</span>
        </h2>

        <p className="text-text2 text-lg mt-4 max-w-md mx-auto">
          Desde publicar tu turno hasta tener a alguien trabajando. Así de simple.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {howItWorks.map((step, index) => (
            <RevealWrapper key={step.number} delay={index * 0.08}>
              <div className="group relative bg-card rounded-[28px] p-8 border border-border text-left overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/40">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute top-4 right-4 text-6xl font-extrabold text-border group-hover:text-white/20 transition">
                  {step.number}
                </span>
                <span className="text-3xl mb-4 block">{step.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-text2 text-sm leading-relaxed">{step.description}</p>
                <span className="mt-4 inline-block bg-black/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full">
                  {step.chip}
                </span>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
