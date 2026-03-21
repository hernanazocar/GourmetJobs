"use client";

interface TopBarProps {
  title: string;
  subtitle: string;
  actionLabel?: string;
  onAction?: () => void;
}

function IconBell() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  );
}

export default function TopBar({ title, subtitle, actionLabel, onAction }: TopBarProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-[#1A0E05]">{title}</h1>
        <p className="text-[#7A5C48] text-sm mt-1">{subtitle}</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Notification bell */}
        <button className="relative w-10 h-10 rounded-xl bg-[#FFF0E6] text-[#E85520] flex items-center justify-center hover:bg-[#FFE4D4] transition">
          <IconBell />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#FFF0E6]" />
        </button>

        {/* Action button */}
        {actionLabel && onAction && (
          <button
            onClick={onAction}
            className="bg-[#E85520] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#D04A1A] transition shadow-sm shadow-[#E85520]/20"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
