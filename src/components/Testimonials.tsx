"use client";

import Image from "next/image";
import RevealWrapper from "./ui/RevealWrapper";


const testimonials = [
  {
    quote:
      "En 10 minutos tenía un barman confirmado para el viernes. Antes eso me tomaba una semana.",
    name: "María José Contreras",
    role: "Gerente, La Misión",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    quote:
      "El score de confiabilidad cambió todo. Ya no contrato a ciegas, sé exactamente qué esperar.",
    name: "Roberto Sánchez",
    role: "Chef Ejecutivo, Osaka",
    avatar: "https://i.pravatar.cc/80?img=33",
  },
  {
    quote:
      "Trabajo cuando quiero y cobro el mismo día. GourmetJobs me dio la flexibilidad que necesitaba.",
    name: "Daniela Vega",
    role: "Sommelier freelance",
    avatar: "https://i.pravatar.cc/80?img=26",
  },
  {
    quote:
      "Pasamos de perder $200K mensuales en turnos descubiertos a cero. Literalmente se paga solo.",
    name: "Andrés Moreno",
    role: "Director Ops, Grupo Liguria",
    avatar: "https://i.pravatar.cc/80?img=53",
  },
  {
    quote:
      "La app es increíble. Actualizo mi disponibilidad por WhatsApp y me llegan ofertas al tiro.",
    name: "Francisca Riquelme",
    role: "Chef de partida",
    avatar: "https://i.pravatar.cc/80?img=44",
  },
  {
    quote:
      "Tenemos 4 locales y GourmetJobs maneja la dotación flexible de todos. Imprescindible.",
    name: "Tomás Aguirre",
    role: "CEO, Peumayen Group",
    avatar: "https://i.pravatar.cc/80?img=59",
  },
];

function StarIcon() {
  return (
    <svg
      className="w-4 h-4 fill-current text-orange"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="sec-light py-24 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex justify-center">
          <span className="label inline-block px-4 py-1.5 rounded-full text-xs bg-orange/10 text-orange">
            TESTIMONIOS
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-center">
          <span className="text-[#1A0E05]">Lo que dicen</span>
          <br />
          <span className="gradient-text-orange">nuestros usuarios</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <RevealWrapper key={i} delay={i * 0.08}>
              <div className="bg-white/90 rounded-[28px] p-7 border border-light-border transition-all duration-300 hover:-translate-y-1">
                <div className="flex gap-1">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>

                <p className="text-[#7A5C48] text-sm leading-relaxed mt-4">
                  <span className="text-orange text-3xl font-bold block mb-1">
                    &ldquo;
                  </span>
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="text-[#1A0E05] text-sm font-semibold">{t.name}</p>
                    <p className="text-[#9A7A60] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
