"use client";

import { useState } from "react";

export default function TrabajadorDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [disponible, setDisponible] = useState(true);
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [disponibilidad, setDisponibilidad] = useState({
    Lun: false,
    Mar: false,
    Mie: false,
    Jue: false,
    Vie: true,
    Sab: true,
    Dom: true,
  });

  const navItems = [
    { label: "Dashboard", icon: "squares" },
    { label: "Turnos Disponibles", icon: "search" },
    { label: "Mis Turnos", icon: "calendar" },
    { label: "Mi Perfil", icon: "user" },
    { label: "Mensajes", icon: "chat" },
    { label: "Mis Ganancias", icon: "money" },
    { label: "Configuracion", icon: "settings" },
  ];

  const navIcons: Record<string, JSX.Element> = {
    squares: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    search: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    calendar: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    user: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    chat: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    money: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    settings: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };

  const stats = [
    { label: "Turnos este mes", value: "12", color: "#E85520", bg: "bg-orange-50" },
    { label: "Ganancias mes", value: "$142K", color: "#16a34a", bg: "bg-green-50" },
    { label: "GourmetScore", value: "4.7", color: "#9333ea", bg: "bg-purple-50" },
    { label: "Puntualidad", value: "98%", color: "#2563eb", bg: "bg-blue-50" },
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

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8F6F3]">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b border-gray-50">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍽</span>
            <span className="text-xl font-bold" style={{ color: "#E85520" }}>
              GourmetJobs
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                onClick={() => {
                  setActiveNav(item.label);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                  isActive
                    ? "text-[#E85520] bg-[#E85520]/10"
                    : "text-[#7A5C48] hover:bg-gray-50"
                }`}
              >
                {navIcons[item.icon]}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom user section */}
        <div className="px-4 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E85520] to-orange-400 flex items-center justify-center text-white font-bold text-sm">
              DM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#1A0E05] truncate">Diego Morales</p>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[#E85520] font-medium">GourmetScore</span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-[#E85520]/10 text-[#E85520] text-xs font-bold">
                  4.7
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-100 px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Hamburger */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6 text-[#1A0E05]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#1A0E05]">
                  Hola, Diego 👋
                </h1>
                <p className="text-sm text-[#7A5C48]">
                  Tienes <span className="font-semibold text-[#E85520]">2 invitaciones</span> pendientes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              {/* Notification bell */}
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
                <svg className="w-5 h-5 text-[#7A5C48]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#E85520] rounded-full"></span>
              </button>

              {/* Disponible toggle */}
              <div className="hidden sm:flex items-center gap-2">
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
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
                <p className="text-sm text-[#7A5C48] mb-1">{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </p>
              </div>
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

                <button className="mt-5 w-full py-2.5 text-sm font-medium rounded-xl border-2 border-[#E85520] text-[#E85520] hover:bg-[#E85520] hover:text-white transition">
                  Editar perfil
                </button>
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
