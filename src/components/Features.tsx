"use client";

import RevealWrapper from "./ui/RevealWrapper";

const empresaFeatures = [
  {
    icon: "🔍",
    title: "Búsqueda en tiempo real",
    description: "Ve profesionales disponibles ahora mismo, filtrados por rol, zona y experiencia",
    color: "#E85520",
    lightBg: "#FFF0E6",
  },
  {
    icon: "⚡",
    title: "Match automático",
    description: "Describe tu necesidad y el sistema encuentra los mejores candidatos en segundos",
    color: "#F59E0B",
    lightBg: "#FFFBEB",
  },
  {
    icon: "📲",
    title: "Invitación directa",
    description: "Invita trabajadores con un click. Sin publicaciones, sin esperas",
    color: "#3B82F6",
    lightBg: "#EFF6FF",
  },
  {
    icon: "🔄",
    title: "Equipo recurrente",
    description: "Guarda a tus favoritos y re-invítalos cuando quieras",
    color: "#7C3AED",
    lightBg: "#F3F0FF",
  },
];

const trabajadorFeatures = [
  {
    icon: "🟢",
    title: "Activación instantánea",
    description: "Un botón para hacerte visible. Las empresas te encuentran",
    color: "#16a34a",
    lightBg: "#ECFDF5",
  },
  {
    icon: "🔔",
    title: "Oportunidades automáticas",
    description: "Recibe invitaciones sin buscar. El sistema trabaja por ti",
    color: "#E85520",
    lightBg: "#FFF0E6",
  },
  {
    icon: "⭐",
    title: "GourmetScore",
    description: "Tu reputación crece con cada turno. Mejor score = más invitaciones",
    color: "#F59E0B",
    lightBg: "#FFFBEB",
  },
  {
    icon: "📱",
    title: "Gestión simple",
    description: "Acepta o rechaza con un tap. Sin procesos, sin papeleo",
    color: "#3B82F6",
    lightBg: "#EFF6FF",
  },
];

export default function Features() {
  return (
    <section id="features" className="sec-dark py-28 px-4" style={{ background: "#E85520" }}>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <RevealWrapper>
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-5" style={{ background: "rgba(255,255,255,0.15)" }}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white" />
                <span
                  className="relative inline-flex rounded-full h-3 w-3"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0 0 10px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.3)",
                  }}
                />
              </span>
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                Plataforma
              </span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.05}>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-[1.05]">
              <span className="text-white">Funciones que cambian todo</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FFD6C4 0%, #FFFFFF 50%, #FFD6C4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                para ambos lados
              </span>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.1}>
            <div className="w-16 h-1 rounded-full mx-auto mt-6" style={{ background: "rgba(255,255,255,0.3)" }} />
          </RevealWrapper>
        </div>

        {/* Row 1: Para empresas */}
        <div className="mt-16">
          <RevealWrapper delay={0.12}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white text-lg font-bold">🏢 Para empresas</span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {empresaFeatures.map((feat, index) => (
              <RevealWrapper key={feat.title} delay={0.15 + index * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: feat.lightBg }}
                  >
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1.5" style={{ color: "#1A0E05" }}>
                    {feat.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7A5C48" }}>
                    {feat.description}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

        {/* Row 2: Para trabajadores */}
        <div className="mt-12">
          <RevealWrapper delay={0.12}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white text-lg font-bold">👨‍🍳 Para trabajadores</span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trabajadorFeatures.map((feat, index) => (
              <RevealWrapper key={feat.title} delay={0.15 + index * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: feat.lightBg }}
                  >
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1.5" style={{ color: "#1A0E05" }}>
                    {feat.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7A5C48" }}>
                    {feat.description}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

        {/* Bottom accent card */}
        <RevealWrapper delay={0.5}>
          <div
            className="mt-14 rounded-3xl p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Assistant */}
              <div className="flex gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  🤖
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">Asistente IA integrado</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Cada usuario tiene un asistente inteligente que automatiza búsquedas, gestiona invitaciones y optimiza resultados. El futuro de la contratación gastronómica.
                  </p>
                </div>
              </div>

              {/* WhatsApp Broadcast */}
              <div className="flex gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  💬
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">WhatsApp Broadcast</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Envía ofertas masivas a tu base de candidatos con respuesta automática y confirmación instantánea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
