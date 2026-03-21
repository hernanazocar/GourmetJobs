"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

interface Payment {
  id: number;
  restaurante: string;
  fecha: string;
  monto: string;
  montoNum: number;
  estado: "Pagado" | "Pendiente";
}

const paymentsMock: Payment[] = [
  { id: 1, restaurante: "La Mision", fecha: "20 Mar 2026", monto: "$36.000", montoNum: 36000, estado: "Pagado" },
  { id: 2, restaurante: "Borago", fecha: "18 Mar 2026", monto: "$45.000", montoNum: 45000, estado: "Pagado" },
  { id: 3, restaurante: "Osaka", fecha: "15 Mar 2026", monto: "$22.000", montoNum: 22000, estado: "Pendiente" },
  { id: 4, restaurante: "Liguria", fecha: "12 Mar 2026", monto: "$19.000", montoNum: 19000, estado: "Pagado" },
  { id: 5, restaurante: "Happening", fecha: "10 Mar 2026", monto: "$20.000", montoNum: 20000, estado: "Pendiente" },
];

const weeklyData = [
  { label: "Sem 1", amount: 28000, max: 52000 },
  { label: "Sem 2", amount: 35000, max: 52000 },
  { label: "Sem 3", amount: 52000, max: 52000 },
  { label: "Sem 4", amount: 27000, max: 52000 },
];

export default function GananciasPage() {
  const [activeTab, setActiveTab] = useState<"todos" | "pagados" | "pendientes">("todos");

  const filteredPayments = paymentsMock.filter((p) => {
    if (activeTab === "pagados") return p.estado === "Pagado";
    if (activeTab === "pendientes") return p.estado === "Pendiente";
    return true;
  });

  const stats = [
    {
      label: "Total mes",
      value: "$142.000",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-[#FFF0E6] text-[#E85520]",
    },
    {
      label: "Turnos completados",
      value: "12",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Promedio/turno",
      value: "$11.833",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "vs mes anterior",
      value: "+12%",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Sidebar type="trabajador" activeItem="Mis ganancias" />

      <main className="ml-0 lg:ml-64 p-6 lg:p-8 pt-20 lg:pt-8">
        {/* TopBar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-[#1A0E05]">Mis ganancias</h1>
            <p className="text-[#7A5C48] mt-1">Resumen de tus ingresos</p>
          </div>
          <button className="mt-4 sm:mt-0 px-6 py-2.5 bg-[#E85520] text-white text-sm font-semibold rounded-xl hover:bg-[#D14A1A] transition shadow-lg shadow-[#E85520]/20">
            Solicitar retiro
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-[#1A0E05]">{stat.value}</p>
              <p className="text-xs text-[#7A5C48] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Chart + Payments */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
          {/* Bar chart */}
          <div className="xl:col-span-3 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Ingresos semanales</h2>
            <p className="text-xs text-[#7A5C48] mb-6">Ultimas 4 semanas</p>

            <div className="flex items-end justify-between gap-4 h-48">
              {weeklyData.map((week) => {
                const heightPercent = (week.amount / week.max) * 100;
                return (
                  <div key={week.label} className="flex-1 flex flex-col items-center">
                    <span className="text-xs font-semibold text-[#1A0E05] mb-2">
                      ${(week.amount / 1000).toFixed(0)}k
                    </span>
                    <div className="w-full bg-[#F8F6F3] rounded-xl overflow-hidden relative" style={{ height: "140px" }}>
                      <div
                        className="absolute bottom-0 w-full rounded-xl transition-all duration-500"
                        style={{
                          height: `${heightPercent}%`,
                          background: week.amount === week.max
                            ? "#E85520"
                            : "linear-gradient(to top, #E85520, #F59E6C)",
                        }}
                      />
                    </div>
                    <span className="text-xs text-[#7A5C48] mt-2">{week.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E6DC] flex items-center justify-between">
              <div>
                <p className="text-xs text-[#7A5C48]">Total del mes</p>
                <p className="text-xl font-bold text-[#1A0E05]">$142.000</p>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                +12% vs mes anterior
              </div>
            </div>
          </div>

          {/* Recent payments */}
          <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#1A0E05] mb-4">Pagos recientes</h2>

            {/* Tabs */}
            <div className="flex gap-1 bg-[#F8F6F3] rounded-xl p-1 mb-5">
              {(
                [
                  { key: "todos", label: "Todos" },
                  { key: "pagados", label: "Pagados" },
                  { key: "pendientes", label: "Pendientes" },
                ] as const
              ).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
                    activeTab === key
                      ? "bg-white text-[#1A0E05] shadow-sm"
                      : "text-[#7A5C48] hover:text-[#1A0E05]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Payment list */}
            <div className="space-y-3">
              {filteredPayments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between py-3 border-b border-[#F8F6F3] last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-[#E85520] font-bold text-xs">
                      {payment.restaurante.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A0E05]">{payment.restaurante}</p>
                      <p className="text-xs text-[#7A5C48]">{payment.fecha}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#1A0E05]">{payment.monto}</p>
                    <span
                      className={`inline-block mt-0.5 px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                        payment.estado === "Pagado"
                          ? "bg-green-50 text-green-600"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {payment.estado}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredPayments.length === 0 && (
              <p className="text-center text-sm text-[#7A5C48] py-8">No hay pagos en esta categoria</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
