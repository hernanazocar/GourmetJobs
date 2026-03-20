"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Comparación", href: "#comparacion" },
    { label: "Features", href: "#features" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Precios", href: "#precios" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300"
    >
      <div
        className="transition-all duration-300 px-6 md:px-10 py-3 flex items-center justify-between"
        style={{
          background: scrolled
            ? "rgba(16, 10, 6, 0.95)"
            : "rgba(16, 10, 6, 0.7)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.4)"
            : "none",
        }}
      >
        {/* Logo + Desktop links (grouped left) */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="bg-orange rounded-xl w-9 h-9 flex items-center justify-center text-lg">
              🍽
            </div>
            <span className="font-bold text-white text-sm">GourmetJobs</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text2 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="#"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-[14px] transition-all duration-200 hover:bg-white/5"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            Ingresar
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-white bg-orange hover:bg-orange2 px-5 py-2.5 rounded-[14px] transition-all duration-200"
          >
            Empezar gratis →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] shrink-0"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[400px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div
          className="px-6 py-5 flex flex-col gap-3"
          style={{
            background: "rgba(16, 10, 6, 0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-text2 hover:text-white transition-colors duration-200 text-sm py-2"
            >
              {link.label}
            </a>
          ))}

          <hr className="border-white/10 my-1" />

          <a
            href="#"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-[14px] transition-all duration-200 text-center hover:bg-white/5"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            Ingresar
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-white bg-orange hover:bg-orange2 px-5 py-2.5 rounded-[14px] transition-all duration-200 text-center"
          >
            Empezar gratis →
          </a>
        </div>
      </div>
    </nav>
  );
}
