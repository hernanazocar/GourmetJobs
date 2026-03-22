"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

// -- Mock Data ----------------------------------------------------------------

const invitaciones = [
  {
    restaurant: "La Misión",
    tipo: "Restaurante italiano",
    zona: "Providencia",
    rol: "Garzón",
    horario: "Hoy 19:00 -- 01:00",
    pago: "Tarifa: $4.000 - $5.000/hr (referencial)",
    matchReason: "Cerca de ti -- Compatible con tu experiencia",
    hace: "Hace 15 min",
    tiempoRestante: 28,
    tiempoTotal: 60,
  },
  {
    restaurant: "Osaka Nikkei",
    tipo: "Restaurante japonés",
    zona: "Las Condes",
    rol: "Barman",
    horario: "Hoy 20:00 -- 02:00",
    pago: "Tarifa: $4.000 - $6.000/hr (referencial)",
    matchReason: "Zona habitual -- Alta tasa de aceptación",
    hace: "Hace 32 min",
    tiempoRestante: 18,
    tiempoTotal: 60,
  },
  {
    restaurant: "Borago",
    tipo: "Fine dining",
    zona: "Vitacura",
    rol: "Garzón",
    horario: "Mañana 19:00 -- 00:00",
    pago: "Tarifa: $5.000 - $7.000/hr (referencial)",
    matchReason: "Te invitaron antes -- Excelente puntualidad",
    hace: "Hace 1 hora",
    tiempoRestante: 45,
    tiempoTotal: 60,
  },
];

const turnosConfirmados = [
  {
    restaurant: "La Misión",
    rol: "Garzón",
    fecha: "Viernes 22 Mar",
    horario: "19:00 -- 01:00",
  },
  {
    restaurant: "Liguria",
    rol: "Garzón",
    fecha: "Sábado 23 Mar",
    horario: "12:00 -- 17:00",
  },
];

const recontrataciones = [
  { restaurant: "Borago", veces: 3 },
  { restaurant: "La Misión", veces: 5 },
];

// -- Main Page ----------------------------------------------------------------

export default function TrabajadorDashboard() {
  const [disponibilidad, setDisponibilidad] = useState("ahora");

  const pendingCount = invitaciones.length;

  return (
    <div className="flex min-h-screen bg-[#F8F6F3]">
      <Sidebar type="trabajador" activeItem="Inicio" />

      <main className="ml-0 lg:ml-64 flex-1 p-6 lg:p-8 bg-[#F8F6F3] min-h-screen">
        {/* ── 1. TopBar ──────────────────────────────────────────────────── */}
        <div className="mb-6 pt-14 lg:pt-0">
          <h1 className="text-2xl font-bold text-[#1A0E05]">Hola, Diego</h1>
          {pendingCount > 0 ? (
            <p className="text-[#E85520] font-medium mt-1">
              Tienes {pendingCount} invitaciones pendientes
            </p>
          ) : (
            <p className="text-[#7A5C48] mt-1">
              El sistema está buscando oportunidades para ti
            </p>
          )}
        </div>

        {/* ── 2. Availability Toggle ────────────────────────── */}
        <div
          className="rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
          style={{
            background: disponibilidad !== "no" ? "#f0fdf4" : "#ffffff",
            border: disponibilidad !== "no" ? "2px solid #bbf7d0" : "2px solid #e5e7eb",
          }}
        >
          <div className="flex items-center gap-4">
            {/* Toggle switch */}
            <button
              onClick={() => setDisponibilidad(disponibilidad === "no" ? "ahora" : "no")}
              className="relative w-14 h-8 rounded-full transition-all duration-300"
              style={{ background: disponibilidad !== "no" ? "#22c55e" : "#d1d5db" }}
            >
              <span
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300"
                style={{ left: disponibilidad !== "no" ? "28px" : "4px" }}
              />
            </button>
            <div>
              <p className="font-bold text-base flex items-center gap-2" style={{ color: disponibilidad !== "no" ? "#15803d" : "#6b7280" }}>
                {disponibilidad !== "no" ? (
                  <>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#4ade80" }} />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#22c55e" }} />
                    </span>
                    {disponibilidad === "ahora" ? "Disponible ahora" : disponibilidad === "hoy" ? "Disponible hoy" : "Disponible esta semana"}
                  </>
                ) : (
                  <>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#9ca3af" }} />
                    No disponible
                  </>
                )}
              </p>
              <p className="text-xs text-[#7A5C48] mt-0.5">
                {disponibilidad !== "no" ? "Las empresas pueden verte e invitarte" : "No apareces en búsquedas"}
              </p>
            </div>
          </div>

          {disponibilidad !== "no" && (
            <select
              value={disponibilidad}
              onChange={(e) => setDisponibilidad(e.target.value)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium focus:outline-none"
              style={{ background: "#ffffff", border: "1px solid #bbf7d0", color: "#15803d" }}
            >
              <option value="ahora">Disponible ahora</option>
              <option value="hoy">Disponible hoy</option>
              <option value="semana">Esta semana</option>
            </select>
          )}
        </div>

        {/* ── 3. Invitaciones (HERO CONTENT) ─────────────────────────────── */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-xl font-bold text-[#1A0E05]">
              Oportunidades para ti
            </h2>
            {pendingCount > 0 && (
              <span className="text-xs font-semibold text-white bg-[#E85520] px-2.5 py-0.5 rounded-full">
                {pendingCount}
              </span>
            )}
          </div>
          <p className="text-sm text-[#7A5C48] mb-5">
            El sistema encontró estos turnos basados en tu perfil
          </p>

          {invitaciones.length > 0 ? (
            <div className="space-y-4">
              {invitaciones.map((inv, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#E85520]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Restaurant info */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="font-bold text-[#1A0E05]">
                          {inv.restaurant}
                        </h3>
                        <span className="text-xs text-[#7A5C48]">
                          {inv.tipo}
                        </span>
                        <span className="text-xs text-[#9A7A60]">
                          / {inv.zona}
                        </span>
                      </div>

                      {/* Role badge */}
                      <span className="inline-block text-sm font-semibold text-[#E85520] bg-orange-50 px-3 py-0.5 rounded-full mb-3">
                        {inv.rol}
                      </span>

                      {/* Details */}
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-[#7A5C48] mb-2">
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {inv.horario}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                          </svg>
                          {inv.pago}
                        </span>
                      </div>

                      {/* Match reason */}
                      <p className="text-xs text-[#7A5C48] bg-[#F8F6F3] rounded-lg px-3 py-1.5 inline-block mb-3">
                        {inv.matchReason}
                      </p>

                      {/* Timer bar */}
                      <div className="mb-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-[#E85520]">
                            Responde en {inv.tiempoRestante} min
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-2 rounded-full transition-all"
                            style={{
                              width: `${(inv.tiempoRestante / inv.tiempoTotal) * 100}%`,
                              background:
                                "linear-gradient(to right, #E85520, #f59e0b)",
                            }}
                          />
                        </div>
                      </div>

                      {/* Timestamp */}
                      <p className="text-xs text-[#9A7A60] mt-2">{inv.hace}</p>
                    </div>

                  </div>

                  {/* Action buttons — full width below */}
                  <div className="flex gap-3 mt-4 pt-4 border-t border-[#F0E6DC]">
                    <button className="flex-1 px-6 py-3.5 text-sm font-bold text-white rounded-xl transition shadow-sm" style={{ background: "#22c55e" }}>
                      ✓ Aceptar invitación
                    </button>
                    <button className="px-6 py-3.5 text-sm font-medium text-[#7A5C48] border border-[#E0D0C0] hover:bg-[#F8F6F3] rounded-xl transition">
                      No me interesa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 shadow-sm text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#F8F6F3] flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-[#7A5C48]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[#1A0E05] mb-1">
                Sin oportunidades nuevas por ahora
              </h3>
              <p className="text-sm text-[#7A5C48] mb-3">
                El sistema está buscando turnos que se ajusten a tu perfil
              </p>
              <p className="text-xs text-[#9A7A60]">
                Tip: Mantén tu perfil actualizado para recibir más invitaciones
              </p>
            </div>
          )}
        </div>

        {/* ── 4. Mis Turnos Confirmados ──────────────────────────────────── */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#1A0E05]">
              Mis turnos confirmados
            </h2>
            <a
              href="/dashboard/trabajador/misturnos"
              className="text-sm font-medium text-[#E85520] hover:underline"
            >
              Ver todos &rarr;
            </a>
          </div>
          <div className="space-y-3">
            {turnosConfirmados.map((turno, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A0E05] text-sm">
                      {turno.restaurant}
                    </p>
                    <p className="text-xs text-[#7A5C48]">
                      {turno.rol} &middot; {turno.fecha} &middot; {turno.horario}
                    </p>
                  </div>
                </div>
                <span className="inline-flex px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                  Confirmado
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. Two Columns ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* Left column (wider) */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-[#1A0E05] mb-5">
                Tu actividad esta semana
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Empresas te vieron */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F6F3]">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#1A0E05]">3</p>
                    <p className="text-xs text-[#7A5C48]">empresas te vieron</p>
                  </div>
                </div>

                {/* Busquedas */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F6F3]">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#1A0E05]">8</p>
                    <p className="text-xs text-[#7A5C48]">búsquedas te incluyeron</p>
                  </div>
                </div>

                {/* Tiempo de respuesta */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F6F3]">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#1A0E05]">12 min</p>
                    <p className="text-xs text-[#7A5C48]">tiempo de respuesta</p>
                  </div>
                </div>

                {/* Invitaciones recibidas */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F6F3]">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-[#E85520]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#1A0E05]">2</p>
                    <p className="text-xs text-[#7A5C48]">invitaciones recibidas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* GourmetScore */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-[#1A0E05] mb-4">GourmetScore</h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-[#E85520]">4.7</span>
                <span className="text-base text-[#9A7A60] ml-1">/ 5.0</span>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#7A5C48]">Puntualidad</span>
                    <span className="text-sm font-bold text-[#1A0E05]">98%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "98%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#7A5C48]">Aceptación</span>
                    <span className="text-sm font-bold text-[#1A0E05]">94%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-[#E85520] h-2 rounded-full"
                      style={{ width: "94%" }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#9A7A60] text-center">
                Tu score mejora con cada turno completado
              </p>
            </div>

            {/* Restaurantes que te buscan */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-[#1A0E05] mb-1">
                Restaurantes que te buscan
              </h3>
              <p className="text-xs text-[#9A7A60] mb-4">
                Te han invitado antes
              </p>
              <div className="space-y-3">
                {recontrataciones.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8F6F3]"
                  >
                    <div>
                      <p className="font-semibold text-sm text-[#1A0E05]">
                        {r.restaurant}
                      </p>
                      <p className="text-xs text-[#9A7A60]">
                        Te invitó {r.veces} veces
                      </p>
                    </div>
                    <button className="text-xs font-medium text-[#E85520] border border-[#E85520] hover:bg-[#E85520] hover:text-white px-3 py-1.5 rounded-lg transition">
                      Contactar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── 6. Profile Completeness ────────────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-[#1A0E05] mb-1">
              Tu perfil está al 70%
            </p>
            <p className="text-sm text-[#7A5C48] mb-3">
              Complétalo para recibir más oportunidades
            </p>
            <div className="w-full bg-gray-100 rounded-full h-2.5 max-w-md">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r from-[#E85520] to-[#f59e0b]"
                style={{ width: "70%" }}
              />
            </div>
          </div>
          <a
            href="/dashboard/trabajador/perfil"
            className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-[#E85520] hover:underline"
          >
            Completar perfil &rarr;
          </a>
        </div>
      </main>
    </div>
  );
}
