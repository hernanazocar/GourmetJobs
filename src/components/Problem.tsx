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
            <div className="inline-flex items-center gap-2.5 bg-red-50 rounded-full px-4 py-2 mb-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444]" />
                <span
                  className="relative inline-flex rounded-full h-3 w-3"
                  style={{
                    background: "#EF4444",
                    boxShadow:
                      "0 0 10px #EF4444, 0 0 20px rgba(239,68,68,0.4)",
                  }}
                />
              </span>
              <span className="text-red-600 text-xs font-bold uppercase tracking-wider">
                El problema
              </span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.05}>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              <span className="text-[#1A0E05]">
                La contrataci&oacute;n gastron&oacute;mica
              </span>
              <br />
              <span className="gradient-text-orange">est&aacute; rota</span>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.1}>
            <p className="text-[#7A5C48] text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              Cada hora con un turno descubierto es dinero perdido. Los portales
              tradicionales no entienden la urgencia.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.12}>
            <div className="w-16 h-1 bg-orange rounded-full mx-auto mt-6" />
          </RevealWrapper>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-6 mt-16">
          {/* Problems column */}
          <RevealWrapper delay={0.2} direction="left">
            <div className="bg-white rounded-3xl shadow-xl h-full overflow-hidden">
              {/* Red accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-red-400 to-red-300 rounded-t-3xl" />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="text-red-500"
                    >
                      <path
                        d="M4 4L14 14M14 4L4 14"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A0E05]">
                      El m&eacute;todo tradicional
                    </h3>
                    <p className="text-[#9A7A60] text-xs mt-0.5">
                      Lo que sigues haciendo hoy
                    </p>
                  </div>
                </div>

                {/* Problem items */}
                <ul className="space-y-6">
                  {problems.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="bg-red-50 rounded-xl w-11 h-11 flex items-center justify-center text-lg shrink-0 group-hover:bg-red-100 transition-colors duration-200">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-[#1A0E05] text-sm font-bold">
                          {item.title}
                        </h4>
                        <p className="text-[#7A5C48] text-sm leading-relaxed mt-1">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Bottom stat */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                  <span className="text-4xl font-extrabold text-red-500">
                    35%
                  </span>
                  <p className="text-[#9A7A60] text-xs leading-tight">
                    de candidatos no
                    <br />
                    se presentan
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Solutions column */}
          <RevealWrapper delay={0.3} direction="right">
            <div className="bg-gradient-to-br from-orange to-[#C04515] rounded-3xl shadow-xl h-full overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div className="p-8 md:p-10 relative">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M3 9.5L7 13.5L15 4.5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      La forma GourmetJobs
                    </h3>
                    <p className="text-white/50 text-xs mt-0.5">
                      C&oacute;mo deber&iacute;a funcionar
                    </p>
                  </div>
                </div>

                {/* Solution items */}
                <ul className="space-y-6">
                  {solutions.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="bg-white/10 rounded-xl w-11 h-11 flex items-center justify-center text-lg shrink-0 group-hover:bg-white/20 transition-colors duration-200">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-bold">
                          {item.title}
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed mt-1">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Bottom stat */}
                <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-3">
                  <span className="text-4xl font-extrabold text-white">
                    98%
                  </span>
                  <p className="text-white/50 text-xs leading-tight">
                    tasa de cumplimiento
                    <br />
                    con GourmetJobs
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>

        {/* Bottom CTA */}
        <RevealWrapper delay={0.4}>
          <div className="text-center mt-14">
            <div className="bg-white rounded-2xl p-6 shadow-lg inline-block text-center">
              <p className="text-[#7A5C48] text-sm mb-3">
                &iquest;Cu&aacute;nto te cuesta un turno descubierto?
              </p>
              <a
                href="#precios"
                className="inline-flex items-center gap-2 bg-orange text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-orange2 transition-all duration-300"
                style={{ boxShadow: "0 8px 25px rgba(232,85,32,0.3)" }}
              >
                Calcula tu ahorro &rarr;
              </a>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
