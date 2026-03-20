"use client";

import RevealWrapper from "./ui/RevealWrapper";

const brands = [
  { emoji: "\uD83C\uDF77", name: "La Misión" },
  { emoji: "\uD83C\uDF63", name: "Osaka Nikkei" },
  { emoji: "\uD83C\uDF3F", name: "Borago" },
  { emoji: "\uD83C\uDF5D", name: "Liguria" },
  { emoji: "\uD83D\uDD25", name: "Peumayen" },
];

const stats = [
  { label: "+450 restaurantes", color: "bg-orange" },
  { label: "12 ciudades", color: "bg-green" },
  { label: "98% retención", color: "bg-orange2" },
];

export default function LogoBar() {
  return (
    <section className="sec-dark py-16 px-4 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <RevealWrapper>
          {/* Heading with horizontal lines */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
            <p className="text-text3 text-sm uppercase tracking-widest font-semibold">
              Confían en nosotros
            </p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Brand logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center gap-2 cursor-default select-none"
              >
                <div className="bg-card w-10 h-10 rounded-xl flex items-center justify-center border border-border">
                  <span className="text-lg">{brand.emoji}</span>
                </div>
                <span className="text-lg font-bold text-text3/60 hover:text-text2 transition">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

          {/* Stat pills */}
          <div className="flex items-center justify-center mt-10 gap-4 flex-wrap">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-full px-5 py-2 border border-border flex items-center gap-2"
              >
                <span className={`w-2 h-2 rounded-full ${stat.color}`} />
                <span className="text-text2 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
