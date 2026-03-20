"use client";

import RevealWrapper from "./ui/RevealWrapper";

const empresasItems = [
  "Match en menos de 2 minutos",
  "Trabajadores verificados y evaluados",
  "Paga solo por turnos completados",
  "Sin contratos ni compromisos",
  "Dashboard de analytics",
];

const trabajadoresItems = [
  "Elige tus propios turnos",
  "Cobra el mismo día",
  "Construye tu reputación",
  "Sin entrevistas ni papeleo",
  "Bonus por puntualidad",
];

export default function Roles() {
  return (
    <RevealWrapper>
      <section className="sec-dark py-24 px-4">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="rounded-card border border-border overflow-hidden shadow-2xl shadow-orange/5">
            <div className="grid md:grid-cols-2">
              {/* LEFT PANEL - Empresas */}
              <div className="bg-white p-10 md:p-14">
                <div className="h-1 bg-gradient-to-r from-orange to-orange2 -mt-10 -mx-10 mb-10 md:-mt-14 md:-mx-14 md:mb-14 rounded-t-card" />
                <span className="inline-block bg-orange/10 text-[#E85520] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Para empresas
                </span>

                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A0E05] mt-5">
                  Llena turnos en minutos, no semanas
                </h2>

                <p className="text-[#7A5C48] mt-3 text-sm">
                  Publica un turno y recibe candidatos verificados en tiempo récord. Sin papeleo, sin esperas.
                </p>

                <ul className="mt-6 space-y-3">
                  {empresasItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="bg-orange/10 w-7 h-7 rounded-lg flex items-center justify-center text-[#E85520] text-sm">
                        ✓
                      </span>
                      <span className="text-[#7A5C48] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 bg-orange text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-orange2 transition">
                  Publicar turno
                </button>
              </div>

              {/* RIGHT PANEL - Trabajadores */}
              <div
                className="p-10 md:p-14 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #E85520, #C04010)" }}
              >
                {/* White blob */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                <span className="inline-block bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Para trabajadores
                </span>

                <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-5">
                  Trabaja cuando quieras, donde quieras
                </h2>

                <p className="text-white/80 mt-3 text-sm">
                  Elige tus turnos, cobra rápido y construye tu reputación en la industria gastronómica.
                </p>

                <ul className="mt-6 space-y-3">
                  {trabajadoresItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="bg-white/15 w-7 h-7 rounded-lg flex items-center justify-center text-white text-sm">
                        ✓
                      </span>
                      <span className="text-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 bg-white text-orange px-8 py-4 rounded-xl text-base font-semibold hover:bg-cream transition">
                  Buscar turnos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
