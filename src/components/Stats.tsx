"use client";

import AnimatedCounter from "./ui/AnimatedCounter";
import RevealWrapper from "./ui/RevealWrapper";

const stats = [
  {
    number: "3,200+",
    label: "Trabajadores verificados",
    icon: "\uD83D\uDC68\u200D\uD83C\uDF73",
    color: "text-orange",
    bgColor: "bg-orange/10",
  },
  {
    number: "450+",
    label: "Restaurantes activos",
    icon: "\uD83C\uDFE2",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    number: "98%",
    label: "Tasa de cumplimiento",
    icon: "\u2705",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    number: "<2min",
    label: "Tiempo de match",
    icon: "\u26A1",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
];

export default function Stats() {
  return (
    <section className="sec-light py-24 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="text-center">
            <div className="inline-flex items-center gap-2.5 bg-orange/10 rounded-full px-4 py-2 mb-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange" />
                <span
                  className="relative inline-flex rounded-full h-3 w-3"
                  style={{
                    background: "#E85520",
                    boxShadow:
                      "0 0 10px #E85520, 0 0 20px rgba(232,85,32,0.4)",
                  }}
                />
              </span>
              <span className="text-orange text-xs font-bold uppercase tracking-wider">
                IMPACTO
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold mt-4">
              <span className="text-[#1A0E05]">Números que</span>
              <br />
              <span className="gradient-text-orange">hablan solos</span>
            </h2>

            <p className="text-[#7A5C48] text-lg mt-4 max-w-lg mx-auto leading-relaxed">
              Métricas reales de una plataforma que funciona.
            </p>

            <div className="w-16 h-1 bg-orange/30 rounded-full mx-auto mt-6" />
          </div>
        </RevealWrapper>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <RevealWrapper key={index} delay={index * 0.15}>
              <div className="bg-white rounded-3xl p-10 text-center shadow-xl border border-[rgba(232,85,32,0.08)] hover:-translate-y-2 transition-all duration-300">
                <div
                  className={`w-16 h-16 rounded-full ${stat.bgColor} flex items-center justify-center text-2xl mx-auto mb-5`}
                >
                  {stat.icon}
                </div>
                <AnimatedCounter
                  value={stat.number}
                  className={`text-5xl font-extrabold ${stat.color}`}
                />
                <p className="text-[#7A5C48] text-sm font-semibold mt-3 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <p className="text-[#9A7A60] text-sm text-center mt-10">
          Datos actualizados en tiempo real · Marzo 2026
        </p>
      </div>
    </section>
  );
}
