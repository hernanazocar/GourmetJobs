"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

interface Turno {
  id: number;
  restaurante: string;
  zona: string;
  rol: string;
  fecha: string;
  horario: string;
  precioHr: string;
  distancia: string;
  descripcion: string;
  urgente: boolean;
  nuevo: boolean;
}

const turnosMock: Turno[] = [
  {
    id: 1,
    restaurante: "La Mision",
    zona: "Providencia",
    rol: "Garzon",
    fecha: "Hoy, 21 Mar",
    horario: "19:00 - 00:00",
    precioHr: "$10.000 - $14.000",
    distancia: "1.2 km",
    descripcion: "Evento privado para 40 personas, experiencia en servicio de vinos requerida.",
    urgente: true,
    nuevo: false,
  },
  {
    id: 2,
    restaurante: "Borago",
    zona: "Vitacura",
    rol: "Barman",
    fecha: "Manana, 22 Mar",
    horario: "20:00 - 02:00",
    precioHr: "$12.000 - $18.000",
    distancia: "3.4 km",
    descripcion: "Barra principal del restaurante, cocteleria de autor.",
    urgente: false,
    nuevo: true,
  },
  {
    id: 3,
    restaurante: "Ambrosio",
    zona: "Las Condes",
    rol: "Garzon",
    fecha: "23 Mar",
    horario: "12:00 - 17:00",
    precioHr: "$8.000 - $12.000",
    distancia: "2.8 km",
    descripcion: "Almuerzo ejecutivo, servicio rapido y eficiente.",
    urgente: false,
    nuevo: true,
  },
  {
    id: 4,
    restaurante: "Osaka",
    zona: "Las Condes",
    rol: "Hostess",
    fecha: "23 Mar",
    horario: "19:00 - 23:00",
    precioHr: "$9.000 - $13.000",
    distancia: "4.1 km",
    descripcion: "Recepcion y manejo de reservas en restaurante de alta demanda.",
    urgente: false,
    nuevo: false,
  },
  {
    id: 5,
    restaurante: "Liguria",
    zona: "Providencia",
    rol: "Garzon",
    fecha: "24 Mar",
    horario: "11:00 - 16:00",
    precioHr: "$8.000 - $11.000",
    distancia: "0.8 km",
    descripcion: "Turno de almuerzo, ambiente casual. Buenas propinas.",
    urgente: false,
    nuevo: false,
  },
  {
    id: 6,
    restaurante: "Happening",
    zona: "Vitacura",
    rol: "Barman",
    fecha: "Hoy, 21 Mar",
    horario: "21:00 - 03:00",
    precioHr: "$11.000 - $16.000",
    distancia: "5.2 km",
    descripcion: "Barra de eventos, necesario experiencia en cocteleria clasica.",
    urgente: true,
    nuevo: false,
  },
  {
    id: 7,
    restaurante: "Mestizo",
    zona: "Providencia",
    rol: "Sommelier",
    fecha: "25 Mar",
    horario: "19:00 - 23:00",
    precioHr: "$15.000 - $20.000",
    distancia: "1.5 km",
    descripcion: "Cena maridaje para 20 personas. Conocimiento de vinos chilenos.",
    urgente: false,
    nuevo: true,
  },
  {
    id: 8,
    restaurante: "Peumayen",
    zona: "Santiago Centro",
    rol: "Ayudante de cocina",
    fecha: "26 Mar",
    horario: "10:00 - 18:00",
    precioHr: "$7.000 - $10.000",
    distancia: "6.0 km",
    descripcion: "Apoyo en mise en place y preparacion de ingredientes.",
    urgente: false,
    nuevo: false,
  },
];

const rolesFilter = ["Todos", "Garzon", "Barman", "Hostess", "Chef", "Sommelier", "Ayudante de cocina"];
const zonasFilter = ["Todas", "Providencia", "Las Condes", "Vitacura", "Santiago Centro", "Nunoa"];
const whenFilter = ["Todos", "Hoy", "Manana", "Esta semana"];
const sortOptions = ["Mas cercano", "Mejor tarifa ref.", "Mas reciente"];

export default function TurnosDisponiblesPage() {
  const [rolFilter, setRolFilter] = useState("Todos");
  const [zonaFilter, setZonaFilter] = useState("Todas");
  const [whenFilterVal, setWhenFilterVal] = useState("Todos");
  const [sortBy, setSortBy] = useState("Mas cercano");

  const filteredTurnos = turnosMock.filter((t) => {
    if (rolFilter !== "Todos" && t.rol !== rolFilter) return false;
    if (zonaFilter !== "Todas" && t.zona !== zonaFilter) return false;
    if (whenFilterVal === "Hoy" && !t.fecha.includes("Hoy")) return false;
    if (whenFilterVal === "Manana" && !t.fecha.includes("Manana")) return false;
    return true;
  });

  const selectClass = "bg-[#FFF5EE] rounded-xl px-3 py-2.5 text-sm text-[#1A0E05] border-none outline-none focus:ring-2 focus:ring-[#E85520]/30 transition";

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Sidebar type="trabajador" activeItem="Turnos disponibles" />

      <main className="ml-0 lg:ml-64 p-6 lg:p-8 pt-20 lg:pt-8">
        {/* TopBar */}
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#1A0E05]">Turnos disponibles</h1>
          <p className="text-[#7A5C48] mt-1">Oportunidades cerca de ti</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <select className={selectClass} value={rolFilter} onChange={(e) => setRolFilter(e.target.value)}>
            {rolesFilter.map((r) => (
              <option key={r} value={r}>{r === "Todos" ? "Rol: Todos" : r}</option>
            ))}
          </select>
          <select className={selectClass} value={zonaFilter} onChange={(e) => setZonaFilter(e.target.value)}>
            {zonasFilter.map((z) => (
              <option key={z} value={z}>{z === "Todas" ? "Zona: Todas" : z}</option>
            ))}
          </select>
          <select className={selectClass} value={whenFilterVal} onChange={(e) => setWhenFilterVal(e.target.value)}>
            {whenFilter.map((w) => (
              <option key={w} value={w}>{w === "Todos" ? "Cuando: Todos" : w}</option>
            ))}
          </select>
          <select className={selectClass} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {sortOptions.map((s) => (
              <option key={s} value={s}>Ordenar: {s}</option>
            ))}
          </select>
        </div>

        {/* Results count */}
        <p className="text-sm text-[#7A5C48] mb-4">
          {filteredTurnos.length} turno{filteredTurnos.length !== 1 ? "s" : ""} disponible{filteredTurnos.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredTurnos.map((turno) => (
            <div key={turno.id} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition relative">
              {/* Badges */}
              <div className="flex gap-2 absolute top-4 right-4">
                {turno.urgente && (
                  <span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs font-semibold rounded-full">
                    Urgente
                  </span>
                )}
                {turno.nuevo && (
                  <span className="px-2 py-0.5 bg-green-50 text-green-600 text-xs font-semibold rounded-full">
                    Nuevo
                  </span>
                )}
              </div>

              {/* Restaurant + Zone */}
              <div className="mb-3 pr-20">
                <h3 className="font-bold text-[#1A0E05] text-base">{turno.restaurante}</h3>
                <span className="inline-block mt-1 px-2 py-0.5 bg-[#F8F6F3] text-[#7A5C48] text-xs rounded-full font-medium">
                  {turno.zona}
                </span>
              </div>

              {/* Role */}
              <span className="inline-block px-3 py-1 bg-[#E85520]/10 text-[#E85520] text-sm font-semibold rounded-full mb-3">
                {turno.rol}
              </span>

              {/* Details */}
              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-2 text-sm text-[#7A5C48]">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span>{turno.fecha}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#7A5C48]">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{turno.horario}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#7A5C48]">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-[#1A0E05]">{turno.precioHr}/hr <span className="font-normal text-[#9A7A60]">(ref.)</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#7A5C48]">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>{turno.distancia}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#7A5C48] mb-4 line-clamp-2">{turno.descripcion}</p>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="flex-1 py-2.5 bg-[#E85520] text-white text-sm font-semibold rounded-xl hover:bg-[#D14A1A] transition">
                  Postular
                </button>
                <button className="text-sm text-[#E85520] font-medium hover:underline transition">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTurnos.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-[#FFF0E6] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#E85520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1A0E05] mb-1">No se encontraron turnos</h3>
            <p className="text-sm text-[#7A5C48]">Intenta ajustar los filtros para ver mas oportunidades</p>
          </div>
        )}
      </main>
    </div>
  );
}
