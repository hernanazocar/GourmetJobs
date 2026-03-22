"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

// ── Toggle component ─────────────────────────────────────────────────────────

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        enabled ? "bg-[#E85520]" : "bg-[#D4C4B0]"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function ConfiguracionPage() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [whatsappNotif, setWhatsappNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [timezone, setTimezone] = useState("America/Santiago");

  return (
    <div className="flex h-screen bg-[#F8F6F3] overflow-hidden">
      <Sidebar type="empresa" activeItem="Configuracion" />

      <main className="flex-1 overflow-y-auto ml-0 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 space-y-6">
          <TopBar title="Configuracion" subtitle="Ajustes de tu cuenta" />

          {/* Informacion de la empresa */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
            <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Informacion de la empresa</h2>
            <p className="text-sm text-[#7A5C48] mb-6">Datos principales de tu negocio</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#1A0E05] mb-1.5">
                  Nombre de la empresa
                </label>
                <input
                  type="text"
                  defaultValue="La Mision"
                  className="w-full px-4 py-3 bg-[#F8F6F3] rounded-xl text-sm text-[#1A0E05] outline-none focus:ring-2 focus:ring-[#E85520]/20 border border-transparent focus:border-[#E85520]/30"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A0E05] mb-1.5">
                  Correo electronico
                </label>
                <input
                  type="email"
                  defaultValue="contacto@lamision.cl"
                  className="w-full px-4 py-3 bg-[#F8F6F3] rounded-xl text-sm text-[#1A0E05] outline-none focus:ring-2 focus:ring-[#E85520]/20 border border-transparent focus:border-[#E85520]/30"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A0E05] mb-1.5">
                  Telefono
                </label>
                <input
                  type="tel"
                  defaultValue="+56 9 1234 5678"
                  className="w-full px-4 py-3 bg-[#F8F6F3] rounded-xl text-sm text-[#1A0E05] outline-none focus:ring-2 focus:ring-[#E85520]/20 border border-transparent focus:border-[#E85520]/30"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A0E05] mb-1.5">
                  Direccion
                </label>
                <input
                  type="text"
                  defaultValue="Av. Providencia 1234, Santiago"
                  className="w-full px-4 py-3 bg-[#F8F6F3] rounded-xl text-sm text-[#1A0E05] outline-none focus:ring-2 focus:ring-[#E85520]/20 border border-transparent focus:border-[#E85520]/30"
                />
              </div>
            </div>
          </div>

          {/* Plan actual */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
            <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Plan actual</h2>
            <p className="text-sm text-[#7A5C48] mb-6">Tu suscripcion y uso</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1 p-5 rounded-2xl bg-gradient-to-br from-[#E85520] to-[#D04A1A] text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium opacity-90">Plan actual</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold">Activo</span>
                </div>
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-sm opacity-80 mt-1">$49.990 / mes</p>
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-[#7A5C48]">Turnos publicados</span>
                    <span className="font-semibold text-[#1A0E05]">24 / 50</span>
                  </div>
                  <div className="w-full bg-[#F8F6F3] rounded-full h-2">
                    <div className="bg-[#E85520] h-2 rounded-full" style={{ width: "48%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-[#7A5C48]">Mensajes enviados</span>
                    <span className="font-semibold text-[#1A0E05]">156 / 500</span>
                  </div>
                  <div className="w-full bg-[#F8F6F3] rounded-full h-2">
                    <div className="bg-[#2563eb] h-2 rounded-full" style={{ width: "31%" }} />
                  </div>
                </div>
                <button className="mt-2 px-5 py-2.5 text-sm font-semibold text-[#E85520] bg-[#FFF0E6] rounded-xl hover:bg-[#FFE4D4] transition-colors">
                  Cambiar plan
                </button>
              </div>
            </div>
          </div>

          {/* Notificaciones */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
            <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Notificaciones</h2>
            <p className="text-sm text-[#7A5C48] mb-6">Configura como recibir alertas</p>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#1A0E05]">Notificaciones por email</p>
                  <p className="text-xs text-[#7A5C48] mt-0.5">Recibe actualizaciones de turnos y postulaciones</p>
                </div>
                <Toggle enabled={emailNotif} onToggle={() => setEmailNotif(!emailNotif)} />
              </div>

              <div className="border-t border-[#F0E6DC]" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#1A0E05]">Notificaciones por WhatsApp</p>
                  <p className="text-xs text-[#7A5C48] mt-0.5">Alertas instantaneas en tu celular</p>
                </div>
                <Toggle enabled={whatsappNotif} onToggle={() => setWhatsappNotif(!whatsappNotif)} />
              </div>

              <div className="border-t border-[#F0E6DC]" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#1A0E05]">Notificaciones push</p>
                  <p className="text-xs text-[#7A5C48] mt-0.5">Notificaciones en el navegador</p>
                </div>
                <Toggle enabled={pushNotif} onToggle={() => setPushNotif(!pushNotif)} />
              </div>
            </div>
          </div>

          {/* Zona horaria */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6DC]/50">
            <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Zona horaria</h2>
            <p className="text-sm text-[#7A5C48] mb-4">Define la zona horaria de tu empresa</p>

            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full max-w-sm px-4 py-3 bg-[#F8F6F3] rounded-xl text-sm text-[#1A0E05] outline-none focus:ring-2 focus:ring-[#E85520]/20 border border-transparent focus:border-[#E85520]/30 appearance-none cursor-pointer"
            >
              <option value="America/Santiago">America/Santiago (GMT-3)</option>
              <option value="America/Buenos_Aires">America/Buenos Aires (GMT-3)</option>
              <option value="America/Lima">America/Lima (GMT-5)</option>
              <option value="America/Bogota">America/Bogota (GMT-5)</option>
              <option value="America/Mexico_City">America/Mexico City (GMT-6)</option>
              <option value="Europe/Madrid">Europe/Madrid (GMT+1)</option>
            </select>
          </div>

          {/* Zona de peligro */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-200">
            <h2 className="text-lg font-bold text-red-600 mb-1">Zona de peligro</h2>
            <p className="text-sm text-[#7A5C48] mb-4">
              Acciones irreversibles. Procede con precaucion.
            </p>
            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors">
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
  );
}
