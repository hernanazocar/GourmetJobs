"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

// ── Types ───────────────────────────────────────────────────────────────────

type DayKey = "Lun" | "Mar" | "Mié" | "Jue" | "Vie" | "Sáb" | "Dom";

// ── Toggle Component ────────────────────────────────────────────────────────

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className="relative w-11 h-6 rounded-full transition-colors duration-200"
      style={{ background: enabled ? "#E85520" : "#d1d5db" }}
    >
      <span
        className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200"
        style={{ left: enabled ? "20px" : "2px" }}
      />
    </button>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────

export default function ConfiguracionPage() {
  // Personal info
  const [nombre, setNombre] = useState("Diego Morales");
  const [email, setEmail] = useState("diego.morales@email.com");
  const [telefono, setTelefono] = useState("+56 9 1234 5678");

  // Availability
  const [disponibilidad, setDisponibilidad] = useState<Record<DayKey, boolean>>({
    Lun: false,
    Mar: false,
    Mié: false,
    Jue: false,
    Vie: true,
    Sáb: true,
    Dom: true,
  });

  // Notifications
  const [notifTurnos, setNotifTurnos] = useState(true);
  const [notifInvitaciones, setNotifInvitaciones] = useState(true);
  const [notifMensajes, setNotifMensajes] = useState(true);
  const [notifRecordatorios, setNotifRecordatorios] = useState(false);

  // Work preferences
  const zonas = ["Providencia", "Las Condes", "Vitacura", "Ñuñoa", "Santiago Centro", "La Reina"];
  const [zonasSeleccionadas, setZonasSeleccionadas] = useState<string[]>(["Providencia", "Las Condes", "Vitacura"]);
  const [tarifaMinima, setTarifaMinima] = useState("4000");
  const [distanciaMaxima, setDistanciaMaxima] = useState("15");

  // Privacy
  const [mostrarPerfil, setMostrarPerfil] = useState(true);
  const [mostrarTarifa, setMostrarTarifa] = useState(false);

  const toggleZona = (zona: string) => {
    setZonasSeleccionadas((prev) =>
      prev.includes(zona) ? prev.filter((z) => z !== zona) : [...prev, zona]
    );
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8F6F3]">
      <Sidebar type="trabajador" activeItem="Ajustes" />

      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 pt-20 lg:pt-8">
          <TopBar title="Configuración" subtitle="Ajustes de tu cuenta" />

          <div className="space-y-6 max-w-3xl">
            {/* Información personal */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Información personal</h2>
              <p className="text-sm text-[#7A5C48] mb-5">Actualiza tus datos de contacto</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A0E05] mb-1.5">Nombre completo</label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1A0E05] focus:outline-none focus:ring-2 focus:ring-[#E85520]/20 focus:border-[#E85520]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1A0E05] mb-1.5">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1A0E05] focus:outline-none focus:ring-2 focus:ring-[#E85520]/20 focus:border-[#E85520]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A0E05] mb-1.5">Teléfono</label>
                    <input
                      type="tel"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1A0E05] focus:outline-none focus:ring-2 focus:ring-[#E85520]/20 focus:border-[#E85520]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Disponibilidad por defecto */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Disponibilidad por defecto</h2>
              <p className="text-sm text-[#7A5C48] mb-5">Selecciona los días que normalmente estás disponible</p>

              <div className="grid grid-cols-7 gap-2">
                {(Object.entries(disponibilidad) as [DayKey, boolean][]).map(([dia, activo]) => (
                  <button
                    key={dia}
                    onClick={() =>
                      setDisponibilidad((prev) => ({ ...prev, [dia]: !prev[dia] }))
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

            {/* Notificaciones */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Notificaciones</h2>
              <p className="text-sm text-[#7A5C48] mb-5">Controla qué notificaciones deseas recibir</p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#1A0E05]">Nuevos turnos disponibles</p>
                    <p className="text-xs text-[#7A5C48]">Recibe alertas cuando haya turnos cerca de ti</p>
                  </div>
                  <Toggle enabled={notifTurnos} onChange={() => setNotifTurnos(!notifTurnos)} />
                </div>
                <div className="border-t border-gray-100" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#1A0E05]">Invitaciones de restaurantes</p>
                    <p className="text-xs text-[#7A5C48]">Cuando un restaurante te invite a un turno</p>
                  </div>
                  <Toggle enabled={notifInvitaciones} onChange={() => setNotifInvitaciones(!notifInvitaciones)} />
                </div>
                <div className="border-t border-gray-100" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#1A0E05]">Mensajes</p>
                    <p className="text-xs text-[#7A5C48]">Notificaciones de nuevos mensajes de restaurantes</p>
                  </div>
                  <Toggle enabled={notifMensajes} onChange={() => setNotifMensajes(!notifMensajes)} />
                </div>
                <div className="border-t border-gray-100" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#1A0E05]">Recordatorios de turnos</p>
                    <p className="text-xs text-[#7A5C48]">Recuerda tus turnos 1 hora antes</p>
                  </div>
                  <Toggle enabled={notifRecordatorios} onChange={() => setNotifRecordatorios(!notifRecordatorios)} />
                </div>
              </div>
            </div>

            {/* Preferencias de trabajo */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Preferencias de trabajo</h2>
              <p className="text-sm text-[#7A5C48] mb-5">Configura tus preferencias para encontrar los mejores turnos</p>

              <div className="space-y-5">
                {/* Zonas preferidas */}
                <div>
                  <label className="block text-sm font-medium text-[#1A0E05] mb-2">Zonas preferidas</label>
                  <div className="flex flex-wrap gap-2">
                    {zonas.map((zona) => (
                      <button
                        key={zona}
                        onClick={() => toggleZona(zona)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          zonasSeleccionadas.includes(zona)
                            ? "bg-[#E85520] text-white"
                            : "bg-gray-100 text-[#7A5C48] hover:bg-gray-200"
                        }`}
                      >
                        {zona}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tarifa y distancia */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1A0E05] mb-1.5">Tarifa mínima ($/hr)</label>
                    <input
                      type="number"
                      value={tarifaMinima}
                      onChange={(e) => setTarifaMinima(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1A0E05] focus:outline-none focus:ring-2 focus:ring-[#E85520]/20 focus:border-[#E85520]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A0E05] mb-1.5">Distancia máxima (km)</label>
                    <input
                      type="number"
                      value={distanciaMaxima}
                      onChange={(e) => setDistanciaMaxima(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1A0E05] focus:outline-none focus:ring-2 focus:ring-[#E85520]/20 focus:border-[#E85520]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Privacidad */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Privacidad</h2>
              <p className="text-sm text-[#7A5C48] mb-5">Controla la visibilidad de tu perfil</p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#1A0E05]">Mostrar mi perfil a empresas</p>
                    <p className="text-xs text-[#7A5C48]">Permite que los restaurantes encuentren tu perfil</p>
                  </div>
                  <Toggle enabled={mostrarPerfil} onChange={() => setMostrarPerfil(!mostrarPerfil)} />
                </div>
                <div className="border-t border-gray-100" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#1A0E05]">Mostrar mi tarifa</p>
                    <p className="text-xs text-[#7A5C48]">Los restaurantes podrán ver tu tarifa preferida</p>
                  </div>
                  <Toggle enabled={mostrarTarifa} onChange={() => setMostrarTarifa(!mostrarTarifa)} />
                </div>
              </div>
            </div>

            {/* Zona de peligro */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
              <h2 className="text-lg font-bold text-red-600 mb-1">Zona de peligro</h2>
              <p className="text-sm text-[#7A5C48] mb-5">Acciones irreversibles en tu cuenta</p>

              <button className="px-5 py-2.5 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-xl transition">
                Eliminar cuenta
              </button>
            </div>

            {/* Save button */}
            <div className="flex justify-end pb-8">
              <button className="bg-[#E85520] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#D04A1A] transition shadow-sm shadow-[#E85520]/20">
                Guardar cambios
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
