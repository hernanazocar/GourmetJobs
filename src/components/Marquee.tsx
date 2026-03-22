"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { marqueeWorkers, WorkerCategory } from "@/lib/data";
import { useSearch } from "@/lib/SearchContext";

type Worker = (typeof marqueeWorkers)[number];

const filters: { label: string; value: WorkerCategory | "all" | "hot" }[] = [
  { label: "Todos", value: "all" },
  { label: "Garzones", value: "garzones" },
  { label: "Cocina", value: "cocina" },
  { label: "Baristas", value: "baristas" },
  { label: "Administración", value: "admin" },
  { label: "Turnos hoy 🔥", value: "hot" },
];

function Badge({ type }: { type: "fast" | "demand" | "new" | null }) {
  if (!type) return null;
  const config = {
    fast: { text: "⚡ Respuesta rápida", bg: "bg-blue-50", color: "text-blue-600" },
    demand: { text: "🔥 Alta demanda", bg: "bg-orange/10", color: "text-orange" },
    new: { text: "🟡 Nuevo", bg: "bg-amber-50", color: "text-amber-600" },
  };
  const c = config[type];
  return <span className={`${c.bg} ${c.color} text-[10px] font-bold px-2 py-0.5 rounded-full`}>{c.text}</span>;
}

function ProfileModal({ worker, onClose }: { worker: Worker; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header con foto de fondo */}
        <div className="relative h-32 bg-gradient-to-br from-orange to-[#C04515]">
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center text-white hover:bg-black/40 transition z-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="absolute -bottom-10 left-8">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
              <Image src={worker.img} alt={worker.name} width={96} height={96} className="object-cover w-full h-full" unoptimized />
            </div>
          </div>
          {/* Badge */}
          <div className="absolute top-4 left-4">
            {worker.availability === "now" ? (
              <span className="bg-green-500 text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                Disponible ahora
              </span>
            ) : (
              <span className="bg-amber-500 text-white text-[11px] font-bold px-3 py-1 rounded-full">Disponible esta semana</span>
            )}
          </div>
          {worker.badge && (
            <div className="absolute bottom-4 right-4"><Badge type={worker.badge} /></div>
          )}
        </div>

        {/* Body */}
        <div className="px-8 pt-14 pb-8">
          {/* Name + Role */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-[#1A0E05]">{worker.name}</h3>
              <p className="text-orange text-base font-semibold mt-0.5">{worker.role}</p>
            </div>
            <div className="flex items-center gap-1 bg-[#FFF0E6] px-3 py-1.5 rounded-xl">
              <svg className="w-4 h-4 text-orange fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span className="text-[#1A0E05] font-bold text-sm">{worker.rating}</span>
            </div>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mt-3 text-[#7A5C48] text-sm">
            <span className="flex items-center gap-1">📍 {worker.zone}</span>
            <span className="flex items-center gap-1">⏱️ {worker.experience}</span>
          </div>

          {/* Tagline */}
          <div className="mt-4 p-4 rounded-2xl bg-[#FFF8F2] border border-[rgba(232,85,32,0.08)]">
            <p className="text-[#7A5C48] text-sm leading-relaxed italic">&ldquo;{worker.tagline}&rdquo;</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mt-5">
            {[
              { label: "Tarifa ref.", value: worker.price, icon: "💰" },
              { label: "Horario", value: worker.hours.split(" ").slice(1).join(" "), icon: "🕒" },
              { label: "Turnos", value: "127+", icon: "📋" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl py-3.5 text-center bg-[#FFF0E6]">
                <div className="text-lg mb-0.5">{s.icon}</div>
                <div className="text-sm font-bold text-[#1A0E05]">{s.value}</div>
                <div className="text-[#9A7A60] text-[10px] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mt-5">
            <p className="text-[#9A7A60] text-[10px] font-bold uppercase tracking-wider mb-2">Habilidades</p>
            <div className="flex flex-wrap gap-2">
              {worker.skills.map((s) => (
                <span key={s} className="bg-orange/10 text-orange text-xs font-semibold px-3 py-1.5 rounded-full">{s}</span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 mt-6">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Hola ${worker.name}, te contacto por GourmetJobs para un turno.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl font-bold text-sm text-center hover:brightness-110 transition flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp
            </a>
            <button className="flex-1 bg-orange text-white py-4 rounded-2xl font-bold text-sm hover:bg-orange2 transition flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              Ver perfil
            </button>
            <button className="flex-1 bg-[#1A0E05] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#2A1A10] transition flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              Invitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Marquee() {
  const { search, isFiltering } = useSearch();
  const [selected, setSelected] = useState<Worker | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const workers = useMemo(() => {
    let result = marqueeWorkers;

    if (isFiltering) {
      result = result.filter((w) => {
        const matchRole = !search.role || w.role.toLowerCase().includes(search.role.toLowerCase());
        const matchZone = !search.where || w.zone.toLowerCase().includes(search.where.toLowerCase());
        return matchRole && matchZone;
      });
    }

    if (activeFilter !== "all") {
      if (activeFilter === "hot") {
        result = result.filter((w) => w.availability === "now");
      } else {
        result = result.filter((w) => w.category === activeFilter);
      }
    }

    return result.length > 0 ? result : marqueeWorkers;
  }, [search, isFiltering, activeFilter]);


  return (
    <>
      <section id="talento" className="sec-dark py-16">
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8 px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Talento disponible <span className="gradient-text">ahora</span>
            </h2>
            <p className="text-white/60 text-base mt-3 max-w-lg mx-auto">
              Explora talento activo listo para trabajar hoy
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 px-4">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 ${
                  activeFilter === f.value
                    ? "bg-white text-orange shadow-lg"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Activity indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e]"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]"></span>
            </span>
            <span className="text-white/70 text-sm font-medium">
              {workers.length} profesionales conectados ahora
            </span>
          </div>

          {/* Carousel — auto-scrolling */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-5 px-4" style={{ animationDuration: "12s" }}>
              {[...workers, ...workers].map((worker, i) => (
                <div key={`${worker.name}-${i}`} className="shrink-0 w-[320px]">
                  <div
                    onClick={() => setSelected(worker)}
                    className="group bg-white rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-lg h-full flex flex-col"
                  >
                    {/* Avatar + name + role */}
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-orange/20 ring-offset-2 ring-offset-white">
                          <Image src={worker.img} alt={worker.name} width={56} height={56} className="object-cover w-full h-full" unoptimized />
                        </div>
                        {worker.availability === "now" && (
                          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#22c55e] rounded-full border-2 border-white" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[#1A0E05] font-bold text-base truncate">{worker.name}</h4>
                        <p className="text-orange text-sm font-semibold">{worker.role}</p>
                        <p className="text-[#7A5C48] text-xs">📍 {worker.zone}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-0.5 mt-2.5">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} className={`w-3 h-3 fill-current ${s <= Math.round(worker.rating) ? "text-orange" : "text-[#E0D0C0]"}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                      <span className="text-[#7A5C48] text-[10px] ml-1">{worker.rating}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-2 mt-2.5">
                      <div className="flex-1 rounded-lg py-1.5 text-center" style={{ background: "#FFE4CC" }}>
                        <div className="text-[#1A0E05] font-bold text-xs">{worker.experience}</div>
                        <div className="text-[#7A5C48] text-[9px]">experiencia</div>
                      </div>
                      <div className="flex-1 rounded-lg py-1.5 text-center" style={{ background: "#FFE4CC" }}>
                        <div className="text-[#1A0E05] font-bold text-xs">{worker.price}</div>
                        <div className="text-[#7A5C48] text-[9px]">tarifa ref.</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {worker.skills.map(s => (
                        <span key={s} className="text-orange text-[9px] font-medium bg-orange/10 px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>

                    {/* Badge + CTA */}
                    <div className="flex items-center justify-between mt-auto pt-2.5">
                      <div>
                        {worker.badge ? (
                          <Badge type={worker.badge} />
                        ) : worker.availability === "now" ? (
                          <span className="text-[#22c55e] text-[10px] font-semibold">● Disponible hoy</span>
                        ) : (
                          <span className="text-amber-500 text-[10px] font-semibold">● Esta semana</span>
                        )}
                      </div>
                      <span className="text-[#7A5C48] text-[10px] group-hover:text-orange transition">Ver perfil →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10 px-4">
            <a
              href="/dashboard/empresa/buscar"
              className="inline-flex items-center gap-2 bg-white text-orange px-8 py-4 rounded-2xl font-bold text-base hover:bg-cream transition-all duration-300 hover:scale-[1.02] shadow-xl"
            >
              Ver todo el talento
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-white/40 text-xs mt-3">+3,200 profesionales registrados</p>
          </div>
        </div>
      </section>

      {selected && <ProfileModal worker={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
