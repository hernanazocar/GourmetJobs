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
            <div className="inline-flex items-center gap-2.5 bg-white/15 rounded-full px-4 py-2 mb-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white"></span>
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#FFFFFF", boxShadow: "0 0 10px #FFFFFF, 0 0 20px rgba(255,255,255,0.4)" }}></span>
              </span>
              <span className="text-white text-xs font-bold uppercase tracking-wider">Impacto</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-center">
              <span className="text-white">Números que</span>
              <br />
              <span className="gradient-text">hablan solos</span>
            </h2>
            <p className="text-white/70 text-lg mt-4 max-w-lg mx-auto">
              Métricas que demuestran resultados reales
            </p>
            <div className="w-16 h-1 bg-white/30 rounded-full mx-auto mt-6" />
          </div>
        </RevealWrapper>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <RevealWrapper key={index} delay={index * 0.15}>
              <div className="bg-white rounded-3xl p-10 text-center shadow-xl border border-[rgba(232,85,32,0.08)] hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center text-2xl mx-auto mb-4">
                  {stat.icon}
                </div>
                <AnimatedCounter
                  value={stat.number}
                  className="text-5xl md:text-6xl font-extrabold text-orange"
                />
                <p className="text-[#7A5C48] text-sm font-semibold mt-3">{stat.label}</p>
                <p className="text-[#9A7A60] text-xs mt-1">{stat.sublabel}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <div className="mt-10">
          <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
          <p className="mt-6 text-center text-white/50 text-sm">
            Datos actualizados en tiempo real · Marzo 2026
          </p>
        </div>
      </div>
    </section>
  );
}
