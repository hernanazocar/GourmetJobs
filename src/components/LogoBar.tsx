"use client";

import RevealWrapper from "./ui/RevealWrapper";

const brands = [
  { emoji: "🍷", name: "La Misión" },
  { emoji: "🍣", name: "Osaka Nikkei" },
  { emoji: "🌿", name: "Borago" },
  { emoji: "🍝", name: "Liguria" },
  { emoji: "🔥", name: "Peumayen" },
  { emoji: "🍕", name: "Il Pizzaiolo" },
  { emoji: "🥩", name: "Don Asado" },
  { emoji: "🍰", name: "Le Petit" },
];

export default function LogoBar() {
  const doubled = [...brands, ...brands];

  return (
    <section className="sec-light py-12 px-4">
      <div className="relative z-10">
        <RevealWrapper>
          <p className="text-[#9A7A60] text-xs uppercase tracking-widest font-semibold text-center mb-8">
            Confían en nosotros
          </p>
        </RevealWrapper>

        <div className="overflow-hidden">
          <div className="flex animate-marquee" style={{ animationDuration: "25s" }}>
            {doubled.map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-3 shrink-0 px-8"
              >
                <div className="bg-white w-11 h-11 rounded-xl flex items-center justify-center border border-[rgba(232,85,32,0.1)] text-xl">
                  {brand.emoji}
                </div>
                <span className="text-lg font-bold text-[#9A7A60]/50 whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
