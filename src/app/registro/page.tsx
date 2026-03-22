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

const tiposEmpresa = [
  "Restaurante",
  "Bar",
  "Cafetería",
  "Hotel",
  "Catering",
  "Otro",
];

const rolesTrabajador = [
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
  const [step, setStep] = useState<1 | 2>(1);
  const [type, setType] = useState<UserType>(null);
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

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
    setLoading(true);
    setTimeout(() => {
      if (type === "empresa") {
        router.push("/dashboard/empresa");
      } else {
        router.push("/dashboard/trabajador");
      }
    }, 1200);
  };

  const inputClass =
    "w-full bg-white rounded-xl pl-12 pr-4 py-3.5 border border-[#E0D0C0] text-[#1A0E05] placeholder:text-[#B89880] focus:border-[#E85520] focus:ring-2 focus:ring-[#E85520]/20 outline-none transition";
  const selectClass =
    "w-full bg-white rounded-xl px-4 py-3.5 border border-[#E0D0C0] text-[#1A0E05] focus:border-[#E85520] focus:ring-2 focus:ring-[#E85520]/20 outline-none transition appearance-none cursor-pointer";
  const labelClass = "block text-[#7A5C48] text-sm font-semibold mb-1.5";

  return (
    <div className="flex min-h-screen">
      {/* Left side — visual panel */}
      <div className="hidden md:flex md:w-1/2 bg-[#E85520] flex-col items-center justify-center px-12 relative">
        <div className="flex flex-col items-center max-w-md w-full">
          <Image
            src="/logo-white.png"
            alt="GourmetJobs"
            width={200}
            height={64}
            className="h-16 w-auto"
          />
          <h2 className="text-white text-3xl font-bold mt-8 text-center">
            Únete a la plataforma gastronómica #1
          </h2>
          <p className="text-white/70 mt-4 text-center text-base">
            Encuentra talento o trabajo en minutos
          </p>
          <div className="mt-10 space-y-4 w-full">
            <div className="flex items-center gap-3 bg-white/15 rounded-xl px-5 py-3 text-white text-sm">
              <span>🏢</span>
              <span>+450 restaurantes activos</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 rounded-xl px-5 py-3 text-white text-sm">
              <span>👨‍🍳</span>
              <span>+3,200 profesionales verificados</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 rounded-xl px-5 py-3 text-white text-sm">
              <span>💰</span>
              <span>100% gratis para trabajadores</span>
            </div>
          </div>
        </div>
        <p className="text-white/50 text-xs mt-auto pb-8 absolute bottom-0">
          Más de 450 restaurantes confían en GourmetJobs
        </p>
      </div>

      {/* Right side — form */}
      <div className="w-full md:w-1/2 bg-[#FFF5EE] flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          {/* Mobile logo */}
          <div className="flex justify-center mb-8 md:hidden">
            <Image
              src="/logo.png"
              alt="GourmetJobs"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Step 1: Type selection */}
          {step === 1 && (
            <>
              <h1 className="text-3xl font-extrabold text-[#1A0E05]">
                Crear cuenta
              </h1>
              <p className="text-[#7A5C48] mt-2">
                ¿Cómo quieres usar GourmetJobs?
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4">
                {/* Empresa card */}
                <button
                  type="button"
                  onClick={() => setType("empresa")}
                  className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all text-left ${
                    type === "empresa"
                      ? "border-[#E85520] bg-[#E85520]/5"
                      : "border-[#E0D0C0] bg-white hover:border-[#E85520]/40"
                  }`}
                >
                  {type === "empresa" && (
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#E85520] rounded-full flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="w-14 h-14 rounded-2xl bg-[#E85520]/10 flex items-center justify-center text-2xl">
                    🏢
                  </div>
                  <div className="font-bold text-[#1A0E05] mt-3">
                    Empresa / Restaurante
                  </div>
                  <div className="text-[#7A5C48] text-sm mt-1">
                    Busco personal gastronómico
                  </div>
                </button>

                {/* Trabajador card */}
                <button
                  type="button"
                  onClick={() => setType("trabajador")}
                  className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all text-left ${
                    type === "trabajador"
                      ? "border-[#E85520] bg-[#E85520]/5"
                      : "border-[#E0D0C0] bg-white hover:border-[#E85520]/40"
                  }`}
                >
                  {type === "trabajador" && (
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#E85520] rounded-full flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="w-14 h-14 rounded-2xl bg-[#E85520]/10 flex items-center justify-center text-2xl">
                    👨‍🍳
                  </div>
                  <div className="font-bold text-[#1A0E05] mt-3">
                    Profesional gastronómico
                  </div>
                  <div className="text-[#7A5C48] text-sm mt-1">
                    Busco oportunidades de trabajo
                  </div>
                </button>
              </div>

              <button
                type="button"
                disabled={!type}
                onClick={() => setStep(2)}
                className="mt-6 bg-[#E85520] text-white w-full py-4 rounded-xl font-bold text-base hover:bg-[#D04A1A] transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar
              </button>

              <p className="text-center text-[#7A5C48] text-sm mt-8">
                ¿Ya tienes cuenta?{" "}
                <Link
                  href="/login"
                  className="text-[#E85520] font-bold hover:underline"
                >
                  Ingresar
                </Link>
              </p>
            </>
          )}

          {/* Step 2: Registration form */}
          {step === 2 && (
            <>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-[#7A5C48] text-sm mb-6 hover:text-[#1A0E05] transition cursor-pointer flex items-center gap-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Volver
              </button>

              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-extrabold text-[#1A0E05]">
                  Completa tu registro
                </h1>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="inline-flex items-center gap-1.5 bg-[#E85520]/10 text-[#E85520] text-xs font-semibold px-3 py-1 rounded-full">
                  {type === "empresa" ? "🏢 Empresa" : "👨‍🍳 Trabajador"}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {type === "empresa" ? (
                  <>
                    {/* Nombre del restaurante */}
                    <div>
                      <label className={labelClass}>
                        Nombre del restaurante
                      </label>
                      <div className="relative">
                        <svg
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B89880]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72"
                          />
                        </svg>
                        <input
                          type="text"
                          placeholder="Ej: Restaurante El Fogón"
                          value={nombreRestaurante}
                          onChange={(e) => setNombreRestaurante(e.target.value)}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelClass}>Email</label>
                      <div className="relative">
                        <svg
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B89880]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                        <input
                          type="email"
                          placeholder="contacto@mirestaurante.cl"
                          value={emailEmpresa}
                          onChange={(e) => setEmailEmpresa(e.target.value)}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className={labelClass}>Contraseña</label>
                      <div className="relative">
                        <svg
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B89880]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                        <input
                          type="password"
                          placeholder="Mínimo 6 caracteres"
                          value={passwordEmpresa}
                          onChange={(e) => setPasswordEmpresa(e.target.value)}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    {/* Comuna */}
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

                    {/* Tipo de negocio */}
                    <div>
                      <label className={labelClass}>Tipo de negocio</label>
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
                  </>
                ) : (
                  <>
                    {/* Nombre completo */}
                    <div>
                      <label className={labelClass}>Nombre completo</label>
                      <div className="relative">
                        <svg
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B89880]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                        <input
                          type="text"
                          placeholder="Ej: Juan Pérez"
                          value={nombreCompleto}
                          onChange={(e) => setNombreCompleto(e.target.value)}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelClass}>Email</label>
                      <div className="relative">
                        <svg
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B89880]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                        <input
                          type="email"
                          placeholder="tu@email.com"
                          value={emailTrabajador}
                          onChange={(e) => setEmailTrabajador(e.target.value)}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className={labelClass}>Contraseña</label>
                      <div className="relative">
                        <svg
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B89880]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                        <input
                          type="password"
                          placeholder="Mínimo 6 caracteres"
                          value={passwordTrabajador}
                          onChange={(e) =>
                            setPasswordTrabajador(e.target.value)
                          }
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    {/* Rol principal */}
                    <div>
                      <label className={labelClass}>Rol principal</label>
                      <select
                        value={rolPrincipal}
                        onChange={(e) => setRolPrincipal(e.target.value)}
                        className={selectClass}
                        required
                      >
                        <option value="">Selecciona tu rol</option>
                        {rolesTrabajador.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Comuna */}
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
                  </>
                )}

                {/* Terms */}
                <label className="flex items-start gap-3 cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-[#E0D0C0] text-[#E85520] focus:ring-[#E85520]/20 cursor-pointer accent-[#E85520]"
                    required
                  />
                  <span className="text-sm text-[#7A5C48]">
                    Acepto los{" "}
                    <Link href="#" className="text-[#E85520] hover:underline">
                      términos y condiciones
                    </Link>
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || !acceptTerms}
                  className="bg-[#E85520] text-white w-full py-4 rounded-xl font-bold text-base hover:bg-[#D04A1A] transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      <span>Creando cuenta...</span>
                    </>
                  ) : type === "empresa" ? (
                    "Crear cuenta empresa"
                  ) : (
                    "Crear mi perfil"
                  )}
                </button>
              </form>

              {/* Login link */}
              <p className="text-center text-[#7A5C48] text-sm mt-8">
                ¿Ya tienes cuenta?{" "}
                <Link
                  href="/login"
                  className="text-[#E85520] font-bold hover:underline"
                >
                  Ingresar
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
