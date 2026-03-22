"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ── Icon components ─────────────────────────────────────────────────────────

function IconHome() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

// IconDollar removed — platform doesn't handle payments

function IconMenu() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// ── Nav item definitions ────────────────────────────────────────────────────

interface NavItem {
  label: string;
  icon: React.ComponentType;
  href: string;
}

const empresaNavItems: NavItem[] = [
  { label: "Inicio", icon: IconHome, href: "/dashboard/empresa" },
  { label: "Ver talento", icon: IconSearch, href: "/dashboard/empresa/buscar" },
  { label: "Mis búsquedas", icon: IconCalendar, href: "/dashboard/empresa/turnos" },
  { label: "Talento frecuente", icon: IconUsers, href: "/dashboard/empresa/equipo" },
  { label: "Mensajes", icon: IconChat, href: "/dashboard/empresa/mensajes" },
  { label: "Métricas", icon: IconChart, href: "/dashboard/empresa/analytics" },
  { label: "Ajustes", icon: IconGear, href: "/dashboard/empresa/configuracion" },
];

const trabajadorNavItems: NavItem[] = [
  { label: "Inicio", icon: IconHome, href: "/dashboard/trabajador" },
  { label: "Invitaciones", icon: IconBriefcase, href: "/dashboard/trabajador" },
  { label: "Mis turnos", icon: IconCalendar, href: "/dashboard/trabajador/misturnos" },
  { label: "Mi perfil", icon: IconUser, href: "/dashboard/trabajador/perfil" },
  { label: "Mensajes", icon: IconChat, href: "/dashboard/trabajador/mensajes" },
  { label: "Ajustes", icon: IconGear, href: "/dashboard/trabajador/configuracion" },
];

// ── Props ───────────────────────────────────────────────────────────────────

interface SidebarProps {
  type: "empresa" | "trabajador";
  activeItem: string;
}

// ── Sidebar Component ───────────────────────────────────────────────────────

export default function Sidebar({ type, activeItem }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = type === "empresa" ? empresaNavItems : trabajadorNavItems;

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-6 pt-7 pb-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="GourmetJobs" height={40} width={120} className="h-10 w-auto" />
        </Link>
        <button
          className="ml-auto lg:hidden text-[#7A5C48]"
          onClick={() => setMobileOpen(false)}
        >
          <IconClose />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.label === activeItem;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                ${isActive
                  ? "bg-[#FFF0E6] text-[#E85520]"
                  : "text-[#7A5C48] hover:bg-[#F8F3EE]"
                }
              `}
            >
              <Icon />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-4 pb-6 pt-4 border-t border-[#F0E6DC] mx-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E85520]/10 flex items-center justify-center text-[#E85520] font-bold text-sm">
            {type === "empresa" ? "LM" : "DM"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#1A0E05] truncate">
              {type === "empresa" ? "La Misión" : "Diego M."}
            </p>
            <span className="inline-block mt-0.5 px-2 py-0.5 bg-[#E85520]/10 text-[#E85520] text-xs font-semibold rounded-full">
              {type === "empresa" ? "Plan Pro" : "Score 4.7"}
            </span>
          </div>
        </div>
        <button className="mt-3 text-[#9A7A60] text-xs hover:underline">
          Cerrar sesión
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-[#F0E6DC] h-screen fixed left-0 top-0">
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white border-r border-[#F0E6DC] z-50
          flex flex-col transition-transform duration-300 ease-in-out lg:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {sidebarContent}
      </aside>

      {/* Mobile header - exported as part of sidebar for convenience */}
      <MobileHeader onMenuClick={() => setMobileOpen(true)} />
    </>
  );
}

// ── Mobile Header Component ─────────────────────────────────────────────────

export function MobileHeader({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-[#F0E6DC] z-30 flex items-center justify-between px-4 py-3 lg:hidden">
      <button
        onClick={onMenuClick}
        className="p-2 rounded-xl text-[#7A5C48] hover:bg-[#F8F3EE] transition"
      >
        <IconMenu />
      </button>
      <Link href="/">
        <Image src="/logo.png" alt="GourmetJobs" height={32} width={96} className="h-8 w-auto" />
      </Link>
      <button className="relative p-2 rounded-xl text-[#7A5C48] hover:bg-[#F8F3EE] transition">
        <IconBell />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
      </button>
    </header>
  );
}
