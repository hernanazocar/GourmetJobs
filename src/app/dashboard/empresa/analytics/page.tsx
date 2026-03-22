"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

// ── Mock data ────────────────────────────────────────────────────────────────

const STATS = [
  { label: "Turnos publicados", value: "24", color: "#E85520" },
  { label: "Turnos completados", value: "21", color: "#16a34a" },
  { label: "Tasa de exito", value: "87%", color: "#2563eb" },
  { label: "Gasto estimado", value: "$1.2M", color: "#9333ea" },
];

const MONTHLY_DATA = [
  { month: "Oct", value: 12 },
  { month: "Nov", value: 18 },
  { month: "Dic", value: 15 },
  { month: "Ene", value: 22 },
  { month: "Feb", value: 20 },
  { month: "Mar", value: 24 },
];

const TOP_ROLES = [
  { role: "Garzon", pct: 35 },
  { role: "Chef", pct: 25 },
  { role: "Barman", pct: 18 },
  { role: "Sommelier", pct: 12 },
  { role: "Pastelero", pct: 10 },
];

function IconStat({ color }: { color: string }) {
  return (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: `${color}15` }}
    >
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
    </div>
  );
}

export default function AnalyticsPage() {
  const maxMonthly = Math.max(...MONTHLY_DATA.map((d) => d.value));

  return (
    <div className="flex h-screen bg-[#F8F6F3] overflow-hidden">
      <Sidebar type="empresa" activeItem="Analytics" />

      <main className="flex-1 overflow-y-auto ml-0 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 space-y-6">
          <TopBar title="Analytics" subtitle="Metricas de tu actividad" />

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#F0E6DC]/50"
              >
                <div className="flex items-center gap-3">
                  <IconStat color={stat.color} />
                  <div>
                    <p className="text-xs text-[#7A5C48] font-medium">{stat.label}</p>
                    <p className="text-2xl font-bold text-[#1A0E05] mt-0.5">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Bar Chart - Hiring Activity */}
            <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Actividad de contratacion</h2>
              <p className="text-sm text-[#7A5C48] mb-6">Ultimos 6 meses</p>

              <div className="flex items-end justify-between gap-3 h-48">
                {MONTHLY_DATA.map((d) => {
                  const heightPct = (d.value / maxMonthly) * 100;
                  return (
                    <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-xs font-semibold text-[#1A0E05]">{d.value}</span>
                      <div className="w-full relative" style={{ height: "160px" }}>
                        <div
                          className="absolute bottom-0 w-full rounded-t-lg transition-all"
                          style={{
                            height: `${heightPct}%`,
                            backgroundColor:
                              d.month === "Mar" ? "#E85520" : "#F5E6DB",
                          }}
                        />
                      </div>
                      <span className="text-xs text-[#7A5C48] font-medium">{d.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Response Time + Quick Stat */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Tiempo de respuesta</h2>
                <p className="text-sm text-[#7A5C48] mb-4">Promedio de respuesta a postulaciones</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-[#E85520]">15</span>
                  <span className="text-lg text-[#7A5C48] mb-1">min</span>
                </div>
                <div className="mt-4 w-full bg-[#F8F6F3] rounded-full h-2">
                  <div className="bg-[#E85520] h-2 rounded-full" style={{ width: "25%" }} />
                </div>
                <p className="text-xs text-[#7A5C48] mt-2">Excelente - mejor que el 85% de empresas</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
                <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Satisfaccion</h2>
                <p className="text-sm text-[#7A5C48] mb-4">Rating promedio de trabajadores</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-[#E85520]">4.8</span>
                  <span className="text-lg text-[#7A5C48] mb-1">/ 5.0</span>
                </div>
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < 5 ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Roles */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
            <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Roles mas contratados</h2>
            <p className="text-sm text-[#7A5C48] mb-6">Distribucion por tipo de rol</p>

            <div className="space-y-4">
              {TOP_ROLES.map((item) => (
                <div key={item.role} className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-[#1A0E05] w-24">{item.role}</span>
                  <div className="flex-1 bg-[#F8F6F3] rounded-full h-3">
                    <div
                      className="h-3 rounded-full transition-all"
                      style={{
                        width: `${item.pct}%`,
                        backgroundColor: "#E85520",
                        opacity: 0.4 + (item.pct / 100) * 0.6,
                      }}
                    />
                  </div>
                  <span className="text-sm font-bold text-[#1A0E05] w-10 text-right">{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Export */}
          <div className="flex justify-end">
            <button className="bg-[#E85520] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#D04A1A] transition shadow-sm shadow-[#E85520]/20">
              Exportar datos
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
