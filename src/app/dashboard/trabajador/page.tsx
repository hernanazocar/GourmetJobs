"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

// ── Mock Data ───────────────────────────────────────────────────────────────

const invitaciones = [
  {
    restaurant: "La Mision",
    tipo: "Restaurante italiano",
    zona: "Providencia",
    rol: "Garzon",
    horario: "Hoy 19:00 — 01:00",
    pago: "$4.500/hr (referencial)",
    hace: "Hace 15 min",
    tiempoRestante: 28,
    tiempoTotal: 60,
  },
  {
    restaurant: "Osaka Nikkei",
    tipo: "Restaurante japones",
    zona: "Las Condes",
    rol: "Barman",
    horario: "Hoy 20:00 — 02:00",
    pago: "$5.000/hr (referencial)",
    hace: "Hace 32 min",
    tiempoRestante: 18,
    tiempoTotal: 60,
  },
  {
    restaurant: "Borago",
    tipo: "Fine dining",
    zona: "Vitacura",
    rol: "Garzon",
    horario: "Manana 19:00 — 00:00",
    pago: "$6.000/hr (referencial)",
    hace: "Hace 1 hora",
    tiempoRestante: 45,
    tiempoTotal: 60,
  },
];

const turnosConfirmados = [
  {
    restaurant: "La Mision",
    rol: "Garzon",
    fecha: "Viernes 22 Mar",
    horario: "19:00 — 01:00",
  },
  {
    restaurant: "Liguria",
    rol: "Garzon",
    fecha: "Sabado 23 Mar",
    horario: "12:00 — 17:00",
  },
];

const recontrataciones = [
  { restaurant: "Borago", veces: 3 },
  { restaurant: "La Mision", veces: 5 },
];

// ── Main Page ───────────────────────────────────────────────────────────────

export default function TrabajadorDashboard() {
  const [activo, setActivo] = useState(false);
  const [disponibilidadOpcion, setDisponibilidadOpcion] = useState("ahora");

  return (
    <div className="flex min-h-screen bg-[#F8F6F3]">
      <Sidebar type="trabajador" activeItem="Dashboard" />

      <main className="ml-0 lg:ml-64 flex-1 p-6 lg:p-8 bg-[#F8F6F3] min-h-screen">
        {/* TopBar */}
        <div className="mb-8 pt-14 lg:pt-0">
          <TopBar
            title="Hola, Diego"
            subtitle={
              activo
                ? "Estas visible para restaurantes"
                : "Activa tu perfil para recibir invitaciones"
            }
          />
        </div>

        {/* ── THE TOGGLE — Hero Activation Card ─────────────────────────── */}
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center mb-8">
          {!activo ? (
            <>
              {/* Inactive State */}
              <div className="flex justify-center mb-5">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center animate-pulse">
                  <svg
                    className="w-16 h-16 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-[#7A5C48] mb-1">
                Estas invisible
              </h2>
              <p className="text-[#9A7A60] mb-6">
                Las empresas no pueden verte
              </p>
              <button
                onClick={() => setActivo(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-2xl text-lg font-bold shadow-lg transition-all hover:shadow-xl active:scale-95"
              >
                Activarme ahora
              </button>
              <p className="text-sm text-[#9A7A60] mt-4">
                Al activarte, restaurantes cercanos podran invitarte a turnos
              </p>
            </>
          ) : (
            <>
              {/* Active State */}
              <div className="flex justify-center mb-5">
                <div className="relative">
                  {/* Green glow */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full bg-green-400/30 animate-ping" />
                  <div className="absolute -inset-3 rounded-full bg-green-400/20 blur-md" />
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center animate-pulse shadow-lg shadow-green-300/50">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-green-600 mb-1">
                Estas visible
              </h2>
              <p className="text-green-500/70 mb-5">
                Las empresas pueden verte y contactarte
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#7A5C48] mb-6">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500" />3
                  empresas te vieron hoy
                </span>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E85520]" />2
                  invitaciones pendientes
                </span>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Activo hace 15 min
                </span>
              </div>

              {/* Availability dropdown */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <select
                  value={disponibilidadOpcion}
                  onChange={(e) => setDisponibilidadOpcion(e.target.value)}
                  className="bg-green-50 border border-green-200 text-green-700 px-4 py-2.5 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  <option value="ahora">Disponible ahora</option>
                  <option value="hoy">Disponible hoy</option>
                  <option value="semana">Disponible esta semana</option>
                </select>
              </div>

              <button
                onClick={() => setActivo(false)}
                className="border-2 border-red-400 text-red-500 hover:bg-red-50 px-8 py-3 rounded-xl font-medium transition-all"
              >
                Desactivarme
              </button>
            </>
          )}
        </div>

        {/* ── Two Columns Below Toggle ──────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column (wider) */}
          <div className="xl:col-span-2 space-y-6">
            {/* Invitaciones recibidas */}
            <div>
              <h2 className="text-lg font-bold text-[#1A0E05] flex items-center gap-2 mb-4">
                Invitaciones
                <span className="text-xs font-medium text-white bg-[#E85520] px-2.5 py-0.5 rounded-full">
                  {invitaciones.length}
                </span>
              </h2>

              {invitaciones.length > 0 ? (
                <div className="space-y-4">
                  {invitaciones.map((inv, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-[#E85520]"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          {/* Restaurant info */}
                          <div className="flex items-center gap-2 mb-1">
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

                          {/* Role */}
                          <span className="inline-block text-sm font-semibold text-[#E85520] bg-orange-50 px-3 py-0.5 rounded-full mb-2">
                            {inv.rol}
                          </span>

                          {/* Details */}
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#7A5C48] mb-2">
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

                          {/* Timestamp */}
                          <p className="text-xs text-[#9A7A60] mb-3">
                            {inv.hace}
                          </p>

                          {/* Countdown timer */}
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
                        </div>

                        {/* Action buttons */}
                        <div className="flex sm:flex-col items-center gap-2 sm:min-w-[120px]">
                          <button className="flex-1 sm:w-full px-6 py-3 text-sm font-bold text-white bg-green-500 hover:bg-green-600 rounded-xl transition shadow-sm">
                            Aceptar
                          </button>
                          <button className="flex-1 sm:w-full px-6 py-3 text-sm font-medium text-[#7A5C48] border border-gray-200 hover:bg-gray-50 rounded-xl transition">
                            Rechazar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                  <p className="text-[#9A7A60]">
                    Sin invitaciones por ahora. Mantente activo para recibir
                    mas.
                  </p>
                </div>
              )}
            </div>

            {/* Mis turnos confirmados */}
            <div>
              <h2 className="text-lg font-bold text-[#1A0E05] mb-4">
                Mis turnos confirmados
              </h2>
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
                          {turno.rol} — {turno.restaurant}
                        </p>
                        <p className="text-xs text-[#7A5C48]">
                          {turno.fecha} &middot; {turno.horario}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                        Confirmado
                      </span>
                      <a
                        href="#"
                        className="text-xs text-[#E85520] font-medium hover:underline"
                      >
                        Ver detalles
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Mi actividad */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-[#1A0E05] mb-4">Mi actividad</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                    <svg
                      className="w-4.5 h-4.5 text-blue-500"
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
                  <p className="text-sm text-[#7A5C48]">
                    <span className="font-semibold text-[#1A0E05]">3</span>{" "}
                    empresas vieron tu perfil hoy
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center">
                    <svg
                      className="w-4.5 h-4.5 text-purple-500"
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
                  <p className="text-sm text-[#7A5C48]">
                    Tu perfil aparecio en{" "}
                    <span className="font-semibold text-[#1A0E05]">8</span>{" "}
                    busquedas
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                    <svg
                      className="w-4.5 h-4.5 text-green-500"
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
                  <p className="text-sm text-[#7A5C48]">
                    Tiempo de respuesta promedio:{" "}
                    <span className="font-semibold text-[#1A0E05]">12 min</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Re-contrataciones */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-[#1A0E05] mb-1">
                Re-contrataciones
              </h3>
              <p className="text-sm text-[#9A7A60] mb-4">
                Restaurantes que te quieren de vuelta
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
                        Te invito {r.veces} veces
                      </p>
                    </div>
                    <button className="text-xs font-medium text-[#E85520] border border-[#E85520] hover:bg-[#E85520] hover:text-white px-3 py-1.5 rounded-lg transition">
                      Contactar
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* GourmetScore */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-[#1A0E05] mb-4">GourmetScore</h3>
              <div className="text-center mb-5">
                <span className="text-5xl font-bold text-[#E85520]">4.7</span>
                <span className="text-lg text-[#9A7A60] ml-1">/ 5.0</span>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-[#7A5C48]">
                      Puntualidad
                    </span>
                    <span className="text-sm font-bold text-[#1A0E05]">
                      98%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "98%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-[#7A5C48]">
                      Aceptacion
                    </span>
                    <span className="text-sm font-bold text-[#1A0E05]">
                      94%
                    </span>
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
                Tu score mejora cada vez que completas un turno
              </p>
            </div>

            {/* Ganancias rapidas */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-[#1A0E05] mb-3">
                Ganancias rapidas
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#7A5C48]">Este mes</span>
                  <span className="text-xl font-bold text-[#1A0E05]">
                    $142.000
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#7A5C48]">
                    Turnos completados
                  </span>
                  <span className="text-lg font-bold text-[#1A0E05]">12</span>
                </div>
              </div>
              <a
                href="/dashboard/trabajador/ganancias"
                className="text-sm font-medium text-[#E85520] hover:underline"
              >
                Ver detalle &rarr;
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
