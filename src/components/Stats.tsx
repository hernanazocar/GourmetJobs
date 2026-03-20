"use client";

import RevealWrapper from "./ui/RevealWrapper";

const stats = [
  { number: "3,200+", label: "Trabajadores verificados", sublabel: "activos en la plataforma" },
  { number: "450+", label: "Restaurantes", sublabel: "confían en GourmetJobs" },
  { number: "98%", label: "Tasa de cumplimiento", sublabel: "puntualidad promedio" },
  { number: "<2min", label: "Tiempo de match", sublabel: "promedio de contratación" },
];

export default function Stats() {
  return (
    <section className="sec-dark py-24 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <RevealWrapper key={index} delay={index * 0.15}>
              <div className="bg-card rounded-[28px] p-8 border border-border text-center hover:-translate-y-1 transition-all duration-300">
                <p className="text-5xl md:text-6xl font-extrabold gradient-text">
                  {stat.number}
                </p>
                <p className="text-text2 text-sm mt-3">{stat.label}</p>
                <p className="text-text3 text-xs mt-1">{stat.sublabel}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <div className="mt-10">
          <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
          <p className="mt-6 text-center text-text3 text-sm">
            Datos actualizados en tiempo real · Marzo 2026
          </p>
        </div>
      </div>
    </section>
  );
}
