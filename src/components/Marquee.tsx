"use client";

import Image from "next/image";
import { useState } from "react";
import { marqueeWorkers } from "@/lib/data";

type Worker = (typeof marqueeWorkers)[number];

function ProfileModal({
  worker,
  onClose,
}: {
  worker: Worker;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-card rounded-[28px] max-w-md w-full p-8 border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-text3 hover:text-white transition text-xl"
        >
          &times;
        </button>

        <div className="flex items-center gap-5">
          <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 ring-2 ring-orange/50 ring-offset-4 ring-offset-card">
            <Image
              src={worker.img}
              alt={worker.name}
              width={80}
              height={80}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{worker.name}</h3>
            <p className="text-text2 text-sm mt-0.5">{worker.role}</p>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-text3 text-xs">📍 {worker.zone}</span>
              {worker.availability === "now" ? (
                <span className="bg-opal text-orange px-2 py-0.5 rounded-full text-[11px] font-semibold">
                  Disponible ahora
                </span>
              ) : (
                <span className="gpal text-green px-2 py-0.5 rounded-full text-[11px] font-semibold">
                  Disponible hoy
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-7">
          {[
            { label: "Puntualidad", value: `${worker.puntualidad}%` },
            { label: "Rating", value: worker.rating.toFixed(1) },
            { label: "Turnos", value: String(worker.turnos) },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-bg2 rounded-xl py-3 text-center border border-border"
            >
              <div className="text-lg font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-text3 text-[11px] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-xs text-text3 font-semibold uppercase tracking-wider mb-2">
            Habilidades
          </h4>
          <div className="flex flex-wrap gap-2">
            {worker.skills.map((skill) => (
              <span
                key={skill}
                className="bg-bg2 text-text2 text-xs px-3 py-1.5 rounded-full border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `Hola ${worker.name}, te contacto por GourmetJobs para un turno.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white py-3.5 rounded-[14px] font-semibold text-sm text-center hover:brightness-110 transition"
          >
            💬 WhatsApp
          </a>
          <button className="flex-1 bg-orange text-white py-3.5 rounded-[14px] font-semibold text-sm text-center hover:bg-orange2 transition">
            📋 Contratar turno
          </button>
        </div>
      </div>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-orange" : "text-[#E0D0C0]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-[#7A5C48] text-xs ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function Marquee() {
  const doubled = [...marqueeWorkers, ...marqueeWorkers];
  const [selected, setSelected] = useState<Worker | null>(null);

  return (
    <>
      <section className="sec-dark py-16 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 mb-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2.5 bg-white/15 rounded-full px-4 py-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e]"></span>
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#22c55e", boxShadow: "0 0 10px #22c55e, 0 0 20px rgba(34,197,94,0.4)" }}></span>
              </span>
              <span className="text-white text-xs font-bold uppercase tracking-wider">{marqueeWorkers.length} profesionales activos ahora</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-[-0.03em]">
              Talento verificado, <span className="gradient-text">disponible ahora</span>
            </h3>
            <p className="text-white/60 text-base mt-3 max-w-lg mx-auto">
              Profesionales evaluados con score de confiabilidad. Haz click en cualquier perfil para ver su historial y contactarlo al instante.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex animate-marquee">
          {doubled.map((worker, i) => (
            <div key={i} className="shrink-0 px-2.5">
              <button
                onClick={() => setSelected(worker)}
                className="group w-[280px] bg-white rounded-[22px] p-5 text-left transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 cursor-pointer shadow-lg"
                style={{
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {/* Top: avatar + info */}
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-orange/30 ring-offset-2 ring-offset-white">
                      <Image
                        src={worker.img}
                        alt={worker.name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </div>
                    {worker.availability === "now" && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[#1A0E05] font-bold text-sm truncate">
                      {worker.name}
                    </h4>
                    <p className="text-orange text-xs font-semibold mt-0.5">
                      {worker.role}
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-[#7A5C48] text-[11px]">
                      <span>📍</span>
                      <span>{worker.zone}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-3">
                  <StarRating rating={worker.rating} />
                </div>

                {/* Stats row */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex-1 bg-white rounded-lg py-2 text-center">
                    <div className="text-[#1A0E05] font-bold text-sm">
                      {worker.turnos}
                    </div>
                    <div className="text-[#7A5C48] text-[10px]">turnos</div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg py-2 text-center">
                    <div className="text-[#1A0E05] font-bold text-sm">
                      {worker.puntualidad}%
                    </div>
                    <div className="text-[#7A5C48] text-[10px]">puntualidad</div>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {worker.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-orange/10 text-orange text-[10px] font-medium px-2 py-0.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA hint */}
                <div className="mt-4 flex items-center justify-between">
                  {worker.availability === "now" ? (
                    <span className="bg-green-50 text-green-600 px-2.5 py-1 rounded-full text-[11px] font-semibold">
                      ● Disponible ahora
                    </span>
                  ) : (
                    <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full text-[11px] font-semibold">
                      ● Disponible hoy
                    </span>
                  )}
                  <span className="text-[#7A5C48] text-xs group-hover:text-orange transition-colors">
                    Ver perfil →
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 mt-12 text-center">
          <p className="text-white text-lg font-semibold">
            Cada perfil tiene score verificado, historial real y disponibilidad en tiempo real.
          </p>
          <p className="text-white/60 text-sm mt-2 mb-6">
            Sin CVs, sin entrevistas. Solo talento listo para trabajar hoy.
          </p>
          <a
            href="#precios"
            className="inline-flex items-center gap-2 bg-white text-orange px-8 py-4 rounded-2xl font-bold text-base hover:bg-cream transition-all duration-300 hover:scale-[1.02]"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
          >
            Publica tu primer turno gratis
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {selected && (
        <ProfileModal worker={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
