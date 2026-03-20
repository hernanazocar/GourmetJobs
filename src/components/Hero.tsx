"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Blob from "./ui/Blob";
import RevealWrapper from "./ui/RevealWrapper";
import { useSearch } from "@/lib/SearchContext";

const liveMessages = [
  { text: "247 profesionales disponibles ahora", icon: "👥" },
  { text: "Último match hace 3 minutos", icon: "⚡" },
  { text: "5 restaurantes buscando personal hoy", icon: "🍽️" },
  { text: "12 trabajadores conectados ahora mismo", icon: "🟢" },
];

export default function Hero() {
  const [liveIndex, setLiveIndex] = useState(0);
  const { setSearch } = useSearch();
  const [localRole, setLocalRole] = useState("");
  const [localWhen, setLocalWhen] = useState("");
  const [localWhere, setLocalWhere] = useState("");

  function handleSearch() {
    setSearch({ role: localRole, when: localWhen, where: localWhere });
    const marquee = document.getElementById("talento");
    if (marquee) marquee.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveIndex((prev) => (prev + 1) % liveMessages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sec-light flex flex-col items-center text-center relative overflow-hidden px-4 pt-12 pb-16">
      {/* Background Blobs */}
      <Blob className="absolute -top-32 -left-32 w-[500px] h-[500px] animate-float opacity-30" color="rgba(232,85,32,0.15)" />
      <Blob className="absolute top-1/3 -right-40 w-[450px] h-[450px] animate-float2 opacity-20" color="rgba(232,85,32,0.1)" />

      {/* Live badge — rotating messages */}
      <RevealWrapper delay={0}>
        <div
          className="inline-flex items-center gap-2.5 rounded-full pl-3.5 pr-5 py-2 text-sm font-semibold text-[#1A0E05] mb-6"
          style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.75)" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={liveIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2"
            >
              <span className="text-base">{liveMessages[liveIndex].icon}</span>
              {liveMessages[liveIndex].text}
            </motion.span>
          </AnimatePresence>
        </div>
      </RevealWrapper>

      {/* Headline */}
      <RevealWrapper delay={0.1}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#1A0E05] max-w-4xl mx-auto">
          Profesionales gastronómicos{" "}
          <span className="gradient-text-orange">disponibles ahora mismo</span>
        </h1>
      </RevealWrapper>

      {/* Subheadline */}
      <RevealWrapper delay={0.15}>
        <p className="text-[#7A5C48] text-lg md:text-xl max-w-[620px] mx-auto mt-6 leading-relaxed">
          Explora perfiles reales de garzones, chefs y baristas listos para trabajar hoy.
          Sin CVs, sin procesos largos.
        </p>
      </RevealWrapper>

      {/* Search bar */}
      <RevealWrapper delay={0.2}>
        <p className="text-[#1A0E05] text-lg font-bold mt-10 mb-3">¿Qué necesitas hoy?</p>
        <div
          className="w-full max-w-3xl mx-auto bg-white rounded-2xl p-2 flex flex-col sm:flex-row items-stretch gap-2 shadow-xl"
          style={{ border: "1px solid rgba(232,85,32,0.1)" }}
        >
          <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#FFF5EE]">
            <svg className="w-5 h-5 text-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <select value={localRole} onChange={(e) => setLocalRole(e.target.value)} className="bg-transparent text-[#1A0E05] text-sm font-medium w-full outline-none appearance-none cursor-pointer">
              <option value="">Cargo</option>
              <option value="Barman">Barman</option>
              <option value="Mesera">Mesero/a</option>
              <option value="Chef">Chef</option>
              <option value="Sous Chef">Sous Chef</option>
              <option value="Pastelera">Pastelero/a</option>
              <option value="Hostess">Hostess</option>
              <option value="Garzón">Garzón</option>
              <option value="Sommelier">Sommelier</option>
              <option value="Ayudante cocina">Ayudante cocina</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#FFF5EE]">
            <svg className="w-5 h-5 text-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <select value={localWhen} onChange={(e) => setLocalWhen(e.target.value)} className="bg-transparent text-[#1A0E05] text-sm font-medium w-full outline-none appearance-none cursor-pointer">
              <option value="">¿Cuándo?</option>
              <option value="now">Hoy</option>
              <option value="today">Mañana</option>
              <option value="week">Esta semana</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#FFF5EE]">
            <svg className="w-5 h-5 text-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <select value={localWhere} onChange={(e) => setLocalWhere(e.target.value)} className="bg-transparent text-[#1A0E05] text-sm font-medium w-full outline-none appearance-none cursor-pointer">
              <option value="">¿Dónde?</option>
              <option value="Providencia">Providencia</option>
              <option value="Las Condes">Las Condes</option>
              <option value="Vitacura">Vitacura</option>
              <option value="Santiago Centro">Santiago Centro</option>
              <option value="Ñuñoa">Ñuñoa</option>
              <option value="La Reina">La Reina</option>
              <option value="Maipú">Maipú</option>
            </select>
          </div>
          <button
            onClick={handleSearch}
            className="bg-orange text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-orange2 transition-all duration-300 flex items-center gap-2 justify-center shrink-0"
            style={{ boxShadow: "0 4px 20px rgba(232,85,32,0.3)" }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Ver disponibles
          </button>
        </div>
      </RevealWrapper>

      {/* Quick tags */}
      <RevealWrapper delay={0.25}>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
          <span className="text-[#9A7A60] text-xs font-semibold">Búsquedas rápidas:</span>
          {[
            { label: "Garzón", role: "Garzón" },
            { label: "Chef", role: "Chef" },
            { label: "Barman", role: "Barman" },
            { label: "Pastelero", role: "Pastelera" },
            { label: "Mesero/a", role: "Mesera" },
            { label: "Sommelier", role: "Sommelier" },
          ].map((tag) => (
            <button
              key={tag.label}
              onClick={() => {
                setLocalRole(tag.role);
                setSearch({ role: tag.role, when: "", where: "" });
                const marquee = document.getElementById("talento");
                if (marquee) marquee.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs text-orange font-bold bg-orange/10 px-3.5 py-1.5 rounded-full hover:bg-orange hover:text-white transition-all duration-200 cursor-pointer"
            >
              {tag.label}
            </button>
          ))}
        </div>
      </RevealWrapper>

      {/* CTAs */}
      <RevealWrapper delay={0.3}>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <a
            href="#"
            className="group bg-orange text-white px-8 py-4 rounded-2xl text-base font-bold hover:bg-orange2 transition-all duration-300 flex items-center gap-3 hover:scale-[1.02]"
            style={{ boxShadow: "0 8px 30px rgba(232,85,32,0.35)" }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Ver talento ahora
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#"
            className="group bg-[#1A0E05] text-white px-8 py-4 rounded-2xl text-base font-bold hover:bg-[#2A1A10] transition-all duration-300 flex items-center gap-3 hover:scale-[1.02]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M3.5 10.5h17" />
            </svg>
            Encontrar trabajo
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </RevealWrapper>

      {/* Micro urgency */}
      <RevealWrapper delay={0.35}>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e]"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
            </span>
            <span className="text-[#1A0E05] text-xs font-semibold">10 profesionales activos ahora en Santiago</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
            <span className="text-orange text-sm">🔥</span>
            <span className="text-[#1A0E05] text-xs font-semibold">5 restaurantes buscando personal hoy</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
            <span className="text-orange text-sm">⚡</span>
            <span className="text-[#1A0E05] text-xs font-semibold">Último match hace 3 min</span>
          </div>
        </div>
      </RevealWrapper>

      {/* Social proof */}
      <RevealWrapper delay={0.4}>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex -space-x-3">
            {[1, 11, 5, 12, 9].map((id) => (
              <div key={id} className="w-9 h-9 rounded-full border-2 border-[#FFE4CC] overflow-hidden">
                <Image src={`https://i.pravatar.cc/72?img=${id}`} alt="" width={36} height={36} className="object-cover" unoptimized />
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-3.5 h-3.5 text-orange fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
              <span className="text-[#7A5C48] text-xs ml-1">4.9/5</span>
            </div>
            <p className="text-[#9A7A60] text-xs">+3,200 profesionales · +450 restaurantes</p>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
