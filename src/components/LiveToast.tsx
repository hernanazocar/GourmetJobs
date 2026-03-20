"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const toasts = [
  { icon: "🟢", text: "Diego está disponible ahora", sub: "Chef · Las Condes", type: "available" as const },
  { icon: "🍽️", text: "Restaurant La Misión busca garzón", sub: "Turno hoy 19:00 · Providencia", type: "restaurant" as const },
  { icon: "🟢", text: "Valentina acaba de conectarse", sub: "Mesera · Vitacura", type: "available" as const },
  { icon: "🔥", text: "Osaka Nikkei busca barman urgente", sub: "Turno hoy 20:00 · Las Condes", type: "restaurant" as const },
  { icon: "🟢", text: "Matías está disponible ahora", sub: "Sous Chef · Ñuñoa", type: "available" as const },
  { icon: "🍽️", text: "Borago necesita pastelera", sub: "Turno mañana 08:00 · Vitacura", type: "restaurant" as const },
];

export default function LiveToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Initial delay of 5 seconds before showing the first toast
    const initialTimeout = setTimeout(() => {
      setVisible(true);

      const interval = setInterval(() => {
        setVisible(true);

        // After 5 seconds, hide the toast
        setTimeout(() => {
          setVisible(false);

          // After 1 more second, move to the next toast
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % toasts.length);
          }, 1000);
        }, 5000);
      }, 13000);

      // Also hide the first toast after 5 seconds
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % toasts.length);
        }, 1000);
      }, 5000);

      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const toast = toasts[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-[80]">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={currentIndex}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-3 max-w-sm border border-[rgba(0,0,0,0.06)]"
          >
            <span className="text-xl shrink-0">{toast.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[#1A0E05] text-sm font-semibold">{toast.text}</p>
              <p className="text-[#7A5C48] text-xs">{toast.sub}</p>
            </div>
            {toast.type === "available" && (
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22c55e]"></span>
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
