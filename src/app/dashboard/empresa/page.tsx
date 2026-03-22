"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";

// ── Matches recientes data ──────────────────────────────────────────────────
const MATCHES = [
  {
    name: "Diego Morales",
    role: "Garzon",
    score: 95,
    avatar: "https://i.pravatar.cc/100?img=12",
    status: "accepted" as const,
    time: "Hace 15 min",
  },
  {
    name: "Camila Reyes",
    role: "Chef de partida",
    score: 88,
    avatar: "https://i.pravatar.cc/100?img=25",
    status: "pending" as const,
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

// ── Talento recurrente data ─────────────────────────────────────────────────
const RECURRING_TALENT = [
  { name: "Martin Garcia", role: "Chef", shifts: 12, avatar: "https://i.pravatar.cc/100?img=33" },
  { name: "Sofia Reyes", role: "Sommelier", shifts: 8, avatar: "https://i.pravatar.cc/100?img=44" },
  { name: "Lucas Herrera", role: "Barman", shifts: 6, avatar: "https://i.pravatar.cc/100?img=53" },
];

// ── Activity data ───────────────────────────────────────────────────────────
const ACTIVITY = [
  { text: "Diego M. acepto tu invitacion", time: "Hace 15 min", dotColor: "bg-emerald-500" },
  { text: "Nueva busqueda: Garzon turno noche", time: "Hace 1 hora", dotColor: "bg-[#E85520]" },
  { text: "Camila R. completo turno Chef", time: "Hace 3 horas", dotColor: "bg-blue-500" },
  { text: "Tu busqueda expiro: Barman sabado", time: "Hace 1 dia", dotColor: "bg-gray-400" },
];

// ── Available worker avatars ────────────────────────────────────────────────
const AVAILABLE_AVATARS = [
  "https://i.pravatar.cc/100?img=15",
  "https://i.pravatar.cc/100?img=22",
  "https://i.pravatar.cc/100?img=36",
  "https://i.pravatar.cc/100?img=41",
];

// ── Main Page ───────────────────────────────────────────────────────────────
export default function EmpresaDashboard() {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedWhen, setSelectedWhen] = useState("");

  return (
    <div className="flex h-screen bg-[#F8F6F3] overflow-hidden">
      {/* Sidebar */}
      <Sidebar type="empresa" activeItem="Dashboard" />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto lg:ml-64">
        <div className="p-4 sm:p-8 pt-20 lg:pt-8 space-y-6">

          {/* ── TopBar ──────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#1A0E05]">Buenos dias, La Mision</h1>
              <p className="text-[#7A5C48] mt-1 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                3 profesionales activos cerca de ti
              </p>
            </div>
          </div>

          {/* ── TWO BIG ACTION CARDS ────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card A: Ver talento disponible */}
            <a
              href="/dashboard/empresa/buscar"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition cursor-pointer block group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#E85520]/10 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[#E85520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h2 className="text-xl font-bold text-[#1A0E05] mb-1">Ver talento disponible</h2>
              <p className="text-sm text-[#7A5C48] mb-4">Explora profesionales activos en tu zona ahora mismo</p>

              {/* Live indicator */}
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-700">12 activos cerca</span>
              </div>

              {/* Mini avatars row */}
              <div className="flex items-center gap-2 mb-5">
                {AVAILABLE_AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Profesional disponible"
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-white -ml-1 first:ml-0"
                  />
                ))}
                <span className="text-xs text-[#7A5C48] ml-1">+8 mas</span>
              </div>

              {/* CTA */}
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#E85520] hover:bg-[#D04A1A] text-white font-semibold rounded-xl transition-colors group-hover:bg-[#D04A1A]">
                Explorar ahora
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            {/* Card B: Necesito alguien */}
            <div className="bg-gradient-to-br from-[#E85520] to-[#C04515] rounded-3xl p-8 shadow-lg text-white cursor-pointer">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h2 className="text-xl font-bold text-white mb-1">Necesito alguien</h2>
              <p className="text-sm text-white/80 mb-5">Describe lo que necesitas y recibe matches en segundos</p>

              {/* Quick form */}
              <div className="space-y-3 mb-4">
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-[#1A0E05] text-sm font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="">Seleccionar rol...</option>
                  <option value="garzon">Garzon</option>
                  <option value="chef">Chef</option>
                  <option value="barman">Barman</option>
                  <option value="sommelier">Sommelier</option>
                  <option value="runner">Runner</option>
                  <option value="hostess">Hostess</option>
                </select>
                <select
                  value={selectedWhen}
                  onChange={(e) => setSelectedWhen(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white text-[#1A0E05] text-sm font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="">Cuando lo necesitas?</option>
                  <option value="hoy">Hoy</option>
                  <option value="manana">Manana</option>
                  <option value="semana">Esta semana</option>
                </select>
                <button
                  onClick={() => window.location.href = "/dashboard/empresa/necesidad"}
                  className="w-full px-6 py-3 bg-white text-[#E85520] font-bold rounded-xl hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                >
                  Buscar matches
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              <p className="text-xs text-white/60">El sistema encuentra los mejores profesionales automaticamente</p>
            </div>
          </div>

          {/* ── MIDDLE + RIGHT GRID ─────────────────────────────────── */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* ── Left / Middle Column ────────────────────────────────── */}
            <div className="xl:col-span-2 space-y-6">

              {/* Busquedas activas */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-[#1A0E05]">Mis busquedas activas</h2>
                  <a href="/dashboard/empresa/turnos" className="text-sm text-[#E85520] font-semibold hover:underline">
                    Ver todas
                  </a>
                </div>
                <div className="space-y-4">
                  {/* Search card 1 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[#F8F6F3] gap-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                        <span className="text-lg">🍽</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1A0E05]">Garzon para hoy 19:00</p>
                        <p className="text-xs text-emerald-600 font-medium mt-0.5">3 matches encontrados</p>
                      </div>
                    </div>
                    <a
                      href="/dashboard/empresa/turnos"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#E85520] text-white text-xs font-semibold rounded-lg hover:bg-[#D04A1A] transition-colors"
                    >
                      Ver matches
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>

                  {/* Search card 2 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[#F8F6F3] gap-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                        <span className="text-lg">👨‍🍳</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1A0E05]">Chef turno manana</p>
                        <p className="text-xs text-amber-600 font-medium mt-0.5 flex items-center gap-1">
                          Buscando
                          <span className="inline-flex gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                            <span className="w-1 h-1 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                            <span className="w-1 h-1 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                          </span>
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-[#7A5C48] font-medium px-4 py-2 bg-white rounded-lg border border-[#F0E6DC]">
                      0 matches aun
                    </span>
                  </div>
                </div>
              </div>

              {/* Matches recientes */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-[#1A0E05]">Matches recientes</h2>
                </div>
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
                        {/* Score badge */}
                        <span className="shrink-0 px-2.5 py-1 bg-[#E85520]/10 text-[#E85520] text-xs font-bold rounded-lg">
                          {match.score}%
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        {match.status === "accepted" && (
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
                              WhatsApp
                            </a>
                          </>
                        )}
                        {match.status === "pending" && (
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                              Esperando respuesta
                            </span>
                            <span className="text-xs text-[#7A5C48]">{match.time}</span>
                          </div>
                        )}
                        {match.status === "rejected" && (
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 text-xs font-semibold rounded-full border border-red-200">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Rechazo
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Column ────────────────────────────────────────── */}
            <div className="space-y-6">

              {/* Estadisticas rapidas */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <h2 className="text-lg font-bold text-[#1A0E05] mb-4">Estadisticas rapidas</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "2", label: "Busquedas activas", color: "text-[#E85520]" },
                    { value: "5", label: "Matches hoy", color: "text-blue-600" },
                    { value: "1", label: "Turnos confirmados", color: "text-emerald-600" },
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
        </div>
      </main>
    </div>
  );
}
