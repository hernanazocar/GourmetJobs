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
  "listo en 2 minutos",
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
        <div className="flex flex-row items-center gap-4 mt-10">
          <a
            href="#"
            className="bg-orange text-white px-10 py-5 rounded-[16px] text-lg font-bold hover:bg-orange2 transition-all duration-200"
            style={{ boxShadow: "0 12px 40px rgba(232, 85, 32, 0.4)" }}
          >
            🏢 Soy empresa →
          </a>
          <a
            href="#"
            className="bg-[#1A0E05] text-white px-10 py-5 rounded-[16px] text-lg font-bold hover:bg-[#2A1A10] transition-all duration-200"
          >
            🧑‍🍳 Soy trabajador
          </a>
        </div>
      </RevealWrapper>

      {/* Stats */}
      <RevealWrapper delay={0.4}>
        <div className="grid grid-cols-2 md:flex md:flex-row gap-4 mt-16 max-w-3xl mx-auto">
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-2xl px-7 py-6 text-center border border-light-border shadow-lg shadow-orange/10"
            >
              <div className="text-3xl md:text-4xl font-extrabold gradient-text-orange">
                {stat.value}
              </div>
              <div className="text-[#7A5C48] text-xs mt-1.5 font-medium">{stat.label}</div>
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
