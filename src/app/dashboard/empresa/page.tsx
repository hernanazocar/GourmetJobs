"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import StatCard from "@/components/dashboard/StatCard";

// ── Stats data ──────────────────────────────────────────────────────────────
const STATS = [
  { label: "Turnos activos", value: "3", icon: "clock", color: "#E85520" },
  { label: "Trabajadores hoy", value: "8", icon: "users", color: "#16a34a" },
  { label: "Gasto mensual", value: "$580K", icon: "dollar", color: "#2563eb" },
  { label: "Rating empresa", value: "4.8", icon: "star", color: "#9333ea" },
];

// ── Active shifts data ──────────────────────────────────────────────────────
const SHIFTS = [
  {
    role: "Garzon",
    type: "Turno noche",
    time: "19:00 - 01:00",
    worker: "Diego M.",
    status: "Confirmado",
    statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  },
  {
    role: "Chef de partida",
    type: "Turno tarde",
    time: "14:00 - 22:00",
    worker: null,
    status: "Buscando",
    statusColor: "bg-amber-50 text-amber-700 border border-amber-200",
  },
  {
    role: "Barman",
    type: "Evento especial",
    time: "20:00 - 03:00",
    worker: "Valentina S.",
    status: "Confirmado",
    statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  },
];

// ── Activity data ───────────────────────────────────────────────────────────
const ACTIVITY = [
  { text: "Diego M. acepto turno de garzon", time: "hace 15 min", dotColor: "bg-emerald-500" },
  { text: "Nueva postulacion de Camila R.", time: "hace 1 hora", dotColor: "bg-[#E85520]" },
  { text: "Turno completado: Chef sabado", time: "hace 3 horas", dotColor: "bg-blue-500" },
  { text: "Calificacion recibida: 4.9", time: "hace 5 horas", dotColor: "bg-purple-500" },
  { text: "WhatsApp broadcast enviado a 12 candidatos", time: "hace 1 dia", dotColor: "bg-gray-400" },
];

// ── Talent data ─────────────────────────────────────────────────────────────
const TALENT = [
  { name: "Martin Garcia", role: "Chef ejecutivo", rating: 4.9, avatar: "https://i.pravatar.cc/100?img=12", exp: "8 anos exp." },
  { name: "Sofia Reyes", role: "Sommelier", rating: 4.8, avatar: "https://i.pravatar.cc/100?img=25", exp: "5 anos exp." },
  { name: "Lucas Herrera", role: "Barman", rating: 4.7, avatar: "https://i.pravatar.cc/100?img=33", exp: "6 anos exp." },
];

// ── Calendar data ───────────────────────────────────────────────────────────
const WEEK_DAYS = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
const WEEK_DATES = [17, 18, 19, 20, 21, 22, 23];
const WEEK_DOTS: Record<number, string[]> = {
  17: ["bg-emerald-500"],
  18: ["bg-[#E85520]", "bg-blue-500"],
  19: [],
  20: ["bg-emerald-500", "bg-[#E85520]", "bg-purple-500"],
  21: ["bg-[#E85520]"],
  22: ["bg-emerald-500", "bg-blue-500"],
  23: ["bg-amber-500"],
};

// ── Icon helpers ────────────────────────────────────────────────────────────
function IconPlus() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────
export default function EmpresaDashboard() {
  return (
    <div className="flex h-screen bg-[#F8F6F3] overflow-hidden">
      {/* Sidebar */}
      <Sidebar type="empresa" activeItem="Dashboard" />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto lg:ml-64">
        {/* Top bar area with padding for mobile header */}
        <div className="p-4 sm:p-8 pt-20 lg:pt-8 space-y-6">
          <TopBar
            title="Buenos dias, La Mision"
            subtitle="Tienes 3 turnos activos hoy"
            actionLabel="Publicar turno"
            onAction={() => {}}
          />

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
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
            {/* Left Column */}
            <div className="xl:col-span-2 space-y-6">
              {/* Turnos activos */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-[#1A0E05]">Turnos activos</h2>
                  <button className="text-sm text-[#E85520] font-semibold hover:underline">Ver todos</button>
                </div>
                <div className="space-y-0">
                  {SHIFTS.map((shift, i) => (
                    <div
                      key={i}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-3 ${
                        i < SHIFTS.length - 1 ? "border-b border-[#F0E6DC]" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-[#F8F6F3] flex items-center justify-center text-lg shrink-0">
                          {shift.role === "Garzon" ? "🍽" : shift.role === "Chef de partida" ? "👨‍🍳" : "🍸"}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#1A0E05]">
                            {shift.role} — <span className="font-medium text-[#7A5C48]">{shift.type}</span>
                          </p>
                          <p className="text-xs text-[#7A5C48] mt-0.5">{shift.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        {shift.worker ? (
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">
                              {shift.worker.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <span className="text-sm text-[#1A0E05] font-medium">{shift.worker}</span>
                          </div>
                        ) : (
                          <span className="text-sm text-[#7A5C48] italic">Sin asignar</span>
                        )}
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${shift.statusColor}`}>
                          {shift.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actividad reciente */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-[#1A0E05]">Actividad reciente</h2>
                  <button className="text-sm text-[#E85520] font-semibold hover:underline">Ver todo</button>
                </div>
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

            {/* Right Column */}
            <div className="space-y-6">
              {/* Talento recomendado */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-[#1A0E05]">Talento recomendado</h2>
                  <button className="text-sm text-[#E85520] font-semibold hover:underline">Ver mas</button>
                </div>
                <div className="space-y-4">
                  {TALENT.map((person) => (
                    <div
                      key={person.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F6F3]/60 hover:bg-[#F5F0EB] transition-colors"
                    >
                      <img
                        src={person.avatar}
                        alt={person.name}
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-white"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#1A0E05] truncate">{person.name}</p>
                        <p className="text-xs text-[#7A5C48]">{person.role} · {person.exp}</p>
                        <div className="flex items-center gap-0.5 mt-1">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <svg
                              key={j}
                              className={`w-3 h-3 ${j < Math.floor(person.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-xs text-[#7A5C48] ml-1">{person.rating}</span>
                        </div>
                      </div>
                      <button className="shrink-0 px-3 py-1.5 bg-[#E85520] hover:bg-[#D04A1A] text-white text-xs font-semibold rounded-lg transition-colors">
                        Invitar
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proximos turnos - mini calendar */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-[#1A0E05]">Proximos turnos</h2>
                  <span className="text-sm text-[#7A5C48] font-medium">Mar 2026</span>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {WEEK_DAYS.map((day) => (
                    <div key={day} className="text-center">
                      <p className="text-xs text-[#7A5C48] font-medium mb-2">{day}</p>
                    </div>
                  ))}
                  {WEEK_DATES.map((date) => {
                    const isToday = date === 21;
                    const dots = WEEK_DOTS[date] || [];
                    return (
                      <div key={date} className="text-center py-1">
                        <div
                          className={`
                            w-9 h-9 mx-auto rounded-xl flex items-center justify-center text-sm font-semibold transition-colors
                            ${isToday ? "bg-[#E85520] text-white" : "text-[#1A0E05] hover:bg-[#F5F0EB]"}
                          `}
                        >
                          {date}
                        </div>
                        <div className="flex items-center justify-center gap-0.5 mt-1 h-2">
                          {dots.map((dot, j) => (
                            <div key={j} className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick actions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <h2 className="text-lg font-bold text-[#1A0E05] mb-4">Acciones rapidas</h2>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#E85520]/10 hover:bg-[#E85520]/15 text-[#E85520] transition-colors">
                    <IconPlus />
                    <span className="text-xs font-semibold">Publicar turno</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors">
                    <IconSearch />
                    <span className="text-xs font-semibold">Buscar talento</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition-colors">
                    <IconWhatsApp />
                    <span className="text-xs font-semibold text-center leading-tight">WhatsApp broadcast</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-600 transition-colors">
                    <IconChart />
                    <span className="text-xs font-semibold">Ver analytics</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
