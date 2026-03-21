"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import StatCard from "@/components/dashboard/StatCard";

// ── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { label: "Turnos este mes", value: "12", icon: "calendar", color: "#E85520" },
  { label: "Ganancias mes", value: "$142K", icon: "dollar", color: "#16a34a" },
  { label: "GourmetScore", value: "4.7", icon: "star", color: "#9333ea" },
  { label: "Puntualidad", value: "98%", icon: "target", color: "#2563eb" },
];

const invitaciones = [
  {
    restaurant: "La Mision",
    rol: "Garzon turno noche",
    horario: "19:00 - 01:00",
    pago: "$4.500/hr",
    ubicacion: "Providencia",
  },
  {
    restaurant: "Osaka",
    rol: "Barman evento",
    horario: "20:00 - 02:00",
    pago: "$5.000/hr",
    ubicacion: "Las Condes",
  },
];

const proximosTurnos = [
  { rol: "Garzon", lugar: "La Mision", fecha: "Manana 19:00", pago: "$4.500/hr", estado: "Confirmado" },
  { rol: "Barman", lugar: "Borago", fecha: "Viernes 20:00", pago: "$5.000/hr", estado: "Confirmado" },
  { rol: "Garzon", lugar: "Liguria", fecha: "Sabado 12:00", pago: "$4.000/hr", estado: "Pendiente" },
];

const turnosDisponibles = [
  { rol: "Chef de partida", lugar: "Restaurant Ambrosia", ubicacion: "Providencia", fecha: "Hoy 14:00", pago: "$6.000/hr" },
  { rol: "Mesero/a", lugar: "Restaurant Bice", ubicacion: "Las Condes", fecha: "Manana 12:00", pago: "$4.000/hr" },
  { rol: "Pastelero/a", lugar: "Restaurant Castillo", ubicacion: "Vitacura", fecha: "Viernes 08:00", pago: "$5.500/hr" },
  { rol: "Garzon", lugar: "Restaurant Don Vito", ubicacion: "Nunoa", fecha: "Sabado 19:00", pago: "$4.500/hr" },
];

const gananciasSemanas = [
  { semana: "Sem 1", valor: 28000, porcentaje: 50 },
  { semana: "Sem 2", valor: 35000, porcentaje: 63 },
  { semana: "Sem 3", valor: 42000, porcentaje: 75 },
  { semana: "Sem 4", valor: 37000, porcentaje: 66 },
];

// ── Main Page ───────────────────────────────────────────────────────────────

export default function TrabajadorDashboard() {
  const [disponible, setDisponible] = useState(true);
  const [disponibilidad, setDisponibilidad] = useState({
    Lun: false,
    Mar: false,
    Mie: false,
    Jue: false,
    Vie: true,
    Sab: true,
    Dom: true,
  });

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8F6F3]">
      {/* Sidebar */}
      <Sidebar type="trabajador" activeItem="Dashboard" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 pt-20 lg:pt-8">
          {/* TopBar */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <TopBar
                title="Hola, Diego"
                subtitle="Tienes 2 invitaciones pendientes"
              />
            </div>
            {/* Disponible toggle - shown on desktop next to topbar */}
            <div className="hidden sm:flex items-center gap-2 -mt-8">
              <span className="text-sm font-medium text-[#7A5C48]">Disponible ahora</span>
              <button
                onClick={() => setDisponible(!disponible)}
                className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                  disponible ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                    disponible ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {STATS.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Column (wider) */}
            <div className="xl:col-span-2 space-y-6">
              {/* Invitaciones pendientes */}
              <div className="bg-white rounded-2xl shadow-sm">
                <div className="px-6 py-4 border-b border-gray-50">
                  <h2 className="text-lg font-bold text-[#1A0E05] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E85520] inline-block"></span>
                    Invitaciones pendientes
                    <span className="ml-auto text-xs font-medium text-white bg-[#E85520] px-2 py-0.5 rounded-full">
                      2
                    </span>
                  </h2>
                </div>
                <div className="divide-y divide-gray-50">
                  {invitaciones.map((inv, i) => (
                    <div key={i} className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-[#1A0E05]">{inv.restaurant}</h3>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-orange-50 text-[#E85520] font-medium">
                              Nuevo
                            </span>
                          </div>
                          <p className="text-sm text-[#7A5C48] mb-2">{inv.rol}</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#7A5C48]">
                            <span className="flex items-center gap-1">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {inv.horario}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                              </svg>
                              {inv.pago}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                              </svg>
                              {inv.ubicacion}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-xl transition">
                            Aceptar
                          </button>
                          <button className="px-4 py-2 text-sm font-medium text-[#7A5C48] bg-gray-100 hover:bg-gray-200 rounded-xl transition">
                            Rechazar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mis proximos turnos */}
              <div className="bg-white rounded-2xl shadow-sm">
                <div className="px-6 py-4 border-b border-gray-50">
                  <h2 className="text-lg font-bold text-[#1A0E05]">Mis proximos turnos</h2>
                </div>
                <div className="divide-y divide-gray-50">
                  {proximosTurnos.map((turno, i) => (
                    <div key={i} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#E85520]/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-[#E85520]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-[#1A0E05] text-sm">
                            {turno.rol} — {turno.lugar}
                          </p>
                          <p className="text-xs text-[#7A5C48]">
                            {turno.fecha} &middot; {turno.pago}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`inline-flex self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold ${
                          turno.estado === "Confirmado"
                            ? "bg-green-50 text-green-600"
                            : "bg-yellow-50 text-yellow-600"
                        }`}
                      >
                        {turno.estado}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Turnos disponibles cerca */}
              <div className="bg-white rounded-2xl shadow-sm">
                <div className="px-6 py-4 border-b border-gray-50">
                  <h2 className="text-lg font-bold text-[#1A0E05]">Turnos disponibles cerca</h2>
                </div>
                <div className="divide-y divide-gray-50">
                  {turnosDisponibles.map((turno, i) => (
                    <div key={i} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-[#1A0E05] text-sm">{turno.rol}</p>
                          <p className="text-xs text-[#7A5C48]">
                            {turno.lugar} &middot; {turno.ubicacion} &middot; {turno.fecha} &middot; {turno.pago}
                          </p>
                        </div>
                      </div>
                      <button className="self-start sm:self-center px-4 py-2 text-sm font-medium rounded-xl border-2 border-[#E85520] text-[#E85520] hover:bg-[#E85520] hover:text-white transition">
                        Postular
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Mi perfil */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="text-center mb-5">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E85520] to-orange-400 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                    DM
                  </div>
                  <h3 className="font-bold text-[#1A0E05] text-lg">Diego Morales</h3>
                  <p className="text-sm text-[#7A5C48]">Garzon / Barman</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-[#7A5C48]">GourmetScore</span>
                      <span className="text-sm font-bold text-[#9333ea]">4.7 / 5.0</span>
                    </div>
                    <div className="w-full bg-purple-100 rounded-full h-2">
                      <div className="bg-[#9333ea] h-2 rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-[#7A5C48]">Puntualidad</span>
                      <span className="text-sm font-bold text-[#2563eb]">98%</span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <div className="bg-[#2563eb] h-2 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                  </div>
                </div>

                <a href="/dashboard/trabajador/perfil" className="mt-5 w-full py-2.5 text-sm font-medium rounded-xl border-2 border-[#E85520] text-[#E85520] hover:bg-[#E85520] hover:text-white transition block text-center">
                  Editar perfil
                </a>
              </div>

              {/* Ganancias */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-bold text-[#1A0E05] mb-1">Ganancias</h3>
                <p className="text-sm text-[#7A5C48] mb-4">Ultimas 4 semanas</p>

                <div className="flex items-end justify-between gap-3 h-32 mb-4">
                  {gananciasSemanas.map((s, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-xs font-medium text-[#7A5C48]">
                        ${(s.valor / 1000).toFixed(0)}k
                      </span>
                      <div className="w-full bg-orange-100 rounded-t-lg relative" style={{ height: "100%" }}>
                        <div
                          className="absolute bottom-0 left-0 right-0 rounded-t-lg transition-all"
                          style={{
                            height: `${s.porcentaje}%`,
                            background: "linear-gradient(to top, #E85520, #f59e0b)",
                          }}
                        />
                      </div>
                      <span className="text-xs text-[#7A5C48]">{s.semana}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#7A5C48]">Total este mes</p>
                      <p className="text-xl font-bold text-[#1A0E05]">$142.000</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                      +12% vs mes anterior
                    </span>
                  </div>
                </div>
              </div>

              {/* Disponibilidad */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-bold text-[#1A0E05] mb-1">Disponibilidad</h3>
                <p className="text-sm text-[#7A5C48] mb-4">Selecciona tus dias disponibles</p>

                <div className="grid grid-cols-7 gap-2">
                  {Object.entries(disponibilidad).map(([dia, activo]) => (
                    <button
                      key={dia}
                      onClick={() =>
                        setDisponibilidad((prev) => ({ ...prev, [dia]: !prev[dia as keyof typeof prev] }))
                      }
                      className={`flex flex-col items-center justify-center py-3 rounded-xl text-xs font-semibold transition-all ${
                        activo
                          ? "bg-green-500 text-white shadow-sm"
                          : "bg-gray-100 text-[#7A5C48] hover:bg-gray-200"
                      }`}
                    >
                      {dia}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
