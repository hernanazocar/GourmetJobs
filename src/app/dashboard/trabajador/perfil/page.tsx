"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

const rolesOptions = [
  "Garzón", "Chef", "Barman", "Sommelier", "Hostess",
  "Ayudante de cocina", "Pastelero", "Barista", "Steward",
];

const habilidadesDefault = [
  "Cocina francesa", "Mixología", "Atención al cliente",
  "Sommelier básico", "Cocina japonesa",
];

const comunas = [
  "Providencia", "Las Condes", "Vitacura", "Santiago Centro",
  "Ñuñoa", "La Reina", "Lo Barnechea", "Recoleta",
];

const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

export default function PerfilTrabajadorPage() {
  // Personal info
  const [nombre, setNombre] = useState("Diego");
  const [apellido, setApellido] = useState("Martínez");
  const [email, setEmail] = useState("diego.martinez@email.com");
  const [telefono, setTelefono] = useState("+56 9 1234 5678");

  // Experience
  const [rolPrincipal, setRolPrincipal] = useState("Garzón");
  const [rolesSecundarios, setRolesSecundarios] = useState<string[]>(["Barman", "Hostess"]);
  const [anosExperiencia, setAnosExperiencia] = useState("3-5");
  const [habilidades, setHabilidades] = useState<string[]>(["Cocina francesa", "Mixología", "Atención al cliente"]);
  const [nuevaHabilidad, setNuevaHabilidad] = useState("");
  const [bio, setBio] = useState("Garzón con experiencia en restaurantes de alta cocina y atención personalizada.");

  // Preferences
  const [turnos, setTurnos] = useState({ manana: true, tarde: true, noche: false, finDeSemana: true });
  const [zona, setZona] = useState("Providencia");
  const [precioDesde, setPrecioDesde] = useState("8000");
  const [precioHasta, setPrecioHasta] = useState("15000");
  const [urgencias, setUrgencias] = useState(true);

  // Availability
  const [diasActivos, setDiasActivos] = useState<Record<string, boolean>>({
    Lun: true, Mar: true, Mié: true, Jue: true, Vie: true, Sáb: false, Dom: false,
  });
  const [horarios, setHorarios] = useState<Record<string, { desde: string; hasta: string }>>({
    Lun: { desde: "09:00", hasta: "18:00" },
    Mar: { desde: "09:00", hasta: "18:00" },
    Mié: { desde: "09:00", hasta: "18:00" },
    Jue: { desde: "09:00", hasta: "18:00" },
    Vie: { desde: "09:00", hasta: "18:00" },
    Sáb: { desde: "10:00", hasta: "16:00" },
    Dom: { desde: "10:00", hasta: "16:00" },
  });

  const toggleRolSecundario = (rol: string) => {
    setRolesSecundarios((prev) =>
      prev.includes(rol) ? prev.filter((r) => r !== rol) : [...prev, rol]
    );
  };

  const addHabilidad = () => {
    if (nuevaHabilidad.trim() && !habilidades.includes(nuevaHabilidad.trim())) {
      setHabilidades([...habilidades, nuevaHabilidad.trim()]);
      setNuevaHabilidad("");
    }
  };

  const removeHabilidad = (h: string) => {
    setHabilidades(habilidades.filter((x) => x !== h));
  };

  const toggleDia = (dia: string) => {
    setDiasActivos((prev) => ({ ...prev, [dia]: !prev[dia] }));
  };

  const updateHorario = (dia: string, field: "desde" | "hasta", value: string) => {
    setHorarios((prev) => ({
      ...prev,
      [dia]: { ...prev[dia], [field]: value },
    }));
  };

  const inputClass = "w-full bg-[#FFF5EE] rounded-xl px-4 py-3 text-sm text-[#1A0E05] border-none outline-none focus:ring-2 focus:ring-[#E85520]/30 transition placeholder:text-[#BFA58A]";
  const labelClass = "block text-sm font-medium text-[#7A5C48] mb-1.5";

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Sidebar type="trabajador" activeItem="Mi perfil" />

      <main className="ml-0 lg:ml-64 p-6 lg:p-8 pt-20 lg:pt-8">
        {/* TopBar */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#1A0E05]">Mi perfil</h1>
          <p className="text-[#7A5C48] mt-1">Tu perfil es tu producto. Mantenlo actualizado.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* ── Left column ─────────────────────────────────────────── */}
          <div className="xl:col-span-2 space-y-6">
            {/* Card 1: Información personal */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-5">Información personal</h2>

              {/* Avatar */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-24 h-24 rounded-full bg-[#FFF0E6] flex items-center justify-center cursor-pointer group">
                  <span className="text-3xl font-bold text-[#E85520]">DM</span>
                  <div className="absolute inset-0 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A0E05]">Foto de perfil</p>
                  <p className="text-xs text-[#7A5C48] mt-0.5">JPG, PNG. Max 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Nombre</label>
                  <input className={inputClass} value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Apellido</label>
                  <input className={inputClass} value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input className={inputClass} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Teléfono</label>
                  <input className={inputClass} type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
              </div>
            </div>

            {/* Card 2: Experiencia y habilidades */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-5">Experiencia y habilidades</h2>

              <div className="space-y-5">
                {/* Rol principal */}
                <div>
                  <label className={labelClass}>Rol principal</label>
                  <select
                    className={inputClass}
                    value={rolPrincipal}
                    onChange={(e) => setRolPrincipal(e.target.value)}
                  >
                    {rolesOptions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {/* Roles secundarios */}
                <div>
                  <label className={labelClass}>Roles secundarios</label>
                  <div className="flex flex-wrap gap-2">
                    {rolesOptions
                      .filter((r) => r !== rolPrincipal)
                      .map((rol) => {
                        const active = rolesSecundarios.includes(rol);
                        return (
                          <button
                            key={rol}
                            onClick={() => toggleRolSecundario(rol)}
                            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition ${
                              active
                                ? "bg-[#E85520] text-white"
                                : "bg-[#F8F6F3] text-[#7A5C48] hover:bg-[#F0E6DC]"
                            }`}
                          >
                            {rol}
                          </button>
                        );
                      })}
                  </div>
                </div>

                {/* Años de experiencia */}
                <div>
                  <label className={labelClass}>Años de experiencia</label>
                  <select
                    className={inputClass}
                    value={anosExperiencia}
                    onChange={(e) => setAnosExperiencia(e.target.value)}
                  >
                    <option value="<1">Menos de 1</option>
                    <option value="1-2">1-2 años</option>
                    <option value="3-5">3-5 años</option>
                    <option value="5-10">5-10 años</option>
                    <option value="10+">10+ años</option>
                  </select>
                </div>

                {/* Habilidades */}
                <div>
                  <label className={labelClass}>Habilidades</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {habilidades.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E85520]/10 text-[#E85520] rounded-full text-sm font-medium"
                      >
                        {h}
                        <button onClick={() => removeHabilidad(h)} className="hover:text-[#C4400E] transition">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      className={inputClass}
                      placeholder="Agregar habilidad..."
                      value={nuevaHabilidad}
                      onChange={(e) => setNuevaHabilidad(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addHabilidad()}
                    />
                    <button
                      onClick={addHabilidad}
                      className="px-4 py-2 bg-[#E85520] text-white rounded-xl text-sm font-semibold hover:bg-[#D14A1A] transition shrink-0"
                    >
                      Agregar
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {habilidadesDefault
                      .filter((h) => !habilidades.includes(h))
                      .map((h) => (
                        <button
                          key={h}
                          onClick={() => setHabilidades([...habilidades, h])}
                          className="px-2.5 py-1 bg-[#F8F6F3] text-[#7A5C48] rounded-full text-xs hover:bg-[#F0E6DC] transition"
                        >
                          + {h}
                        </button>
                      ))}
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className={labelClass}>Bio corta</label>
                  <textarea
                    className={`${inputClass} resize-none h-20`}
                    maxLength={200}
                    placeholder="Describe tu experiencia en una frase"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                  <p className="text-xs text-[#BFA58A] mt-1 text-right">{bio.length}/200</p>
                </div>
              </div>
            </div>

            {/* Card 3: Preferencias de trabajo */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-5">Preferencias de trabajo</h2>

              <div className="space-y-5">
                {/* Tipo de turno */}
                <div>
                  <label className={labelClass}>Tipo de turno preferido</label>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {(
                      [
                        { key: "manana", label: "Mañana" },
                        { key: "tarde", label: "Tarde" },
                        { key: "noche", label: "Noche" },
                        { key: "finDeSemana", label: "Fin de semana" },
                      ] as const
                    ).map(({ key, label }) => (
                      <label key={key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={turnos[key]}
                          onChange={() => setTurnos((prev) => ({ ...prev, [key]: !prev[key] }))}
                          className="w-4 h-4 rounded accent-[#E85520]"
                        />
                        <span className="text-sm text-[#1A0E05]">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Zona */}
                <div>
                  <label className={labelClass}>Zona</label>
                  <select className={inputClass} value={zona} onChange={(e) => setZona(e.target.value)}>
                    {comunas.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Tarifa referencial */}
                <div>
                  <label className={labelClass}>Tarifa referencial</label>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 flex-1">
                      <span className="text-sm text-[#7A5C48]">$</span>
                      <input
                        className={inputClass}
                        type="number"
                        value={precioDesde}
                        onChange={(e) => setPrecioDesde(e.target.value)}
                        placeholder="Desde"
                      />
                    </div>
                    <span className="text-[#BFA58A]">-</span>
                    <div className="flex items-center gap-1 flex-1">
                      <span className="text-sm text-[#7A5C48]">$</span>
                      <input
                        className={inputClass}
                        type="number"
                        value={precioHasta}
                        onChange={(e) => setPrecioHasta(e.target.value)}
                        placeholder="Hasta"
                      />
                    </div>
                  </div>
                  <select className={`${inputClass} mt-2`} defaultValue="por hora">
                    <option value="por hora">Por hora</option>
                    <option value="por día">Por día</option>
                    <option value="por turno">Por turno</option>
                    <option value="a convenir">A convenir</option>
                  </select>
                  <p className="text-xs text-[#9A7A60] mt-2">La tarifa es solo referencial. El acuerdo final es entre tu y el restaurante.</p>
                </div>

                {/* Urgencias toggle */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#1A0E05]">Disponible para urgencias</p>
                    <p className="text-xs text-[#7A5C48]">Recibirás notificaciones de turnos urgentes</p>
                  </div>
                  <button
                    onClick={() => setUrgencias(!urgencias)}
                    className={`relative w-12 h-6 rounded-full transition ${
                      urgencias ? "bg-[#E85520]" : "bg-[#D9CFC4]"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        urgencias ? "translate-x-6" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right column ────────────────────────────────────────── */}
          <div className="space-y-6">
            {/* Card 4: Vista previa */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-1">Vista previa del perfil</h2>
              <p className="text-xs text-[#7A5C48] mb-5">Así te ven las empresas</p>

              <div className="bg-[#F8F6F3] rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#FFF0E6] flex items-center justify-center">
                    <span className="text-xl font-bold text-[#E85520]">DM</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A0E05]">{nombre} {apellido}</h3>
                    <p className="text-sm text-[#E85520] font-medium">{rolPrincipal}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className={`w-4 h-4 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#1A0E05]">4.7</span>
                  <span className="text-xs text-[#7A5C48]">(48 turnos)</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white rounded-xl py-2">
                    <p className="text-lg font-bold text-[#1A0E05]">48</p>
                    <p className="text-[10px] text-[#7A5C48]">Turnos</p>
                  </div>
                  <div className="bg-white rounded-xl py-2">
                    <p className="text-lg font-bold text-[#1A0E05]">98%</p>
                    <p className="text-[10px] text-[#7A5C48]">Puntualidad</p>
                  </div>
                  <div className="bg-white rounded-xl py-2">
                    <p className="text-lg font-bold text-[#1A0E05]">3-5</p>
                    <p className="text-[10px] text-[#7A5C48]">Años exp.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {habilidades.slice(0, 3).map((h) => (
                    <span key={h} className="px-2 py-0.5 bg-[#E85520]/10 text-[#E85520] text-xs rounded-full font-medium">
                      {h}
                    </span>
                  ))}
                  {habilidades.length > 3 && (
                    <span className="px-2 py-0.5 bg-[#F0E6DC] text-[#7A5C48] text-xs rounded-full font-medium">
                      +{habilidades.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Card 5: GourmetScore */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-4">GourmetScore</h2>

              <div className="text-center mb-5">
                <span className="text-5xl font-extrabold text-[#E85520]">4.7</span>
                <p className="text-sm text-[#7A5C48] mt-1">de 5.0</p>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Puntualidad", value: 98 },
                  { label: "Aceptación", value: 94 },
                  { label: "Rating", value: 96 },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#7A5C48]">{label}</span>
                      <span className="font-semibold text-[#1A0E05]">{label === "Rating" ? "4.8" : `${value}%`}</span>
                    </div>
                    <div className="h-2 bg-[#F8F6F3] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#E85520] rounded-full transition-all"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#7A5C48] mt-4 text-center">Tu score mejora con cada turno completado</p>
            </div>

            {/* Card 6: Disponibilidad semanal */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#1A0E05] mb-4">Disponibilidad semanal</h2>

              <div className="space-y-3">
                {diasSemana.map((dia) => (
                  <div key={dia}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#1A0E05] w-10">{dia}</span>
                      <button
                        onClick={() => toggleDia(dia)}
                        className={`relative w-10 h-5 rounded-full transition ${
                          diasActivos[dia] ? "bg-green-500" : "bg-[#D9CFC4]"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                            diasActivos[dia] ? "translate-x-5" : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    </div>
                    {diasActivos[dia] && (
                      <div className="flex items-center gap-2 mt-1.5 ml-12">
                        <input
                          type="time"
                          className="bg-[#FFF5EE] rounded-lg px-2 py-1 text-xs text-[#1A0E05] outline-none"
                          value={horarios[dia].desde}
                          onChange={(e) => updateHorario(dia, "desde", e.target.value)}
                        />
                        <span className="text-xs text-[#BFA58A]">a</span>
                        <input
                          type="time"
                          className="bg-[#FFF5EE] rounded-lg px-2 py-1 text-xs text-[#1A0E05] outline-none"
                          value={horarios[dia].hasta}
                          onChange={(e) => updateHorario(dia, "hasta", e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Save button */}
        <div className="mt-8 flex justify-end">
          <button className="px-8 py-3 bg-[#E85520] text-white font-semibold rounded-xl hover:bg-[#D14A1A] transition shadow-lg shadow-[#E85520]/20">
            Guardar cambios
          </button>
        </div>
      </main>
    </div>
  );
}
