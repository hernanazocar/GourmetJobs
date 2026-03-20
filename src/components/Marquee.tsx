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
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-orange" : "text-white/65/30"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-white/75 text-xs ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function Marquee() {
  const doubled = [...marqueeWorkers, ...marqueeWorkers];
  const [selected, setSelected] = useState<Worker | null>(null);

  return (
    <>
      <section className="sec-dark border-y border-border py-10 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 mb-6 flex items-center justify-between">
          <div>
            <span className="label text-orange text-xs">En vivo</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1 tracking-[-0.03em]">
              Talento disponible <span className="gradient-text">ahora</span>
            </h3>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/65 text-sm">
            <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
            {marqueeWorkers.length} profesionales activos
          </div>
        </div>

        <div className="relative z-10 flex animate-marquee">
          {doubled.map((worker, i) => (
            <div key={i} className="shrink-0 px-2.5">
              <button
                onClick={() => setSelected(worker)}
                className="group w-[280px] bg-card rounded-[22px] p-5 text-left transition-all duration-300 hover:bg-cream hover:scale-[1.03] hover:-translate-y-1 cursor-pointer "
                style={{
                  border: "1px solid rgba(232,85,32,0.1)",
                }}
              >
                {/* Top: avatar + info */}
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-orange/40 ring-offset-2 ring-offset-white">
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
                    <h4 className="text-white font-bold text-sm truncate">
                      {worker.name}
                    </h4>
                    <p className="text-orange text-xs font-medium mt-0.5">
                      {worker.role}
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-white/65 text-[11px]">
                      <span>📍</span>
                      <span>{worker.zone}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-4">
                  <StarRating rating={worker.rating} />
                </div>

                {/* Stats row */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex-1 bg-light-warm rounded-lg py-2 text-center border border-border">
                    <div className="text-white font-bold text-sm">
                      {worker.turnos}
                    </div>
                    <div className="text-white/65 text-[10px]">turnos</div>
                  </div>
                  <div className="flex-1 bg-light-warm rounded-lg py-2 text-center border border-border">
                    <div className="text-white font-bold text-sm">
                      {worker.puntualidad}%
                    </div>
                    <div className="text-white/65 text-[10px]">puntualidad</div>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {worker.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-opal text-orange text-[10px] font-medium px-2 py-0.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA hint */}
                <div className="mt-4 flex items-center justify-between">
                  {worker.availability === "now" ? (
                    <span className="bg-opal text-orange px-2.5 py-1 rounded-full text-[11px] font-semibold">
                      ● Disponible ahora
                    </span>
                  ) : (
                    <span className="gpal text-green px-2.5 py-1 rounded-full text-[11px] font-semibold">
                      ● Disponible hoy
                    </span>
                  )}
                  <span className="text-white/65 text-xs group-hover:text-orange transition-colors">
                    Ver perfil →
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 mt-8 text-center">
          <p className="text-white/65 text-sm">
            Profesionales verificados listos para cubrir tu turno hoy.{" "}
            <a href="#precios" className="text-orange font-semibold hover:text-orange2 transition underline underline-offset-4">
              Publica tu primer turno gratis →
            </a>
          </p>
        </div>
      </section>

      {selected && (
        <ProfileModal worker={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
