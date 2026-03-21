"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated login — redirect to empresa dashboard by default
    router.push("/dashboard/empresa");
  };

  const inputClass =
    "w-full bg-[#FFF5EE] rounded-xl px-4 py-3 border-0 text-[#1A0E05] placeholder:text-[#B89880] outline-none focus:ring-2 focus:ring-[#E85520]/30 transition";
  const labelClass = "block text-[#7A5C48] text-sm font-semibold mb-1";

  return (
    <div className="min-h-screen bg-[#FFF5EE] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
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
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1A0E05] text-center mb-2">
          Bienvenido de vuelta
        </h1>
        <p className="text-[#7A5C48] text-center mb-8">
          Ingresa a tu cuenta
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className={labelClass}>Contraseña</label>
            <input
              type="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#E85520] text-white w-full py-4 rounded-xl font-bold text-base hover:bg-[#D04A1A] transition cursor-pointer"
          >
            Ingresar
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-[#7A5C48] text-sm mt-8">
          ¿No tienes cuenta?{" "}
          <Link href="/registro" className="text-[#E85520] font-semibold hover:underline">
            Regístrate
          </Link>
        </p>

        {/* Demo links */}
        <div className="flex justify-center gap-6 mt-6">
          <Link
            href="/dashboard/empresa"
            className="text-[#E85520] text-sm font-semibold hover:underline"
          >
            Demo empresa →
          </Link>
          <Link
            href="/dashboard/trabajador"
            className="text-[#E85520] text-sm font-semibold hover:underline"
          >
            Demo trabajador →
          </Link>
        </div>
      </div>
    </div>
  );
}
