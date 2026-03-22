"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";

// -- Matches recientes data --------------------------------------------------
const MATCHES = [
  {
    name: "Diego Morales",
    role: "Garzón",
    score: 95,
    avatar: "https://i.pravatar.cc/100?img=12",
    status: "confirmed" as const,
    time: "Hace 15 min",
  },
  {
    name: "Camila Reyes",
    role: "Chef de partida",
    score: 88,
    avatar: "https://i.pravatar.cc/100?img=25",
    status: "waiting" as const,
    time: "Hace 20 min",
  },
  {
    name: "Valentina Soto",
    role: "Barman",
    score: 82,
    avatar: "https://i.pravatar.cc/100?img=47",
    status: "rejected" as const,
    time: "Hace 1 hora",
  },
];

// -- Talento recurrente data --------------------------------------------------
const RECURRING_TALENT = [
  { name: "Martín García", role: "Chef", shifts: 12, avatar: "https://i.pravatar.cc/100?img=33" },
  { name: "Sofía Reyes", role: "Sommelier", shifts: 8, avatar: "https://i.pravatar.cc/100?img=44" },
  { name: "Lucas Herrera", role: "Barman", shifts: 6, avatar: "https://i.pravatar.cc/100?img=53" },
];

// -- Activity data ------------------------------------------------------------
const ACTIVITY = [
  { text: "Diego M. aceptó tu invitación", time: "Hace 15 min", dotColor: "bg-emerald-500" },
  { text: "Nueva búsqueda: Garzón turno noche", time: "Hace 1 hora", dotColor: "bg-[#E85520]" },
  { text: "Camila R. completó turno Chef", time: "Hace 3 horas", dotColor: "bg-blue-500" },
  { text: "Tu búsqueda expiró: Barman sábado", time: "Hace 1 día", dotColor: "bg-gray-400" },
];

// -- Active searches data -----------------------------------------------------
const ACTIVE_SEARCHES = [
  {
    icon: "\ud83c\udf7d",
    title: "Garzón para hoy 19:00",
    statusText: "3 matches encontrados",
    statusColor: "text-emerald-600",
    progress: "4 invitados · 1 aceptó · 0 rechazó",
    searching: false,
    bgIcon: "bg-emerald-100",
  },
  {
    icon: "\ud83d\udc68\u200d\ud83c\udf73",
    title: "Chef turno mañana",
    statusText: "Buscando...",
    statusColor: "text-amber-600",
    progress: "2 invitados · 0 aceptó · 0 rechazó",
    searching: true,
    bgIcon: "bg-amber-100",
  },
  {
    icon: "\ud83c\udf78",
    title: "Barman esta semana viernes",
    statusText: "1 match encontrado",
    statusColor: "text-blue-600",
    progress: "3 invitados · 1 aceptó · 1 rechazó",
    searching: false,
    bgIcon: "bg-blue-100",
  },
];

// -- Main Page ----------------------------------------------------------------
export default function EmpresaDashboard() {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedWhen, setSelectedWhen] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [selectedZona, setSelectedZona] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8F6F3]">
      <Sidebar type="empresa" activeItem="Inicio" />

      <main className="flex-1 ml-0 lg:ml-64 p-6 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* ── 1. TopBar ──────────────────────────────────────────── */}
          <div className="flex items-center justify-between pt-14 lg:pt-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#1A0E05]">
                Buenos días, La Misión
              </h1>
              <p className="text-[#7A5C48] mt-1">
                El sistema está buscando talento para ti
              </p>
            </div>
            <button className="relative p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-6 h-6 text-[#1A0E05]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E85520] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* ── 2. HERO CARD — Crear necesidad (PRIMARY ACTION) ──── */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-extrabold text-[#1A0E05]">
              ¿Qué necesitas hoy?
            </h2>
            <p className="text-[#7A5C48] mt-1 mb-6">
              Describe tu necesidad y el sistema encontrará los mejores profesionales
            </p>

            {/* Form: horizontal on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              {/* Rol */}
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#F0E6DC] bg-[#F8F6F3] text-[#1A0E05] text-sm font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E85520]/30 focus:border-[#E85520]"
              >
                <option value="">Rol</option>
                <option value="garzon">Garzón</option>
                <option value="chef">Chef</option>
                <option value="barman">Barman</option>
                <option value="mesero">Mesero</option>
                <option value="pastelero">Pastelero</option>
                <option value="hostess">Hostess</option>
                <option value="sommelier">Sommelier</option>
                <option value="runner">Runner</option>
                <option value="otro">Otro</option>
              </select>

              {/* Cuándo */}
              <select
                value={selectedWhen}
                onChange={(e) => setSelectedWhen(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#F0E6DC] bg-[#F8F6F3] text-[#1A0E05] text-sm font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E85520]/30 focus:border-[#E85520]"
              >
                <option value="">Cuándo</option>
                <option value="hoy">Hoy</option>
                <option value="manana">Mañana</option>
                <option value="semana">Esta semana</option>
              </select>

              {/* Cantidad */}
              <input
                type="number"
                min={1}
                max={10}
                value={cantidad}
                onChange={(e) => setCantidad(Math.min(10, Math.max(1, Number(e.target.value))))}
                placeholder="Cantidad"
                className="w-full px-4 py-3 rounded-xl border border-[#F0E6DC] bg-[#F8F6F3] text-[#1A0E05] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#E85520]/30 focus:border-[#E85520]"
              />

              {/* Zona */}
              <select
                value={selectedZona}
                onChange={(e) => setSelectedZona(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#F0E6DC] bg-[#F8F6F3] text-[#1A0E05] text-sm font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E85520]/30 focus:border-[#E85520]"
              >
                <option value="">Zona</option>
                <option value="providencia">Providencia</option>
                <option value="las-condes">Las Condes</option>
                <option value="vitacura">Vitacura</option>
                <option value="santiago-centro">Santiago Centro</option>
                <option value="nunoa">Ñuñoa</option>
                <option value="la-reina">La Reina</option>
                <option value="otro">Otro</option>
              </select>

              {/* Submit button */}
              <button className="w-full px-6 py-3 bg-[#E85520] hover:bg-[#D04A1A] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                Buscar profesionales
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            <p className="text-xs text-[#7A5C48] mb-4">
              ⚡ El sistema busca en toda la base, activa profesionales y te muestra los mejores matches
            </p>

            {/* Urgency toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsUrgent(!isUrgent)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isUrgent ? "bg-[#E85520]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isUrgent ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className="text-sm text-[#1A0E05] font-medium">
                \ud83d\udd25 Es urgente (necesito en menos de 2 horas)
              </span>
            </div>
          </div>

          {/* ── 3. MIS BÚSQUEDAS ACTIVAS ───────────────────────── */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-[#1A0E05]">Mis búsquedas activas</h2>
              <span className="text-xs text-[#7A5C48] bg-[#F8F6F3] px-3 py-1 rounded-full font-medium">
                {ACTIVE_SEARCHES.length} activas
              </span>
            </div>
            <div className="space-y-4">
              {ACTIVE_SEARCHES.map((search, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[#F8F6F3] gap-3"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className={`w-10 h-10 rounded-xl ${search.bgIcon} flex items-center justify-center shrink-0`}>
                      <span className="text-lg">{search.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#1A0E05]">{search.title}</p>
                      <p className={`text-xs font-medium mt-0.5 flex items-center gap-1 ${search.statusColor}`}>
                        {search.statusText}
                        {search.searching && (
                          <span className="inline-flex gap-0.5 ml-1">
                            <span className="w-1 h-1 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                            <span className="w-1 h-1 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                            <span className="w-1 h-1 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                          </span>
                        )}
                      </p>
                      <p className="text-[11px] text-[#7A5C48] mt-0.5">{search.progress}</p>
                    </div>
                  </div>
                  <a
                    href="/dashboard/empresa/turnos"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#E85520] text-white text-xs font-semibold rounded-lg hover:bg-[#D04A1A] transition-colors shrink-0"
                  >
                    Ver matches
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── 4 & 5. TWO COLUMN LAYOUT ─────────────────────────── */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* ── Left column (wider) — Matches recientes ──────── */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <h2 className="text-lg font-bold text-[#1A0E05] mb-5">Matches recientes</h2>
                <div className="space-y-4">
                  {MATCHES.map((match) => (
                    <div
                      key={match.name}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[#F8F6F3] gap-3"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <img
                          src={match.avatar}
                          alt={match.name}
                          className="w-11 h-11 rounded-full object-cover ring-2 ring-white shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#1A0E05] truncate">{match.name}</p>
                          <p className="text-xs text-[#7A5C48]">{match.role}</p>
                        </div>
                        <span className="shrink-0 px-2.5 py-1 bg-[#E85520]/10 text-[#E85520] text-xs font-bold rounded-lg">
                          {match.score}%
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        {match.status === "confirmed" && (
                          <>
                            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              Confirmado
                            </span>
                            <a
                              href="#"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                              </svg>
                              Contactar WhatsApp
                            </a>
                          </>
                        )}
                        {match.status === "waiting" && (
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                              Esperando
                            </span>
                            <span className="text-xs text-[#7A5C48]">{match.time}</span>
                          </div>
                        )}
                        {match.status === "rejected" && (
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 text-xs font-semibold rounded-full border border-red-200">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Rechazó
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right column ─────────────────────────────────────── */}
            <div className="space-y-6">

              {/* Estadísticas rápidas */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <h2 className="text-lg font-bold text-[#1A0E05] mb-4">Estadísticas rápidas</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "2", label: "Búsquedas activas", color: "text-[#E85520]" },
                    { value: "5", label: "Matches hoy", color: "text-blue-600" },
                    { value: "1", label: "Confirmados", color: "text-emerald-600" },
                    { value: "4.8", label: "Rating", color: "text-purple-600" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-[#F8F6F3]">
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      <p className="text-xs text-[#7A5C48] mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Talento recurrente */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-[#1A0E05]">Talento recurrente</h2>
                  <a href="/dashboard/empresa/equipo" className="text-sm text-[#E85520] font-semibold hover:underline">
                    Ver todos
                  </a>
                </div>
                <div className="space-y-3">
                  {RECURRING_TALENT.map((person) => (
                    <div
                      key={person.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F6F3]/60 hover:bg-[#F5F0EB] transition-colors"
                    >
                      <img
                        src={person.avatar}
                        alt={person.name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-white shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#1A0E05] truncate">{person.name}</p>
                        <p className="text-xs text-[#7A5C48]">{person.role} · {person.shifts} turnos juntos</p>
                      </div>
                      <button className="shrink-0 px-3 py-1.5 bg-[#E85520]/10 text-[#E85520] text-xs font-semibold rounded-lg hover:bg-[#E85520]/20 transition-colors">
                        Re-invitar
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actividad reciente */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <h2 className="text-lg font-bold text-[#1A0E05] mb-5">Actividad reciente</h2>
                <div className="space-y-0">
                  {ACTIVITY.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 py-3.5 ${
                        i < ACTIVITY.length - 1 ? "border-b border-[#F0E6DC]" : ""
                      }`}
                    >
                      <div className="relative mt-1.5">
                        <div className={`w-2.5 h-2.5 rounded-full ${item.dotColor}`} />
                        {i < ACTIVITY.length - 1 && (
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-6 bg-[#F0E6DC]" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[#1A0E05]">{item.text}</p>
                        <p className="text-xs text-[#7A5C48] mt-0.5">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── 6. SECONDARY: Ver talento activo (small card) ────── */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F0E6DC]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1A0E05]">
                  También puedes explorar talento activo ahora
                </p>
                <p className="text-xs text-[#7A5C48] flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  12 profesionales disponibles
                </p>
              </div>
            </div>
            <a
              href="/dashboard/empresa/buscar"
              className="text-sm text-[#E85520] font-semibold hover:underline inline-flex items-center gap-1"
            >
              Explorar
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
