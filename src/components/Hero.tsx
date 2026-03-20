"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Blob from "./ui/Blob";
import RevealWrapper from "./ui/RevealWrapper";
import { heroStats } from "@/lib/data";

const rotatingWords = [
  "cerca de ti",
  "de confianza",
  "en 2 minutos",
  "verificado",
  "sin esperas",
  "disponible ahora",
  "listo para trabajar",
  "a un click",
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
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4 pt-28 pb-20">
      {/* Background Blobs */}
      <Blob
        className="absolute -top-32 -left-32 w-[500px] h-[500px] animate-float opacity-30"
        color="var(--orange)"
      />
      <Blob
        className="absolute top-1/3 -right-40 w-[450px] h-[450px] animate-float2 opacity-20"
        color="var(--orange2)"
      />
      <Blob
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[550px] h-[550px] animate-float3 opacity-25"
        color="var(--orange3)"
      />

      {/* Pill badge */}
      <RevealWrapper delay={0}>
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-green mb-8"
          style={{ background: "rgba(52, 211, 153, 0.12)" }}
        >
          <span className="text-green animate-pulse">●</span>
          247 trabajadores disponibles ahora · Santiago
        </div>
      </RevealWrapper>

      {/* Title */}
      <RevealWrapper delay={0.1}>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[1] max-w-4xl mx-auto">
          <span className="text-white block">Talento gastronómico</span>
          <span className="block h-[1.1em] relative mt-2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="gradient-text italic absolute inset-x-0"
                style={{ fontFamily: "var(--font-accent)", fontWeight: 600 }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </RevealWrapper>

      {/* Subtitle */}
      <RevealWrapper delay={0.2}>
        <p className="text-text2 text-lg max-w-[520px] mx-auto mt-8">
          Conecta tu restaurante con trabajadores verificados disponibles ahora
          mismo. Sin CVs, sin esperas, sin compromisos.
        </p>
      </RevealWrapper>

      {/* CTA buttons */}
      <RevealWrapper delay={0.3}>
        <div className="flex flex-row items-center gap-4 mt-10">
          <a
            href="#"
            className="bg-orange text-white px-8 py-4 rounded-[16px] text-base font-semibold hover:bg-orange2 transition-all duration-200"
            style={{ boxShadow: "0 8px 32px rgba(232, 85, 32, 0.4)" }}
          >
            🏢 Soy empresa →
          </a>
          <a
            href="#"
            className="glass text-white px-8 py-4 rounded-[16px] text-base font-semibold transition-all duration-200"
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
              className="bg-card/60 rounded-2xl px-6 py-5 text-center"
              style={{ border: "1px solid rgba(255, 255, 255, 0.07)" }}
            >
              <div className="text-2xl md:text-3xl font-extrabold gradient-text">
                {stat.value}
              </div>
              <div className="text-text2 text-xs mt-1">{stat.label}</div>
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
