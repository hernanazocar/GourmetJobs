"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import type { AvailabilityStatus } from "@/types";

interface AvailabilityToggleProps {
  userId: string;
  currentStatus: AvailabilityStatus;
  onUpdate?: (status: AvailabilityStatus) => void;
}

const statuses: { value: AvailabilityStatus; label: string; color: string; bg: string; icon: string }[] = [
  { value: "available_now", label: "Disponible ahora", color: "text-green-600", bg: "bg-green-500", icon: "🟢" },
  { value: "available_today", label: "Disponible hoy", color: "text-amber-600", bg: "bg-amber-500", icon: "🟡" },
  { value: "available_week", label: "Esta semana", color: "text-blue-600", bg: "bg-blue-500", icon: "🔵" },
  { value: "not_available", label: "No disponible", color: "text-gray-500", bg: "bg-gray-400", icon: "⚫" },
];

export default function AvailabilityToggle({ userId, currentStatus, onUpdate }: AvailabilityToggleProps) {
  const [status, setStatus] = useState<AvailabilityStatus>(currentStatus);
  const [open, setOpen] = useState(false);
  const [updating, setUpdating] = useState(false);

  const current = statuses.find(s => s.value === status) || statuses[3];

  const handleChange = async (newStatus: AvailabilityStatus) => {
    setUpdating(true);
    setStatus(newStatus);
    setOpen(false);

    await supabase
      .from("worker_profiles")
      .update({
        availability_status: newStatus,
        availability_updated_at: new Date().toISOString(),
      })
      .eq("user_id", userId);

    onUpdate?.(newStatus);
    setUpdating(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        disabled={updating}
        className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 shadow-sm border ${
          status === "available_now"
            ? "bg-green-50 border-green-200 text-green-700"
            : status === "available_today"
            ? "bg-amber-50 border-amber-200 text-amber-700"
            : status === "available_week"
            ? "bg-blue-50 border-blue-200 text-blue-700"
            : "bg-gray-50 border-gray-200 text-gray-600"
        }`}
      >
        {status !== "not_available" && (
          <span className="relative flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${current.bg} opacity-75`} />
            <span className={`relative inline-flex rounded-full h-3 w-3 ${current.bg}`} />
          </span>
        )}
        {status === "not_available" && <span className="w-3 h-3 rounded-full bg-gray-400" />}
        {current.label}
        <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-[#F0E6DC] py-2 min-w-[220px] z-50">
          {statuses.map((s) => (
            <button
              key={s.value}
              onClick={() => handleChange(s.value)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-[#FFF5EE] transition ${
                status === s.value ? "bg-[#FFF5EE]" : ""
              }`}
            >
              <span className="text-base">{s.icon}</span>
              <span className={s.color}>{s.label}</span>
              {status === s.value && (
                <svg className="w-4 h-4 ml-auto text-[#E85520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
