"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard/empresa");
    }, 1200);
  };

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
            Talento gastronómico en tiempo real
          </h2>
          <p className="text-white/70 mt-4 text-center text-base">
            Conecta con profesionales disponibles ahora mismo
          </p>
          <div className="mt-10 space-y-4 w-full">
            <div className="flex items-center gap-3 bg-white/15 rounded-xl px-5 py-3 text-white text-sm">
              <span>🟢</span>
              <span>247 profesionales activos ahora</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 rounded-xl px-5 py-3 text-white text-sm">
              <span>⚡</span>
              <span>Match en menos de 2 minutos</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 rounded-xl px-5 py-3 text-white text-sm">
              <span>✅</span>
              <span>98% tasa de cumplimiento</span>
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

          <h1 className="text-3xl font-extrabold text-[#1A0E05]">
            Bienvenido de vuelta
          </h1>
          <p className="text-[#7A5C48] mt-2">
            Ingresa a tu cuenta para continuar
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[#7A5C48] text-sm font-semibold mb-1.5">
                Email
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white rounded-xl pl-12 pr-4 py-3.5 border border-[#E0D0C0] text-[#1A0E05] placeholder:text-[#B89880] focus:border-[#E85520] focus:ring-2 focus:ring-[#E85520]/20 outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#7A5C48] text-sm font-semibold mb-1.5">
                Contraseña
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
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white rounded-xl pl-12 pr-12 py-3.5 border border-[#E0D0C0] text-[#1A0E05] placeholder:text-[#B89880] focus:border-[#E85520] focus:ring-2 focus:ring-[#E85520]/20 outline-none transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B89880] hover:text-[#7A5C48] transition cursor-pointer"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.98 8.223A10.477 10.477 0 001.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <Link
                href="#"
                className="text-[#E85520] text-sm font-medium hover:underline"
              >
                Olvidé mi contraseña
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#E85520] text-white w-full py-4 rounded-xl font-bold text-base hover:bg-[#D04A1A] transition cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                  <span>Ingresando...</span>
                </>
              ) : (
                "Ingresar"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-[#E0D0C0]" />
            <span className="text-[#B89880] text-sm">o continúa con</span>
            <div className="flex-1 h-px bg-[#E0D0C0]" />
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-[#E0D0C0] rounded-xl py-3 bg-white hover:bg-[#FFF5EE] transition cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-[#1A0E05] text-sm font-medium">Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-[#E0D0C0] rounded-xl py-3 bg-white hover:bg-[#FFF5EE] transition cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1A0E05">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="text-[#1A0E05] text-sm font-medium">Apple</span>
            </button>
          </div>

          {/* Register link */}
          <p className="text-center text-[#7A5C48] text-sm mt-8">
            ¿No tienes cuenta?{" "}
            <Link
              href="/registro"
              className="text-[#E85520] font-bold hover:underline"
            >
              Crear cuenta gratis
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
