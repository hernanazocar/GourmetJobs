"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

// ── Mock data ────────────────────────────────────────────────────────────────

const WORKERS = [
  {
    id: 1,
    name: "Camila Rojas",
    role: "Garzón",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 4.9,
    reviews: 47,
    experience: 4,
    zone: "Providencia",
    responseTime: 5,
    priceRange: "$7.000 - $10.000/hr",
    available: "now" as const,
    skills: ["Atención VIP", "Inglés", "Coctelería básica"],
    fastResponse: true,
    highDemand: true,
  },
  {
    id: 2,
    name: "Diego Morales",
    role: "Chef",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4.7,
    reviews: 32,
    experience: 6,
    zone: "Las Condes",
    responseTime: 12,
    priceRange: "$12.000 - $18.000/hr",
    available: "now" as const,
    skills: ["Cocina italiana", "Pastelería", "Sushi"],
    fastResponse: false,
    highDemand: true,
  },
  {
    id: 3,
    name: "Valentina Díaz",
    role: "Barman",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5.0,
    reviews: 61,
    experience: 3,
    zone: "Providencia",
    responseTime: 3,
    priceRange: "$8.000 - $12.000/hr",
    available: "now" as const,
    skills: ["Coctelería clásica", "Flair", "Vinos"],
    fastResponse: true,
    highDemand: false,
  },
  {
    id: 4,
    name: "Matías Sepúlveda",
    role: "Mesero",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 4.5,
    reviews: 19,
    experience: 2,
    zone: "Ñuñoa",
    responseTime: 8,
    priceRange: "$6.000 - $9.000/hr",
    available: "today" as const,
    skills: ["Banquetería", "Protocolo"],
    fastResponse: false,
    highDemand: false,
  },
  {
    id: 5,
    name: "Isidora Fuentes",
    role: "Pastelero",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 4.8,
    reviews: 38,
    experience: 5,
    zone: "Vitacura",
    responseTime: 10,
    priceRange: "$10.000 - $14.000/hr",
    available: "now" as const,
    skills: ["Repostería fina", "Chocolate", "Decoración"],
    fastResponse: false,
    highDemand: true,
  },
  {
    id: 6,
    name: "Tomás Herrera",
    role: "Garzón",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 4.0,
    reviews: 12,
    experience: 1,
    zone: "Santiago Centro",
    responseTime: 15,
    priceRange: "$5.000 - $8.000/hr",
    available: "today" as const,
    skills: ["Atención general", "POS"],
    fastResponse: false,
    highDemand: false,
  },
  {
    id: 7,
    name: "Francisca Muñoz",
    role: "Chef",
    avatar: "https://i.pravatar.cc/150?img=16",
    rating: 4.6,
    reviews: 28,
    experience: 7,
    zone: "Las Condes",
    responseTime: 6,
    priceRange: "$11.000 - $16.000/hr",
    available: "now" as const,
    skills: ["Cocina peruana", "Mariscos", "Menú degustación"],
    fastResponse: true,
    highDemand: false,
  },
  {
    id: 8,
    name: "Sebastián Lagos",
    role: "Barman",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 4.3,
    reviews: 22,
    experience: 3,
    zone: "Providencia",
    responseTime: 7,
    priceRange: "$8.000 - $11.000/hr",
    available: "now" as const,
    skills: ["Mixología", "Cerveza artesanal", "Café"],
    fastResponse: false,
    highDemand: false,
  },
];

const ROLES = ["Todos", "Garzón", "Chef", "Barman", "Mesero", "Pastelero"];
const ZONES = ["Todas", "Providencia", "Las Condes", "Ñuñoa", "Vitacura", "Santiago Centro"];
const AVAILABILITY_OPTIONS = ["Ahora", "Hoy", "Esta semana"];
const EXPERIENCE_OPTIONS = ["Cualquiera", "1+ años", "3+ años", "5+ años"];
const SORT_OPTIONS = ["Más cercano", "Mejor rating", "Más rápido"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-[#7A5C48] ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function BuscarTalentoPage() {
  const [role, setRole] = useState("Todos");
  const [zone, setZone] = useState("Todas");
  const [availability, setAvailability] = useState("Ahora");
  const [experience, setExperience] = useState("Cualquiera");
  const [sort, setSort] = useState("Mejor rating");

  const filtered = WORKERS.filter((w) => {
    if (role !== "Todos" && w.role !== role) return false;
    if (zone !== "Todas" && w.zone !== zone) return false;
    if (availability === "Ahora" && w.available !== "now") return false;
    if (experience === "1+ años" && w.experience < 1) return false;
    if (experience === "3+ años" && w.experience < 3) return false;
    if (experience === "5+ años" && w.experience < 5) return false;
    return true;
  }).sort((a, b) => {
    if (sort === "Mejor rating") return b.rating - a.rating;
    if (sort === "Más rápido") return a.responseTime - b.responseTime;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Sidebar type="empresa" activeItem="Buscar talento" />

      <main className="ml-0 lg:ml-64 p-6 lg:p-8">
        {/* TopBar */}
        <div className="mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#1A0E05]">Talento disponible ahora</h1>
              <p className="text-[#7A5C48] mt-1">{filtered.length} profesionales activos en tu zona</p>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-[#7A5C48]">Actualizado en tiempo real</span>
            </div>
          </div>
        </div>

        {/* Filters bar */}
        <div className="sticky top-0 z-10 bg-white rounded-2xl p-4 shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-3">
            {/* Role */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-[#FFF5EE] rounded-xl px-4 py-2.5 text-sm text-[#1A0E05] border-none outline-none cursor-pointer"
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>{r === "Todos" ? "Cargo: Todos" : r}</option>
              ))}
            </select>

            {/* Zone */}
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="bg-[#FFF5EE] rounded-xl px-4 py-2.5 text-sm text-[#1A0E05] border-none outline-none cursor-pointer"
            >
              {ZONES.map((z) => (
                <option key={z} value={z}>{z === "Todas" ? "Zona: Todas" : z}</option>
              ))}
            </select>

            {/* Availability pills */}
            <div className="flex bg-[#FFF5EE] rounded-xl p-1 gap-1">
              {AVAILABILITY_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setAvailability(opt)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    availability === opt
                      ? "bg-[#E85520] text-white shadow-sm"
                      : "text-[#7A5C48] hover:bg-white/60"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Experience */}
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="bg-[#FFF5EE] rounded-xl px-4 py-2.5 text-sm text-[#1A0E05] border-none outline-none cursor-pointer"
            >
              {EXPERIENCE_OPTIONS.map((e) => (
                <option key={e} value={e}>{e === "Cualquiera" ? "Exp: Cualquiera" : `Exp: ${e}`}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-[#FFF5EE] rounded-xl px-4 py-2.5 text-sm text-[#1A0E05] border-none outline-none cursor-pointer ml-auto"
            >
              {SORT_OPTIONS.map((s) => (
                <option key={s} value={s}>Ordenar: {s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((worker) => (
              <div
                key={worker.id}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow relative"
              >
                {/* Availability badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      worker.available === "now"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        worker.available === "now" ? "bg-emerald-500" : "bg-amber-500"
                      }`}
                    />
                    {worker.available === "now" ? "Disponible ahora" : "Hoy"}
                  </span>
                </div>

                {/* Avatar + info */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={worker.avatar}
                    alt={worker.name}
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                  <div className="min-w-0 pt-1">
                    <h3 className="text-[#1A0E05] font-semibold text-lg truncate">{worker.name}</h3>
                    <p className="text-[#E85520] font-medium text-sm">{worker.role}</p>
                    <StarRating rating={worker.rating} />
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#7A5C48] mb-3">
                  <span>&#9201; {worker.experience} años exp</span>
                  <span>&#128205; {worker.zone}</span>
                  <span>&#9889; Responde en {worker.responseTime} min</span>
                </div>

                {/* Price range */}
                <div className="mb-3">
                  <span className="text-base font-bold text-[#1A0E05]">
                    {worker.priceRange}
                  </span>
                  <span className="text-xs text-[#9A7A60] ml-1">(referencial)</span>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {worker.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#FFF5EE] text-[#E85520] text-xs font-medium px-2.5 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Special badges */}
                {(worker.fastResponse || worker.highDemand) && (
                  <div className="flex gap-2 mb-4">
                    {worker.fastResponse && (
                      <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium border border-blue-200">
                        &#9889; Respuesta rápida
                      </span>
                    )}
                    {worker.highDemand && (
                      <span className="text-xs bg-red-50 text-red-700 px-2.5 py-1 rounded-full font-medium border border-red-200">
                        &#128293; Alta demanda
                      </span>
                    )}
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 rounded-xl border-2 border-[#E85520] text-[#E85520] font-semibold text-sm hover:bg-[#FFF5EE] transition-colors">
                    Ver perfil
                  </button>
                  <button className="flex-1 py-2.5 rounded-xl bg-[#E85520] text-white font-semibold text-sm hover:bg-[#d04a18] transition-colors">
                    Invitar
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-[#FFF5EE] flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-[#E85520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#1A0E05] mb-2">
              No hay trabajadores disponibles con estos filtros
            </h3>
            <p className="text-[#7A5C48] max-w-md">
              Prueba ampliar tu búsqueda cambiando los filtros de cargo, zona o disponibilidad.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
