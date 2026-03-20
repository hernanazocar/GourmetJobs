"use client";

import RevealWrapper from "./ui/RevealWrapper";


interface Row {
  criteria: string;
  traditional: string;
  gourmet: string;
  isIcon?: boolean;
  gourmetIsGreen?: boolean;
}

const rows: Row[] = [
  {
    criteria: "Tiempo de contratación",
    traditional: "5-15 días",
    gourmet: "Menos de 2 min",
  },
  {
    criteria: "Verificación",
    traditional: "Solo CV",
    gourmet: "Score + historial real",
  },
  {
    criteria: "Costo por no-show",
    traditional: "Alto — sin garantía",
    gourmet: "$0 — solo pagas turnos completados",
  },
  {
    criteria: "Disponibilidad",
    traditional: "Candidatos pasivos",
    gourmet: "Solo personas disponibles ahora",
  },
  {
    criteria: "Cobertura urgente",
    traditional: "Imposible",
    gourmet: "Turnos cubiertos en minutos",
  },
  {
    criteria: "Calidad garantizada",
    traditional: "\u274C",
    gourmet: "\u2705",
    isIcon: true,
    gourmetIsGreen: true,
  },
  {
    criteria: "Pago por turno",
    traditional: "\u274C",
    gourmet: "\u2705",
    isIcon: true,
    gourmetIsGreen: true,
  },
  {
    criteria: "App para trabajadores",
    traditional: "\u274C",
    gourmet: "\u2705",
    isIcon: true,
    gourmetIsGreen: true,
  },
];

export default function Comparison() {
  return (
    <section id="comparacion" className="sec-dark py-24 px-4">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2.5 bg-white/15 rounded-full px-4 py-2 mb-5">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-white text-xs font-bold uppercase tracking-wider">
            Comparación
          </span>
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-[1.05]">
          <span className="text-white">¿Por qué no un portal</span>
          <br />
          <span className="gradient-text">de empleo tradicional?</span>
        </h2>

        <p className="text-white/70 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
          Los portales genéricos no entienden la urgencia de la gastronomía.
          Mira cómo GourmetJobs supera cada métrica que importa.
        </p>

        <div className="w-16 h-1 bg-white/30 rounded-full mx-auto mt-6" />

        <RevealWrapper>
          <div className="mt-14 bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="hidden sm:grid grid-cols-3 bg-[#FFF5EE] px-8 py-5">
              <span className="text-[#7A5C48] text-sm font-semibold text-left">
                Criterio
              </span>
              <span className="text-[#7A5C48] text-sm font-semibold text-left">
                Portales tradicionales
              </span>
              <span className="text-orange text-sm font-bold text-left">
                GourmetJobs
              </span>
            </div>

            {/* Mobile Header */}
            <div className="grid grid-cols-2 sm:hidden bg-[#FFF5EE] px-8 py-5">
              <span className="text-[#7A5C48] text-sm font-semibold">
                Portales tradicionales
              </span>
              <span className="text-orange text-sm font-bold">
                GourmetJobs
              </span>
            </div>

            {/* Data Rows */}
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              const borderClass = isLast ? "" : "border-b border-[#F0E6DC]";
              const evenBg = i % 2 === 1 ? "bg-[#FFFAF5]" : "";

              return (
                <div key={row.criteria}>
                  {/* Mobile: criteria label */}
                  <div
                    className={`sm:hidden px-8 pt-4 pb-1 text-[#7A5C48] text-xs uppercase tracking-wider font-semibold ${evenBg}`}
                  >
                    {row.criteria}
                  </div>

                  {/* Mobile: 2-col comparison */}
                  <div
                    className={`grid grid-cols-2 sm:hidden px-8 py-5 ${borderClass} ${evenBg}`}
                  >
                    <span
                      className={`text-[#9A7A60] ${
                        row.isIcon ? "text-red-400 text-lg" : ""
                      }`}
                    >
                      {row.traditional}
                    </span>
                    <span
                      className={`${
                        row.gourmetIsGreen
                          ? "text-green-500 text-lg"
                          : "text-[#1A0E05] font-bold"
                      }`}
                    >
                      {row.gourmet}
                    </span>
                  </div>

                  {/* Desktop: 3-col row */}
                  <div
                    className={`hidden sm:grid grid-cols-3 px-8 py-5 ${borderClass} ${evenBg}`}
                  >
                    <span className="text-[#7A5C48] text-sm font-medium">
                      {row.criteria}
                    </span>
                    <span
                      className={`text-[#9A7A60] ${
                        row.isIcon ? "text-red-400 text-lg" : ""
                      }`}
                    >
                      {row.traditional}
                    </span>
                    <span
                      className={`${
                        row.gourmetIsGreen
                          ? "text-green-500 text-lg"
                          : "text-[#1A0E05] font-bold"
                      }`}
                    >
                      {row.gourmet}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
