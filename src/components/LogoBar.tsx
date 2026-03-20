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
  "+450 restaurantes",
  "12 ciudades",
  "98% retención",
];

export default function LogoBar() {
  return (
    <section className="sec-dark py-16 px-4">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <RevealWrapper>
          <p className="text-text3 text-sm uppercase tracking-widest font-semibold mb-8">
            Confían en nosotros
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {brands.map((brand) => (
              <span
                key={brand.name}
                className="text-xl font-bold text-text3/50 hover:text-orange transition cursor-default select-none"
              >
                {brand.emoji} {brand.name}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center mt-8 gap-6">
            {stats.map((stat, i) => (
              <span key={stat} className="flex items-center gap-6">
                {i > 0 && <span className="text-text3">&middot;</span>}
                <span className="text-text2 text-sm">{stat}</span>
              </span>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
