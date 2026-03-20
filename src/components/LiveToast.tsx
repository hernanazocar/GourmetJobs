"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const toasts = [
  { name: "María Rojas", role: "Garzón", location: "Providencia", time: "hace 2 min" },
  { name: "Diego Fuentes", role: "Chef", location: "Las Condes", time: "hace 5 min" },
  { name: "Valentina Soto", role: "Mesera", location: "Vitacura", time: "hace 8 min" },
  { name: "Matías Lagos", role: "Barman", location: "Ñuñoa", time: "hace 12 min" },
  { name: "Isidora Parra", role: "Pastelera", location: "Santiago Centro", time: "hace 15 min" },
  { name: "Catalina Bravo", role: "Sommelier", location: "Las Condes", time: "hace 18 min" },
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
  const initial = toast.name.charAt(0);

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
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center text-orange font-bold text-sm shrink-0">
              {initial}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-[#1A0E05] text-sm font-semibold">
                {toast.name} fue contratado/a
              </p>
              <p className="text-[#7A5C48] text-xs">
                como {toast.role} en {toast.location} · {toast.time}
              </p>
            </div>

            {/* Checkmark */}
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <span className="text-green-600 text-xs font-bold">✓</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
