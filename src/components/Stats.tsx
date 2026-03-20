"use client";

import AnimatedCounter from "./ui/AnimatedCounter";
import RevealWrapper from "./ui/RevealWrapper";

const stats = [
  { number: "3,200+", label: "Trabajadores verificados", sublabel: "activos en la plataforma", icon: "👨‍🍳" },
  { number: "450+", label: "Restaurantes", sublabel: "confían en GourmetJobs", icon: "🏢" },
  { number: "98%", label: "Tasa de cumplimiento", sublabel: "puntualidad promedio", icon: "✅" },
  { number: "<2min", label: "Tiempo de match", sublabel: "promedio de contratación", icon: "⚡" },
];

export default function Stats() {
  return (
    <section className="sec-light py-24 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="text-center">
            <span className="label inline-block px-4 py-1.5 rounded-full text-xs bg-orange/10 text-orange">
              IMPACTO
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-center">
              <span className="text-[#1A0E05]">Números que</span>
              <br />
              <span className="gradient-text-orange">hablan solos</span>
            </h2>
          </div>
        </RevealWrapper>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <RevealWrapper key={index} delay={index * 0.15}>
              <div className="bg-white/90 rounded-[28px] p-10 border border-light-border text-center hover:-translate-y-2 transition-all duration-300 hover:border-orange/30">
                <span className="text-3xl mb-3 block">{stat.icon}</span>
                <AnimatedCounter
                  value={stat.number}
                  className="text-5xl md:text-6xl font-extrabold gradient-text-orange"
                />
                <p className="text-[#7A5C48] text-sm mt-3">{stat.label}</p>
                <p className="text-[#9A7A60] text-xs mt-1">{stat.sublabel}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <div className="mt-10">
          <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
          <p className="mt-6 text-center text-[#9A7A60] text-sm">
            Datos actualizados en tiempo real · Marzo 2026
          </p>
        </div>
      </div>
    </section>
  );
}
