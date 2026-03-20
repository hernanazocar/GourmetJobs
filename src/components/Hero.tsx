"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Blob from "./ui/Blob";
import RevealWrapper from "./ui/RevealWrapper";
import { heroStats } from "@/lib/data";

const rotatingWords = [
  "en tiempo real",
  "cerca de ti, ahora",
  "100% de confianza",
  "listo en minutos",
  "verificado y seguro",
  "sin esperas, sin CVs",
  "disponible ahora ya",
  "a solo un click de ti",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sec-light min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4 py-20">
      {/* Background Blobs */}
      <Blob
        className="absolute -top-32 -left-32 w-[500px] h-[500px] animate-float opacity-30"
        color="rgba(232,85,32,0.15)"
      />
      <Blob
        className="absolute top-1/3 -right-40 w-[450px] h-[450px] animate-float2 opacity-20"
        color="rgba(232,85,32,0.1)"
      />
      <Blob
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[550px] h-[550px] animate-float3 opacity-15"
        color="rgba(232,85,32,0.12)"
      />

      {/* Pill badge */}
      <RevealWrapper delay={0}>
        <div
          className="inline-flex items-center gap-2.5 rounded-full pl-3.5 pr-5 py-2 text-sm font-semibold text-[#1A0E05] mb-8"
          style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.75)" }}
        >
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e]"></span>
            <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}></span>
          </span>
          247 profesionales verificados en línea
        </div>
      </RevealWrapper>

      {/* Title */}
      <RevealWrapper delay={0.1}>
        <h1 className="max-w-4xl mx-auto text-center">
          <span className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[1] text-[#1A0E05] block">Talento gastronómico</span>
          <span className="block h-[1.15em] relative mt-2 overflow-visible text-5xl md:text-7xl tracking-[-0.04em] leading-[1]">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 font-extrabold"
                style={{ color: "#E85520" }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </RevealWrapper>

      {/* Subtitle */}
      <RevealWrapper delay={0.2}>
        <p className="text-[#7A5C48] text-xl max-w-[560px] mx-auto mt-8 leading-relaxed">
          Conecta tu restaurante con trabajadores verificados disponibles ahora
          mismo. Sin CVs, sin esperas, sin compromisos.
        </p>
      </RevealWrapper>

      {/* CTA buttons */}
      <RevealWrapper delay={0.3}>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <a
            href="#"
            className="group bg-orange text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-orange2 transition-all duration-300 flex items-center gap-3 hover:scale-[1.02]"
            style={{ boxShadow: "0 12px 40px rgba(232, 85, 32, 0.35)" }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Soy empresa
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#"
            className="group bg-[#1A0E05] text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#2A1A10] transition-all duration-300 flex items-center gap-3 hover:scale-[1.02]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Soy trabajador
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </RevealWrapper>

      {/* Stats */}
      <RevealWrapper delay={0.4}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16 max-w-4xl mx-auto">
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl px-6 py-8 text-center border border-orange/10 shadow-xl shadow-orange/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-orange tracking-tight">
                {stat.value}
              </div>
              <div className="w-8 h-0.5 bg-orange/20 mx-auto mt-3 mb-2 rounded-full" />
              <div className="text-[#7A5C48] text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </RevealWrapper>

      <RevealWrapper delay={0.5}>
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="flex -space-x-3">
            {[1, 11, 5, 12, 9].map((id) => (
              <div key={id} className="w-9 h-9 rounded-full border-2 border-bg overflow-hidden">
                <Image src={`https://i.pravatar.cc/72?img=${id}`} alt="" width={36} height={36} className="object-cover" unoptimized />
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-3.5 h-3.5 text-orange fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
              <span className="text-text2 text-xs ml-1">4.9/5</span>
            </div>
            <p className="text-text3 text-xs">de +3,200 trabajadores</p>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
