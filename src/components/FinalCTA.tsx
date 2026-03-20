"use client";

import Blob from "./ui/Blob";
import RevealWrapper from "./ui/RevealWrapper";

export default function FinalCTA() {
  return (
    <section className="sec-light py-24 px-4">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="relative bg-white rounded-3xl shadow-2xl p-12 sm:p-16 text-center overflow-hidden">
          <Blob
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float opacity-10"
            size="500px"
          />

          <RevealWrapper>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2.5 bg-green/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
                <span className="text-green text-xs font-bold uppercase tracking-wider">
                  En vivo
                </span>
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold mt-6 text-[#1A0E05]">
                Tu próximo turno cubierto{" "}
                <span className="gradient-text-orange">en minutos</span>
              </h2>

              <p className="text-[#7A5C48] text-lg mt-5 max-w-lg mx-auto">
                Únete a más de 3,200 trabajadores y 450 restaurantes que ya
                usan GourmetJobs.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <button className="bg-orange text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-[0_8px_32px_rgba(232,85,32,0.3)] hover:bg-orange2 transition">
                  Empezar gratis →
                </button>
                <button className="bg-[#1A0E05] text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#2A1A10] transition">
                  Ver demo
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="flex -space-x-2">
                  {[1, 11, 5, 12, 9].map((id) => (
                    <div
                      key={id}
                      className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img
                        src={"https://i.pravatar.cc/64?img=" + id}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-[#7A5C48] text-sm font-semibold">
                  4.9/5
                </span>
                <span className="text-[#9A7A60] text-sm">
                  +3,200 profesionales
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-[#9A7A60]">
                <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
                247 trabajadores activos ahora
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
