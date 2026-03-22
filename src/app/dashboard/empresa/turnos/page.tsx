"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

// ── Mock data ────────────────────────────────────────────────────────────────

const ACTIVE_SHIFTS = [
  {
    id: 1,
    title: "Turno noche - Viernes",
    role: "Garzón",
    date: "21 Mar 2026",
    time: "19:00 - 01:00",
    status: "Confirmado",
    statusStyle: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    worker: { name: "Diego M.", avatar: "https://i.pravatar.cc/100?img=12" },
  },
  {
    id: 2,
    title: "Turno almuerzo - Sábado",
    role: "Chef de partida",
    date: "22 Mar 2026",
    time: "11:00 - 16:00",
    status: "Buscando",
    statusStyle: "bg-amber-50 text-amber-700 border border-amber-200",
    worker: null,
  },
  {
    id: 3,
    title: "Evento corporativo",
    role: "Barman",
    date: "22 Mar 2026",
    time: "20:00 - 03:00",
    status: "Confirmado",
    statusStyle: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    worker: { name: "Valentina S.", avatar: "https://i.pravatar.cc/100?img=25" },
  },
  {
    id: 4,
    title: "Brunch dominical",
    role: "Sommelier",
    date: "23 Mar 2026",
    time: "10:00 - 15:00",
    status: "Buscando",
    statusStyle: "bg-amber-50 text-amber-700 border border-amber-200",
    worker: null,
  },
];

const COMPLETED_SHIFTS = [
  {
    id: 5,
    title: "Turno noche - Miércoles",
    role: "Garzón",
    date: "19 Mar 2026",
    time: "19:00 - 01:00",
    status: "Completado",
    statusStyle: "bg-blue-50 text-blue-700 border border-blue-200",
    worker: { name: "Camila R.", avatar: "https://i.pravatar.cc/100?img=45" },
    rating: 5,
  },
  {
    id: 6,
    title: "Evento privado",
    role: "Chef ejecutivo",
    date: "18 Mar 2026",
    time: "18:00 - 23:00",
    status: "Completado",
    statusStyle: "bg-blue-50 text-blue-700 border border-blue-200",
    worker: { name: "Martín G.", avatar: "https://i.pravatar.cc/100?img=33" },
    rating: 4,
  },
  {
    id: 7,
    title: "Turno almuerzo - Lunes",
    role: "Barman",
    date: "17 Mar 2026",
    time: "12:00 - 17:00",
    status: "Completado",
    statusStyle: "bg-blue-50 text-blue-700 border border-blue-200",
    worker: { name: "Diego M.", avatar: "https://i.pravatar.cc/100?img=12" },
    rating: 5,
  },
];

type Tab = "Activos" | "Completados" | "Cancelados";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconEmpty() {
  return (
    <svg className="w-16 h-16 text-[#D4C4B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ShiftCard({ shift, showRating = false }: { shift: any; showRating?: boolean }) {
  const roleEmoji =
    shift.role === "Garzón" ? "🍽" :
    shift.role.includes("Chef") ? "👨‍🍳" :
    shift.role === "Barman" ? "🍸" :
    shift.role === "Sommelier" ? "🍷" : "🍽";

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F0E6DC]/50 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F8F6F3] flex items-center justify-center text-lg">
            {roleEmoji}
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#1A0E05]">{shift.title}</h3>
            <p className="text-xs text-[#7A5C48] mt-0.5">{shift.role}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${shift.statusStyle}`}>
          {shift.status}
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs text-[#7A5C48] mb-4">
        <span className="flex items-center gap-1.5">
          <IconCalendar />
          {shift.date}
        </span>
        <span className="flex items-center gap-1.5">
          <IconClock />
          {shift.time}
        </span>
      </div>

      {shift.worker && (
        <div className="flex items-center gap-2 mb-4 p-2.5 rounded-xl bg-[#F8F6F3]/60">
          <img
            src={shift.worker.avatar}
            alt={shift.worker.name}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
          />
          <span className="text-sm font-medium text-[#1A0E05]">{shift.worker.name}</span>
          {showRating && shift.rating && (
            <div className="flex items-center gap-0.5 ml-auto">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled={i < shift.rating} />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-2">
        <button className="flex-1 px-4 py-2 text-xs font-semibold text-[#E85520] bg-[#FFF0E6] rounded-xl hover:bg-[#FFE4D4] transition-colors">
          Ver candidatos
        </button>
        <button className="flex-1 px-4 py-2 text-xs font-semibold text-[#7A5C48] bg-[#F8F6F3] rounded-xl hover:bg-[#F0E6DC] transition-colors">
          Editar
        </button>
      </div>
    </div>
  );
}

export default function TurnosPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Activos");

  const tabs: Tab[] = ["Activos", "Completados", "Cancelados"];

  return (
    <div className="flex h-screen bg-[#F8F6F3] overflow-hidden">
      <Sidebar type="empresa" activeItem="Mis turnos" />

      <main className="flex-1 overflow-y-auto ml-0 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 space-y-6">
          <TopBar
            title="Mis turnos"
            subtitle="Gestiona tus turnos publicados"
            actionLabel="Crear turno"
            onAction={() => (window.location.href = "/dashboard/empresa/necesidad")}
          />

          {/* Tabs */}
          <div className="flex gap-1 bg-white rounded-xl p-1 shadow-sm border border-[#F0E6DC]/50 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? "bg-[#E85520] text-white shadow-sm"
                    : "text-[#7A5C48] hover:bg-[#F8F6F3]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeTab === "Activos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ACTIVE_SHIFTS.map((shift) => (
                <ShiftCard key={shift.id} shift={shift} />
              ))}
            </div>
          )}

          {activeTab === "Completados" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMPLETED_SHIFTS.map((shift) => (
                <ShiftCard key={shift.id} shift={shift} showRating />
              ))}
            </div>
          )}

          {activeTab === "Cancelados" && (
            <div className="flex flex-col items-center justify-center py-20">
              <IconEmpty />
              <h3 className="text-lg font-bold text-[#1A0E05] mt-4">Sin turnos cancelados</h3>
              <p className="text-sm text-[#7A5C48] mt-1">No tienes turnos cancelados por el momento</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
