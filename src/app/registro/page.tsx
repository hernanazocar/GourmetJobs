"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type UserType = "empresa" | "trabajador" | null;

const comunas = [
  "Santiago Centro",
  "Providencia",
  "Las Condes",
  "Vitacura",
  "Ñuñoa",
  "La Reina",
  "Macul",
  "San Miguel",
  "Maipú",
  "La Florida",
  "Puente Alto",
  "Valparaíso",
  "Viña del Mar",
  "Concepción",
  "Temuco",
  "Otra",
];

const tiposEmpresa = ["Restaurante", "Bar", "Catering", "Hotel", "Otro"];

const rolesTrabjador = [
  "Garzón",
  "Chef",
  "Barman",
  "Mesero",
  "Pastelero",
  "Hostess",
  "Sommelier",
  "Ayudante",
  "Otro",
];

export default function RegistroPage() {
  const router = useRouter();
  const [userType, setUserType] = useState<UserType>(null);

  // Empresa fields
  const [nombreRestaurante, setNombreRestaurante] = useState("");
  const [emailEmpresa, setEmailEmpresa] = useState("");
  const [passwordEmpresa, setPasswordEmpresa] = useState("");
  const [comunaEmpresa, setComunaEmpresa] = useState("");
  const [tipoEmpresa, setTipoEmpresa] = useState("");

  // Trabajador fields
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [emailTrabajador, setEmailTrabajador] = useState("");
  const [passwordTrabajador, setPasswordTrabajador] = useState("");
  const [rolPrincipal, setRolPrincipal] = useState("");
  const [comunaTrabajador, setComunaTrabajador] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === "empresa") {
      router.push("/dashboard/empresa");
    } else {
      router.push("/dashboard/trabajador");
    }
  };

  const inputClass =
    "w-full bg-[#FFF5EE] rounded-xl px-4 py-3 border-0 text-[#1A0E05] placeholder:text-[#B89880] outline-none focus:ring-2 focus:ring-[#E85520]/30 transition";
  const labelClass = "block text-[#7A5C48] text-sm font-semibold mb-1";
  const selectClass =
    "w-full bg-[#FFF5EE] rounded-xl px-4 py-3 border-0 text-[#1A0E05] outline-none focus:ring-2 focus:ring-[#E85520]/30 transition appearance-none cursor-pointer";

  return (
    <div className="min-h-screen bg-[#FFF5EE] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="GourmetJobs"
            width={160}
            height={48}
            className="h-12 w-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1A0E05] text-center mb-8">
          Crea tu cuenta
        </h1>

        {/* Step 1: Type Selection */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            type="button"
            onClick={() => setUserType("empresa")}
            className={`rounded-2xl p-6 cursor-pointer border-2 transition-all text-center ${
              userType === "empresa"
                ? "bg-[#E85520]/10 border-[#E85520]"
                : "bg-[#E85520]/5 border-transparent hover:bg-[#E85520]/10"
            }`}
          >
            <div className="text-4xl mb-2">🏢</div>
            <div className="font-bold text-[#1A0E05] text-base">Empresa</div>
            <div className="text-[#7A5C48] text-sm mt-1">Busco personal</div>
          </button>

          <button
            type="button"
            onClick={() => setUserType("trabajador")}
            className={`rounded-2xl p-6 cursor-pointer border-2 transition-all text-center ${
              userType === "trabajador"
                ? "bg-[#E85520]/10 border-[#E85520]"
                : "bg-[#E85520]/5 border-transparent hover:bg-[#E85520]/10"
            }`}
          >
            <div className="text-4xl mb-2">👨‍🍳</div>
            <div className="font-bold text-[#1A0E05] text-base">Trabajador</div>
            <div className="text-[#7A5C48] text-sm mt-1">Busco trabajo</div>
          </button>
        </div>

        {/* Step 2: Form */}
        {userType && (
          <form onSubmit={handleSubmit} className="space-y-5">
            {userType === "empresa" ? (
              <>
                <div>
                  <label className={labelClass}>Nombre del restaurante</label>
                  <input
                    type="text"
                    placeholder="Ej: Restaurante El Fogón"
                    value={nombreRestaurante}
                    onChange={(e) => setNombreRestaurante(e.target.value)}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    placeholder="contacto@mirestaurante.cl"
                    value={emailEmpresa}
                    onChange={(e) => setEmailEmpresa(e.target.value)}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Contraseña</label>
                  <input
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    value={passwordEmpresa}
                    onChange={(e) => setPasswordEmpresa(e.target.value)}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Comuna / Zona</label>
                  <select
                    value={comunaEmpresa}
                    onChange={(e) => setComunaEmpresa(e.target.value)}
                    className={selectClass}
                    required
                  >
                    <option value="">Selecciona una comuna</option>
                    {comunas.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Tipo</label>
                  <select
                    value={tipoEmpresa}
                    onChange={(e) => setTipoEmpresa(e.target.value)}
                    className={selectClass}
                    required
                  >
                    <option value="">Selecciona un tipo</option>
                    {tiposEmpresa.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-[#E85520] text-white w-full py-4 rounded-xl font-bold text-base hover:bg-[#D04A1A] transition cursor-pointer"
                >
                  Crear cuenta empresa
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className={labelClass}>Nombre completo</label>
                  <input
                    type="text"
                    placeholder="Ej: Juan Pérez"
                    value={nombreCompleto}
                    onChange={(e) => setNombreCompleto(e.target.value)}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={emailTrabajador}
                    onChange={(e) => setEmailTrabajador(e.target.value)}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Contraseña</label>
                  <input
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    value={passwordTrabajador}
                    onChange={(e) => setPasswordTrabajador(e.target.value)}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Rol principal</label>
                  <select
                    value={rolPrincipal}
                    onChange={(e) => setRolPrincipal(e.target.value)}
                    className={selectClass}
                    required
                  >
                    <option value="">Selecciona tu rol</option>
                    {rolesTrabjador.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Comuna / Zona</label>
                  <select
                    value={comunaTrabajador}
                    onChange={(e) => setComunaTrabajador(e.target.value)}
                    className={selectClass}
                    required
                  >
                    <option value="">Selecciona una comuna</option>
                    {comunas.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-[#E85520] text-white w-full py-4 rounded-xl font-bold text-base hover:bg-[#D04A1A] transition cursor-pointer"
                >
                  Crear mi perfil
                </button>
              </>
            )}
          </form>
        )}

        {/* Bottom link */}
        <p className="text-center text-[#7A5C48] text-sm mt-8">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="text-[#E85520] font-semibold hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
