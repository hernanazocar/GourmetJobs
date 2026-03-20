"use client";

import { problems, solutions } from "@/lib/data";
import RevealWrapper from "./ui/RevealWrapper";

export default function Problem() {
  return (
    <section id="problema" className="sec-light py-28 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <RevealWrapper>
            <div className="inline-flex items-center gap-2.5 bg-orange/10 rounded-full px-4 py-2 mb-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E85520]"></span>
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#E85520", boxShadow: "0 0 10px #E85520, 0 0 20px rgba(232,85,32,0.4)" }}></span>
              </span>
              <span className="text-orange text-xs font-bold uppercase tracking-wider">El problema</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              <span className="text-[#1A0E05]">La contratación gastronómica</span>
              <br />
              <span className="gradient-text-orange">está rota</span>
            </h2>
            <p className="text-[#7A5C48] text-lg mt-5 max-w-2xl mx-auto">
              Los portales de empleo tradicionales no fueron diseñados para la velocidad
              que exige la gastronomía. Cada hora con un turno descubierto es dinero perdido.
            </p>
          </RevealWrapper>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-6 mt-16">
          {/* Problems column */}
          <RevealWrapper direction="left">
            <div className="bg-white/90 rounded-[28px] p-8 md:p-10 border border-light-border h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center">
                  <span className="text-[#1A0E05] text-lg">✕</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    El método tradicional
                  </h3>
                  <p className="text-[#9A7A60] text-xs mt-0.5">Lo que sigues haciendo hoy</p>
                </div>
              </div>

              <ul className="space-y-6">
                {problems.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <div className="bg-[#FFF0E6] rounded-xl w-11 h-11 flex items-center justify-center text-lg shrink-0 border border-light-border group-hover:border-white/30 transition">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[#1A0E05] text-sm font-semibold">{item.title}</h4>
                      <p className="text-[#7A5C48] text-sm leading-relaxed mt-1">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Bottom stat */}
              <div className="mt-8 pt-6 border-t border-light-border flex items-center gap-3">
                <span className="text-3xl font-extrabold text-white">35%</span>
                <p className="text-[#9A7A60] text-xs leading-tight">
                  de los candidatos en portales<br />tradicionales no se presentan
                </p>
              </div>
            </div>
          </RevealWrapper>

          {/* Solutions column */}
          <RevealWrapper direction="right">
            <div
              className="rounded-[28px] p-8 md:p-10 h-full relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #E85520, #C04010)",
              }}
            >
              {/* Decorative circle */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-8 relative">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center">
                  <span className="text-[#1A0E05] text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    La forma GourmetJobs
                  </h3>
                  <p className="text-white/50 text-xs mt-0.5">Cómo debería funcionar</p>
                </div>
              </div>

              <ul className="space-y-6 relative">
                {solutions.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <div className="bg-white/10 rounded-xl w-11 h-11 flex items-center justify-center text-lg shrink-0 border border-white/10 group-hover:bg-white/20 transition">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[#1A0E05] text-sm font-semibold">{item.title}</h4>
                      <p className="text-white/75 text-sm leading-relaxed mt-1">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Bottom stat */}
              <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-3 relative">
                <span className="text-3xl font-extrabold text-white">98%</span>
                <p className="text-white/50 text-xs leading-tight">
                  tasa de cumplimiento<br />con GourmetJobs
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>

        {/* Bottom CTA */}
        <RevealWrapper>
          <div className="text-center mt-14">
            <p className="text-[#9A7A60] text-sm">
              ¿Cuánto te cuesta un turno descubierto?{" "}
              <a href="#precios" className="text-[#1A0E05] hover:text-white/80 font-semibold transition underline underline-offset-4">
                Calcula tu ahorro →
              </a>
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
