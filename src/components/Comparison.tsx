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
      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="label inline-block px-4 py-1.5 rounded-full text-xs bg-white/15 text-orange">
          COMPARACIÓN
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-[1.05]">
          <span className="text-white">¿Por qué no un portal</span>
          <br />
          <span className="gradient-text">de empleo tradicional?</span>
        </h2>

        <p className="text-white/65 text-lg mt-5 max-w-2xl leading-relaxed">
          Los portales genéricos no entienden la urgencia de la gastronomía.
          Mira cómo GourmetJobs supera cada métrica que importa.
        </p>

        <RevealWrapper>
          <div className="mt-14 bg-card rounded-[28px] border border-border overflow-hidden ">
            {/* Header */}
            <div className="hidden sm:grid grid-cols-3 bg-light-warm px-6 py-4 border-b border-border">
              <span className="text-white/65 text-sm font-semibold">
                Criterio
              </span>
              <span className="text-white/65 text-sm font-semibold">
                Portales tradicionales
              </span>
              <span className="text-orange text-sm font-bold">
                GourmetJobs
              </span>
            </div>

            {/* Mobile Header */}
            <div className="grid grid-cols-2 sm:hidden bg-light-warm px-6 py-4 border-b border-border">
              <span className="text-white/65 text-sm font-semibold">
                Portales tradicionales
              </span>
              <span className="text-orange text-sm font-bold">
                GourmetJobs
              </span>
            </div>

            {/* Data Rows */}
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              const borderClass = isLast ? "" : "border-b border-border";

              return (
                <div key={row.criteria}>
                  {/* Mobile: criteria label */}
                  <div
                    className={`sm:hidden px-6 pt-4 pb-1 text-white/65 text-xs uppercase tracking-wider font-semibold ${
                      isLast ? "" : ""
                    }`}
                  >
                    {row.criteria}
                  </div>

                  {/* Mobile: 2-col comparison */}
                  <div
                    className={`grid grid-cols-2 sm:hidden px-6 py-3 ${borderClass}`}
                  >
                    <span
                      className={`text-white/65 ${
                        row.isIcon ? "text-center" : ""
                      }`}
                    >
                      {row.traditional}
                    </span>
                    <span
                      className={`${
                        row.gourmetIsGreen
                          ? "text-green text-center"
                          : "text-white font-semibold"
                      }`}
                    >
                      {row.gourmet}
                    </span>
                  </div>

                  {/* Desktop: 3-col row */}
                  <div
                    className={`hidden sm:grid grid-cols-3 px-6 py-5 ${borderClass}`}
                  >
                    <span className="text-white/65 text-sm font-medium">
                      {row.criteria}
                    </span>
                    <span
                      className={`text-white/65 ${
                        row.isIcon ? "text-center" : ""
                      }`}
                    >
                      {row.traditional}
                    </span>
                    <span
                      className={`${
                        row.gourmetIsGreen
                          ? "text-green text-center"
                          : "text-white font-semibold"
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
