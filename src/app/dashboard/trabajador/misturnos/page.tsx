"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

// ── Data ────────────────────────────────────────────────────────────────────

const proximosTurnos = [
  {
    restaurant: "La Mision",
    initials: "LM",
    rol: "Garzon turno noche",
    fecha: "Sabado 22 Mar",
    horario: "19:00 - 01:00",
    pago: "$4.500/hr",
    estado: "Confirmado",
    direccion: "Av. Providencia 1234, Providencia",
  },
  {
    restaurant: "Osaka",
    initials: "OK",
    rol: "Barman evento privado",
    fecha: "Domingo 23 Mar",
    horario: "20:00 - 02:00",
    pago: "$5.000/hr",
    estado: "Confirmado",
    direccion: "Isidora Goyenechea 3000, Las Condes",
  },
  {
    restaurant: "Borago",
    initials: "BO",
    rol: "Garzon almuerzo",
    fecha: "Lunes 24 Mar",
    horario: "12:00 - 17:00",
    pago: "$4.800/hr",
    estado: "Confirmado",
    direccion: "Nueva Costanera 3467, Vitacura",
  },
];

const turnosCompletados = [
  {
    restaurant: "Liguria",
    initials: "LI",
    rol: "Garzon turno almuerzo",
    fecha: "Viernes 14 Mar",
    horario: "12:00 - 17:00",
    pago: "$4.000/hr",
    ganancia: "$20.000",
    rating: 4.8,
    direccion: "Av. Providencia 1373, Providencia",
  },
  {
    restaurant: "La Mision",
    initials: "LM",
    rol: "Garzon turno noche",
    fecha: "Sabado 15 Mar",
    horario: "19:00 - 01:00",
    pago: "$4.500/hr",
    ganancia: "$27.000",
    rating: 5.0,
    direccion: "Av. Providencia 1234, Providencia",
  },
  {
    restaurant: "Osaka",
    initials: "OK",
    rol: "Barman",
    fecha: "Domingo 9 Mar",
    horario: "20:00 - 02:00",
    pago: "$5.000/hr",
    ganancia: "$30.000",
    rating: 4.5,
    direccion: "Isidora Goyenechea 3000, Las Condes",
  },
  {
    restaurant: "Borago",
    initials: "BO",
    rol: "Garzon cena especial",
    fecha: "Viernes 7 Mar",
    horario: "19:00 - 00:00",
    pago: "$4.800/hr",
    ganancia: "$24.000",
    rating: 4.9,
    direccion: "Nueva Costanera 3467, Vitacura",
  },
];

const turnosCancelados = [
  {
    restaurant: "Restaurant Ambrosia",
    initials: "RA",
    rol: "Chef de partida",
    fecha: "Miercoles 12 Mar",
    horario: "14:00 - 22:00",
    pago: "$6.000/hr",
    motivo: "Cancelado por el restaurante",
    direccion: "Av. El Bosque Norte 0177, Las Condes",
  },
];

type Tab = "proximos" | "completados" | "cancelados";

// ── Stars ───────────────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-xs font-semibold text-[#7A5C48]">{rating}</span>
    </div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────

export default function MisTurnosPage() {
  const [activeTab, setActiveTab] = useState<Tab>("proximos");

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "proximos", label: "Proximos", count: proximosTurnos.length },
    { key: "completados", label: "Completados", count: turnosCompletados.length },
    { key: "cancelados", label: "Cancelados", count: turnosCancelados.length },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8F6F3]">
      <Sidebar type="trabajador" activeItem="Mis turnos" />

      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 pt-20 lg:pt-8">
          <TopBar title="Mis turnos" subtitle="Turnos confirmados y completados" />

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === tab.key
                    ? "bg-[#E85520] text-white shadow-sm shadow-[#E85520]/20"
                    : "bg-white text-[#7A5C48] hover:bg-gray-100"
                }`}
              >
                {tab.label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.key
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-[#7A5C48]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Proximos */}
          {activeTab === "proximos" && (
            <div className="space-y-4">
              {proximosTurnos.map((turno, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#E85520]/10 flex items-center justify-center text-[#E85520] font-bold text-sm shrink-0">
                        {turno.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-[#1A0E05]">{turno.restaurant}</h3>
                          <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-green-600">
                            {turno.estado}
                          </span>
                        </div>
                        <p className="text-sm text-[#7A5C48] mb-2">{turno.rol}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#7A5C48]">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            {turno.fecha}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {turno.horario}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                            </svg>
                            {turno.pago}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-2 text-xs text-[#7A5C48]">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {turno.direccion}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <button className="px-4 py-2 text-sm font-medium text-[#E85520] bg-[#FFF0E6] hover:bg-[#FFE4D4] rounded-xl transition">
                        Ver detalles
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-red-500 hover:text-red-700 transition">
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Completados */}
          {activeTab === "completados" && (
            <div className="space-y-4">
              {turnosCompletados.map((turno, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 font-bold text-sm shrink-0">
                        {turno.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-[#1A0E05]">{turno.restaurant}</h3>
                          <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-[#7A5C48]">
                            Completado
                          </span>
                        </div>
                        <p className="text-sm text-[#7A5C48] mb-2">{turno.rol}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#7A5C48]">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            {turno.fecha}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {turno.horario}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <Stars rating={turno.rating} />
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-[#7A5C48] mb-1">Ganancia</p>
                      <p className="text-lg font-bold text-green-600">{turno.ganancia}</p>
                      <p className="text-xs text-[#7A5C48] mt-0.5">{turno.pago}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cancelados */}
          {activeTab === "cancelados" && (
            <div className="space-y-4">
              {turnosCancelados.map((turno, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-400 font-bold text-sm shrink-0">
                        {turno.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-[#1A0E05]">{turno.restaurant}</h3>
                          <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-500">
                            Cancelado
                          </span>
                        </div>
                        <p className="text-sm text-[#7A5C48] mb-2">{turno.rol}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#7A5C48]">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            {turno.fecha}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {turno.horario}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                            </svg>
                            {turno.pago}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-2 text-xs text-[#7A5C48]">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {turno.direccion}
                        </div>
                        <p className="text-xs text-red-500 mt-2 font-medium">{turno.motivo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
