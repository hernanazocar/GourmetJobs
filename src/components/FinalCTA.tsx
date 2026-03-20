"use client";

import Blob from "./ui/Blob";
import RevealWrapper from "./ui/RevealWrapper";

export default function FinalCTA() {
  return (
    <section className="sec-dark py-24 px-4 md:px-8">
      <div className="relative z-10 max-w-6xl mx-auto rounded-[28px] border border-orange/20 bg-white/90 overflow-hidden py-20 px-6 text-center shadow-xl shadow-orange/10">
        <Blob className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float opacity-20" size="500px" />

        <RevealWrapper>
          <div className="relative z-10">
            <span className="label inline-block px-4 py-1.5 rounded-full text-xs bg-green/10 text-green">
              EN VIVO
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold mt-6 max-w-3xl mx-auto text-[#1A0E05]">
              Tu próximo turno cubierto{" "}
              <span className="gradient-text-orange">en minutos</span>
            </h2>

            <p className="text-[#7A5C48] text-lg mt-5 max-w-lg mx-auto">
              Únete a más de 3,200 trabajadores y 450 restaurantes que ya usan
              GourmetJobs.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button className="bg-orange text-white px-8 py-4 rounded-btn font-semibold shadow-[0_8px_32px_rgba(232,85,32,0.3)] hover:bg-orange2 transition">
                Empezar gratis →
              </button>
              <button className="bg-[#1A0E05] text-white px-8 py-4 rounded-btn font-semibold hover:bg-[#2A1A10] transition">
                Ver demo
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-8 text-sm text-[#7A5C48]">
              <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
              247 trabajadores activos ahora
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
