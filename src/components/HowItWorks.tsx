"use client";

import { useState } from "react";
import { howItWorks, howItWorksWorkers } from "@/lib/data";
import RevealWrapper from "./ui/RevealWrapper";

const stepColors = [
  { bg: "#E85520", light: "#FFF0E6" },
  { bg: "#16a34a", light: "#ECFDF5" },
  { bg: "#7C3AED", light: "#F3F0FF" },
];

/* ── Visual elements unique to each step ── */

function EmpresaVisual({ index }: { index: number }) {
  if (index === 0) {
    // Mini form mockup
    return (
      <div className="mt-5 rounded-2xl p-4 text-left text-xs" style={{ background: "#FFFFFF", border: "1px solid #F5E0D0" }}>
        <label className="block text-[#7A5C48] font-semibold mb-1">Rol necesario</label>
        <div className="rounded-lg px-3 py-2 mb-3 text-[#1A0E05] font-medium" style={{ background: "#fff", border: "1px solid #E8D5C4" }}>
          🍳 Chef de partida
        </div>
        <label className="block text-[#7A5C48] font-semibold mb-1">¿Cuándo?</label>
        <div className="rounded-lg px-3 py-2 text-[#1A0E05] font-medium" style={{ background: "#fff", border: "1px solid #E8D5C4" }}>
          📅 Hoy, 18:00 – 23:00
        </div>
      </div>
    );
  }
  if (index === 1) {
    // Mini avatar circles with score badges
    const avatars = [
      { score: "95%", color: "#16a34a", img: "https://i.pravatar.cc/150?img=1" },
      { score: "88%", color: "#E85520", img: "https://i.pravatar.cc/150?img=5" },
      { score: "82%", color: "#7C3AED", img: "https://i.pravatar.cc/150?img=12" },
    ];
    return (
      <div className="mt-5 flex items-center justify-center gap-4">
        {avatars.map((a, i) => (
          <div key={i} className="relative">
            <div
              className="w-14 h-14 rounded-full overflow-hidden shadow-lg"
              style={{ border: `3px solid ${a.color}` }}
            >
              <img src={a.img} alt="avatar" className="w-full h-full object-cover" />
            </div>
            <span
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-extrabold text-white px-2 py-0.5 rounded-full"
              style={{ background: a.color }}
            >
              {a.score}
            </span>
          </div>
        ))}
      </div>
    );
  }
  // Step 3: checkmark + "Turno confirmado"
  return (
    <div className="mt-5 flex flex-col items-center gap-2">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center animate-bounce"
        style={{ background: "#ECFDF5" }}
      >
        <svg className="w-8 h-8" style={{ color: "#16a34a" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#ECFDF5", color: "#16a34a" }}>
        Turno confirmado ✓
      </span>
    </div>
  );
}

function TrabajadorVisual({ index }: { index: number }) {
  if (index === 0) {
    // Mini profile card preview
    return (
      <div className="mt-5 rounded-2xl p-4 text-left text-xs" style={{ background: "#FFFFFF", border: "1px solid #F5E0D0" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden" style={{ border: "2px solid #E85520" }}>
            <img src="https://i.pravatar.cc/150?img=11" alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-bold text-[#1A0E05]">Diego M.</div>
            <div className="text-[#7A5C48]">Barman · 4 años exp</div>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "#FFFFFF", color: "#E85520" }}>Coctelería</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "#FFFFFF", color: "#E85520" }}>Mixología</span>
        </div>
        <div className="mt-2 flex items-center gap-1 text-[#7A5C48]">
          ⭐ <span className="font-bold text-[#1A0E05]">4.7</span> · Las Condes
        </div>
      </div>
    );
  }
  if (index === 1) {
    // Notification bell with badge
    return (
      <div className="mt-5 flex flex-col items-center gap-2">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" style={{ background: "#FFFFFF" }}>
            🔔
          </div>
          <span
            className="absolute -top-2 -right-2 text-[10px] font-extrabold text-white px-2 py-0.5 rounded-full"
            style={{ background: "#E85520" }}
          >
            3
          </span>
        </div>
        <span className="text-xs font-bold" style={{ color: "#E85520" }}>3 invitaciones nuevas</span>
      </div>
    );
  }
  // Step 3: toggle switch mockup
  return (
    <div className="mt-5 flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-7 rounded-full p-0.5 flex items-center" style={{ background: "#16a34a" }}>
          <div className="ml-auto w-6 h-6 rounded-full bg-white shadow-md" />
        </div>
        <span className="text-xs font-bold text-[#1A0E05]">Disponible</span>
      </div>
      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#ECFDF5", color: "#16a34a" }}>
        Turno confirmado ✓
      </span>
    </div>
  );
}

/* ── Arrow between cards (desktop) ── */
function ArrowSeparator() {
  return (
    <div className="hidden md:flex items-center justify-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E85520" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  const [tab, setTab] = useState<"empresa" | "trabajador">("empresa");
  const steps = tab === "empresa" ? howItWorks : howItWorksWorkers;

  const empresaTitles = ["Describe tu necesidad", "Recibe matches automáticos", "Confirma y listo"];
  const trabajadorTitles = ["Crea tu perfil", "El sistema te encuentra", "Acepta y trabaja"];
  const titles = tab === "empresa" ? empresaTitles : trabajadorTitles;

  return (
    <section id="como-funciona" className="sec-light py-28 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <RevealWrapper>
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-5" style={{ background: "rgba(232,85,32,0.1)" }}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full" style={{ background: "#E85520" }} />
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#E85520" }} />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#E85520" }}>
                Cómo funciona
              </span>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.05}>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              <span className="text-[#1A0E05]">Del registro al primer turno</span>
              <br />
              <span className="gradient-text-orange">en minutos</span>
            </h2>
          </RevealWrapper>

          {/* Tab switcher */}
          <RevealWrapper delay={0.12}>
            <div
              className="inline-flex rounded-2xl p-1.5 shadow-lg mt-10"
              style={{ background: "#fff", border: "1px solid rgba(232,85,32,0.1)" }}
            >
              <button
                onClick={() => setTab("empresa")}
                className="px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300"
                style={{
                  background: tab === "empresa" ? "#E85520" : "transparent",
                  color: tab === "empresa" ? "#fff" : "#7A5C48",
                }}
              >
                🏢 Para empresas
              </button>
              <button
                onClick={() => setTab("trabajador")}
                className="px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300"
                style={{
                  background: tab === "trabajador" ? "#E85520" : "transparent",
                  color: tab === "trabajador" ? "#fff" : "#7A5C48",
                }}
              >
                👨‍🍳 Para trabajadores
              </button>
            </div>
          </RevealWrapper>
        </div>

        {/* Steps */}
        <div className="mt-16">
          {/* Desktop: cards with arrows between them */}
          <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
            {steps.map((step, index) => {
              const color = stepColors[index];
              return (
                <RevealWrapper key={`${tab}-${step.number}`} delay={0.15 + index * 0.1} className="contents">
                  <div className="rounded-3xl p-6 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-center flex flex-col" style={{ background: stepColors[index].light, border: `2px solid ${stepColors[index].bg}15` }}>
                    {/* Step number + icon row */}
                    <div className="flex items-center justify-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-extrabold shadow-md"
                        style={{ background: color.bg }}
                      >
                        {step.number}
                      </div>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                        style={{ background: color.light }}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#1A0E05] mt-3">{titles[index]}</h3>

                    {/* Description */}
                    <p className="text-[#7A5C48] text-sm leading-relaxed mt-3">{step.description}</p>

                    {/* Chip */}
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full text-white" style={{ background: color.bg }}>
                        {step.chip}
                      </span>
                    </div>

                    {/* Visual mockup */}
                    <div className="mt-auto pt-4">
                      {tab === "empresa"
                        ? <EmpresaVisual index={index} />
                        : <TrabajadorVisual index={index} />}
                    </div>
                  </div>
                  {index < 2 && <ArrowSeparator />}
                </RevealWrapper>
              );
            })}
          </div>

          {/* Mobile: stacked cards */}
          <div className="md:hidden flex flex-col gap-8">
            {steps.map((step, index) => {
              const color = stepColors[index];
              return (
                <RevealWrapper key={`${tab}-mob-${step.number}`} delay={0.15 + index * 0.1}>
                  <div className="rounded-3xl p-6 shadow-xl text-center" style={{ background: color.light, border: `2px solid ${color.bg}15` }}>
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-extrabold mx-auto shadow-lg"
                      style={{ background: color.bg, boxShadow: `0 8px 24px ${color.bg}40` }}
                    >
                      {step.number}
                    </div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mx-auto mt-4"
                      style={{ background: color.light }}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A0E05] mt-4">{titles[index]}</h3>
                    <p className="text-[#7A5C48] text-sm leading-relaxed mt-3">{step.description}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: color.bg }}>
                        {step.chip}
                      </span>
                    </div>
                    <div className="mt-4 pt-4" style={{ borderTop: "1px solid #F0E6DC" }}>
                      {tab === "empresa"
                        ? <EmpresaVisual index={index} />
                        : <TrabajadorVisual index={index} />}
                    </div>
                  </div>
                </RevealWrapper>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <RevealWrapper delay={0.6}>
          <div className="text-center mt-14">
            <a
              href="/registro"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-all duration-300"
              style={{ background: "#E85520", boxShadow: "0 8px 30px rgba(232,85,32,0.3)" }}
            >
              Empieza gratis ahora
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-[#9A7A60] text-sm mt-4">Sin tarjeta de crédito · 2 min de configuración</p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
