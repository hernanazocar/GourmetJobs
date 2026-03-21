"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

// ── Mock data ────────────────────────────────────────────────────────────────

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Camila Rojas",
    role: "Garzón",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 4.9,
    lastSeen: "hace 2 horas",
    shifts: 12,
    punctuality: 98,
  },
  {
    id: 2,
    name: "Diego Morales",
    role: "Chef",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4.7,
    lastSeen: "hace 30 min",
    shifts: 24,
    punctuality: 100,
  },
  {
    id: 3,
    name: "Valentina Díaz",
    role: "Barman",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5.0,
    lastSeen: "hace 1 hora",
    shifts: 18,
    punctuality: 95,
  },
  {
    id: 4,
    name: "Sebastián Lagos",
    role: "Mesero",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 4.3,
    lastSeen: "hace 5 horas",
    shifts: 8,
    punctuality: 92,
  },
];

const INVITATIONS = [
  {
    id: 1,
    name: "Isidora Fuentes",
    role: "Pastelero",
    avatar: "https://i.pravatar.cc/150?img=9",
    shift: "Sábado 22 Mar - 10:00 a 18:00",
    status: "Pendiente" as const,
  },
  {
    id: 2,
    name: "Tomás Herrera",
    role: "Garzón",
    avatar: "https://i.pravatar.cc/150?img=11",
    shift: "Viernes 21 Mar - 19:00 a 01:00",
    status: "Aceptada" as const,
  },
  {
    id: 3,
    name: "Francisca Muñoz",
    role: "Chef",
    avatar: "https://i.pravatar.cc/150?img=16",
    shift: "Domingo 23 Mar - 12:00 a 20:00",
    status: "Pendiente" as const,
  },
  {
    id: 4,
    name: "Matías Sepúlveda",
    role: "Mesero",
    avatar: "https://i.pravatar.cc/150?img=8",
    shift: "Lunes 24 Mar - 18:00 a 00:00",
    status: "Rechazada" as const,
  },
  {
    id: 5,
    name: "Andrea Castillo",
    role: "Barman",
    avatar: "https://i.pravatar.cc/150?img=23",
    shift: "Sábado 22 Mar - 20:00 a 03:00",
    status: "Aceptada" as const,
  },
];

const HISTORY = [
  {
    id: 1,
    name: "Camila Rojas",
    role: "Garzón",
    avatar: "https://i.pravatar.cc/150?img=1",
    date: "18 Mar 2026",
    hours: 6,
    cost: 51000,
    ratingGiven: 5,
  },
  {
    id: 2,
    name: "Diego Morales",
    role: "Chef",
    avatar: "https://i.pravatar.cc/150?img=3",
    date: "17 Mar 2026",
    hours: 8,
    cost: 120000,
    ratingGiven: 5,
  },
  {
    id: 3,
    name: "Valentina Díaz",
    role: "Barman",
    avatar: "https://i.pravatar.cc/150?img=5",
    date: "15 Mar 2026",
    hours: 5,
    cost: 50000,
    ratingGiven: 5,
  },
  {
    id: 4,
    name: "Tomás Herrera",
    role: "Garzón",
    avatar: "https://i.pravatar.cc/150?img=11",
    date: "14 Mar 2026",
    hours: 6,
    cost: 42000,
    ratingGiven: 4,
  },
  {
    id: 5,
    name: "Sebastián Lagos",
    role: "Mesero",
    avatar: "https://i.pravatar.cc/150?img=12",
    date: "12 Mar 2026",
    hours: 7,
    cost: 66500,
    ratingGiven: 4,
  },
  {
    id: 6,
    name: "Francisca Muñoz",
    role: "Chef",
    avatar: "https://i.pravatar.cc/150?img=16",
    date: "10 Mar 2026",
    hours: 8,
    cost: 112000,
    ratingGiven: 5,
  },
];

const TABS = ["Equipo activo", "Invitaciones", "Historial"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`}
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

export default function EquipoPage() {
  const [activeTab, setActiveTab] = useState("Equipo activo");

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Sidebar type="empresa" activeItem="Mi equipo" />

      <main className="ml-0 lg:ml-64 p-6 lg:p-8">
        {/* TopBar */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A0E05]">Mi equipo</h1>
          <p className="text-[#7A5C48] mt-1">Gestiona tu equipo y las invitaciones</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-2xl p-1.5 shadow-sm mb-6 w-fit">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#E85520] text-white shadow-sm"
                  : "text-[#7A5C48] hover:bg-[#FFF5EE]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Equipo activo */}
        {activeTab === "Equipo activo" && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow">
                {/* Avatar + info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-14 h-14 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="text-[#1A0E05] font-semibold">{member.name}</h3>
                    <p className="text-[#E85520] text-sm font-medium">{member.role}</p>
                    <StarRating rating={member.rating} />
                  </div>
                </div>

                {/* Last seen */}
                <p className="text-sm text-[#7A5C48] mb-4">
                  <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2" />
                  Última vez: {member.lastSeen}
                </p>

                {/* Stats */}
                <div className="flex gap-4 mb-5">
                  <div className="flex-1 bg-[#F8F6F3] rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-[#1A0E05]">{member.shifts}</p>
                    <p className="text-xs text-[#7A5C48]">turnos</p>
                  </div>
                  <div className="flex-1 bg-[#F8F6F3] rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-[#1A0E05]">{member.punctuality}%</p>
                    <p className="text-xs text-[#7A5C48]">puntualidad</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 rounded-xl bg-[#E85520] text-white font-semibold text-sm hover:bg-[#d04a18] transition-colors">
                    Re-contratar
                  </button>
                  <button className="flex-1 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-colors">
                    WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Invitaciones */}
        {activeTab === "Invitaciones" && (
          <div className="space-y-3">
            {INVITATIONS.map((inv) => {
              const statusStyles = {
                Pendiente: "bg-amber-50 text-amber-700 border-amber-200",
                Aceptada: "bg-emerald-50 text-emerald-700 border-emerald-200",
                Rechazada: "bg-red-50 text-red-700 border-red-200",
              };

              return (
                <div
                  key={inv.id}
                  className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4 flex-wrap"
                >
                  <img
                    src={inv.avatar}
                    alt={inv.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-[#1A0E05] font-semibold">{inv.name}</h3>
                      <span className="text-sm text-[#E85520] font-medium">{inv.role}</span>
                    </div>
                    <p className="text-sm text-[#7A5C48] mt-0.5">{inv.shift}</p>
                  </div>
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${statusStyles[inv.status]}`}
                  >
                    {inv.status}
                  </span>
                  {inv.status === "Pendiente" && (
                    <button className="px-4 py-2 rounded-xl border-2 border-red-300 text-red-500 text-sm font-semibold hover:bg-red-50 transition-colors">
                      Cancelar
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Historial */}
        {activeTab === "Historial" && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="hidden md:grid grid-cols-7 gap-4 px-6 py-3 bg-[#F8F6F3] text-xs font-semibold text-[#7A5C48] uppercase tracking-wider">
              <span className="col-span-2">Trabajador</span>
              <span>Cargo</span>
              <span>Fecha</span>
              <span>Horas</span>
              <span>Costo</span>
              <span>Rating</span>
            </div>

            {HISTORY.map((entry, idx) => (
              <div
                key={entry.id}
                className={`grid grid-cols-1 md:grid-cols-7 gap-3 md:gap-4 px-6 py-4 items-center ${
                  idx < HISTORY.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                {/* Worker */}
                <div className="col-span-2 flex items-center gap-3">
                  <img
                    src={entry.avatar}
                    alt={entry.name}
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                  <span className="text-[#1A0E05] font-semibold">{entry.name}</span>
                </div>

                {/* Role */}
                <span className="text-[#E85520] font-medium text-sm">{entry.role}</span>

                {/* Date */}
                <span className="text-sm text-[#7A5C48]">{entry.date}</span>

                {/* Hours */}
                <span className="text-sm text-[#1A0E05] font-medium">{entry.hours}h</span>

                {/* Cost */}
                <span className="text-sm text-[#1A0E05] font-bold">
                  ${entry.cost.toLocaleString("es-CL")}
                </span>

                {/* Rating given */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${star <= entry.ratingGiven ? "text-amber-400" : "text-gray-200"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
