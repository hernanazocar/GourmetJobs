"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

const CARGOS = ["Garzón", "Chef", "Barman", "Mesero", "Pastelero", "Sommelier", "Hostess", "Ayudante de cocina"];
const DURACIONES = ["Turno único", "Temporal", "Indefinido"];
const ZONAS = ["Providencia", "Las Condes", "Ñuñoa", "Vitacura", "Santiago Centro", "Lo Barnechea", "Recoleta"];

export default function NecesidadPage() {
  const [cargo, setCargo] = useState("Garzón");
  const [cantidad, setCantidad] = useState(1);
  const [fecha, setFecha] = useState("");
  const [horaDesde, setHoraDesde] = useState("19:00");
  const [horaHasta, setHoraHasta] = useState("01:00");
  const [duracion, setDuracion] = useState("Turno único");
  const [zona, setZona] = useState("Providencia");
  const [precioDesde, setPrecioDesde] = useState(7000);
  const [precioHasta, setPrecioHasta] = useState(10000);
  const [tarifaTipo, setTarifaTipo] = useState("por hora");
  const [requisitos, setRequisitos] = useState("");
  const [urgente, setUrgente] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Sidebar type="empresa" activeItem="Mis turnos" />

      <main className="ml-0 lg:ml-64 p-6 lg:p-8">
        {/* TopBar */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#1A0E05]">Crear necesidad</h1>
          <p className="text-[#7A5C48] mt-1">Describe lo que necesitas y recibe candidatos</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* Cargo */}
                <div>
                  <label className="block text-sm font-semibold text-[#1A0E05] mb-2">Cargo</label>
                  <select
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    className="w-full bg-[#FFF5EE] rounded-xl px-4 py-3 text-[#1A0E05] border-none outline-none"
                  >
                    {CARGOS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Cantidad */}
                <div>
                  <label className="block text-sm font-semibold text-[#1A0E05] mb-2">Cantidad de personas</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                    className="w-full bg-[#FFF5EE] rounded-xl px-4 py-3 text-[#1A0E05] border-none outline-none"
                  />
                </div>

                {/* Fecha */}
                <div>
                  <label className="block text-sm font-semibold text-[#1A0E05] mb-2">Fecha</label>
                  <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    className="w-full bg-[#FFF5EE] rounded-xl px-4 py-3 text-[#1A0E05] border-none outline-none"
                  />
                </div>

                {/* Horario */}
                <div>
                  <label className="block text-sm font-semibold text-[#1A0E05] mb-2">Horario</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="time"
                      value={horaDesde}
                      onChange={(e) => setHoraDesde(e.target.value)}
                      className="flex-1 bg-[#FFF5EE] rounded-xl px-4 py-3 text-[#1A0E05] border-none outline-none"
                    />
                    <span className="text-[#7A5C48] font-medium">a</span>
                    <input
                      type="time"
                      value={horaHasta}
                      onChange={(e) => setHoraHasta(e.target.value)}
                      className="flex-1 bg-[#FFF5EE] rounded-xl px-4 py-3 text-[#1A0E05] border-none outline-none"
                    />
                  </div>
                </div>

                {/* Duración */}
                <div>
                  <label className="block text-sm font-semibold text-[#1A0E05] mb-2">Duración</label>
                  <div className="flex gap-2">
                    {DURACIONES.map((d) => (
                      <button
                        type="button"
                        key={d}
                        onClick={() => setDuracion(d)}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          duracion === d
                            ? "bg-[#E85520] text-white shadow-sm"
                            : "bg-[#FFF5EE] text-[#7A5C48] hover:bg-orange-100"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Zona */}
                <div>
                  <label className="block text-sm font-semibold text-[#1A0E05] mb-2">Zona / Ubicación</label>
                  <select
                    value={zona}
                    onChange={(e) => setZona(e.target.value)}
                    className="w-full bg-[#FFF5EE] rounded-xl px-4 py-3 text-[#1A0E05] border-none outline-none"
                  >
                    {ZONAS.map((z) => (
                      <option key={z} value={z}>{z}</option>
                    ))}
                  </select>
                </div>

                {/* Tarifa referencial (rango) */}
                <div>
                  <label className="block text-sm font-semibold text-[#1A0E05] mb-2">Tarifa referencial (rango)</label>
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A5C48] font-semibold">$</span>
                      <input
                        type="number"
                        min={0}
                        value={precioDesde}
                        onChange={(e) => setPrecioDesde(Number(e.target.value))}
                        placeholder="Desde"
                        className="w-full bg-[#FFF5EE] rounded-xl pl-8 pr-4 py-3 text-[#1A0E05] border-none outline-none"
                      />
                    </div>
                    <span className="text-[#7A5C48] font-medium">-</span>
                    <div className="relative flex-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A5C48] font-semibold">$</span>
                      <input
                        type="number"
                        min={0}
                        value={precioHasta}
                        onChange={(e) => setPrecioHasta(Number(e.target.value))}
                        placeholder="Hasta"
                        className="w-full bg-[#FFF5EE] rounded-xl pl-8 pr-4 py-3 text-[#1A0E05] border-none outline-none"
                      />
                    </div>
                  </div>
                  <select
                    value={tarifaTipo}
                    onChange={(e) => setTarifaTipo(e.target.value)}
                    className="w-full bg-[#FFF5EE] rounded-xl px-4 py-3 text-[#1A0E05] border-none outline-none mt-2"
                  >
                    <option value="por hora">Por hora</option>
                    <option value="por día">Por día</option>
                    <option value="por turno">Por turno</option>
                    <option value="a convenir">A convenir</option>
                  </select>
                  <p className="text-xs text-[#9A7A60] mt-2">La tarifa es referencial. El acuerdo final es directo con el profesional.</p>
                </div>

                {/* Requisitos */}
                <div>
                  <label className="block text-sm font-semibold text-[#1A0E05] mb-2">Requisitos especiales</label>
                  <textarea
                    value={requisitos}
                    onChange={(e) => setRequisitos(e.target.value)}
                    placeholder="Ej: Se requiere experiencia en eventos de más de 100 personas, manejo de bandeja..."
                    rows={4}
                    className="w-full bg-[#FFF5EE] rounded-xl px-4 py-3 text-[#1A0E05] border-none outline-none resize-none placeholder:text-[#7A5C48]/50"
                  />
                </div>

                {/* Urgencia toggle */}
                <div className="flex items-center justify-between bg-[#FFF5EE] rounded-xl px-4 py-4">
                  <div>
                    <span className="text-sm font-semibold text-[#1A0E05]">Es urgente</span>
                    <p className="text-xs text-[#7A5C48] mt-0.5">
                      Agrega una insignia &#128293; y aumenta la visibilidad de tu publicación
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUrgente(!urgente)}
                    className={`relative w-12 h-7 rounded-full transition-colors ${
                      urgente ? "bg-[#E85520]" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                        urgente ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Preview */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-[#7A5C48] uppercase tracking-wider mb-4">
                  Así verán tu publicación los trabajadores
                </h3>
                <div className="bg-[#F8F6F3] rounded-2xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold text-[#1A0E05]">
                          {cantidad > 1 ? `${cantidad}x ` : ""}{cargo}
                        </h4>
                        {urgente && (
                          <span className="bg-red-50 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-200">
                            &#128293; Urgente
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#7A5C48] mt-1">La Misión - {zona}</p>
                    </div>
                    <span className="text-lg font-bold text-[#E85520]">
                      ${precioDesde.toLocaleString("es-CL")} - ${precioHasta.toLocaleString("es-CL")}/{tarifaTipo === "a convenir" ? "a convenir" : tarifaTipo.replace("por ", "")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-[#7A5C48]">
                    {fecha && <span>&#128197; {fecha}</span>}
                    <span>&#128336; {horaDesde} - {horaHasta}</span>
                    <span>&#128205; {zona}</span>
                    <span className="bg-white px-2.5 py-0.5 rounded-lg text-xs font-medium">{duracion}</span>
                  </div>
                  {requisitos && (
                    <p className="text-sm text-[#7A5C48] mt-3 pt-3 border-t border-gray-200">{requisitos}</p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-8 py-4 rounded-2xl bg-[#E85520] text-white font-bold text-lg hover:bg-[#d04a18] transition-colors shadow-lg shadow-orange-200"
              >
                Publicar necesidad
              </button>
            </div>
          </form>
        ) : (
          /* Success state */
          <div className="max-w-lg mx-auto text-center py-16">
            <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1A0E05] mb-3">Tu necesidad fue publicada</h2>
            <p className="text-[#7A5C48] mb-8">
              Te notificaremos cuando haya candidatos interesados en tu turno de {cargo} en {zona}.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-xl border-2 border-[#E85520] text-[#E85520] font-semibold hover:bg-[#FFF5EE] transition-colors"
              >
                Crear otra necesidad
              </button>
              <button className="px-6 py-3 rounded-xl bg-[#E85520] text-white font-semibold hover:bg-[#d04a18] transition-colors">
                Ver mis publicaciones
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
