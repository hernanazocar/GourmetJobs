"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

// ── Mock data ────────────────────────────────────────────────────────────────

interface Message {
  id: number;
  text: string;
  time: string;
  sent: boolean;
}

interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  messages: Message[];
}

const CONVERSATIONS: Conversation[] = [
  {
    id: 1,
    name: "Diego M.",
    avatar: "https://i.pravatar.cc/100?img=12",
    lastMessage: "Perfecto, confirmo asistencia para el viernes",
    time: "hace 5 min",
    unread: 2,
    messages: [
      { id: 1, text: "Hola Diego, tenemos un turno disponible este viernes de 19:00 a 01:00. Te interesa?", time: "10:30", sent: true },
      { id: 2, text: "Hola! Si, me interesa mucho. Es como garzon?", time: "10:45", sent: false },
      { id: 3, text: "Si, garzon para turno noche. El pago es $45.000 por turno.", time: "10:48", sent: true },
      { id: 4, text: "Excelente, me parece bien el monto.", time: "11:02", sent: false },
      { id: 5, text: "Perfecto, confirmo asistencia para el viernes", time: "11:05", sent: false },
    ],
  },
  {
    id: 2,
    name: "Valentina S.",
    avatar: "https://i.pravatar.cc/100?img=25",
    lastMessage: "Gracias por la oportunidad!",
    time: "hace 1 hora",
    unread: 0,
    messages: [
      { id: 1, text: "Valentina, tu turno del sabado fue calificado con 5 estrellas por el chef.", time: "09:00", sent: true },
      { id: 2, text: "Que buena noticia! Me encanta trabajar con ustedes.", time: "09:15", sent: false },
      { id: 3, text: "Nos alegra. Tenemos mas turnos la proxima semana, te avisamos.", time: "09:20", sent: true },
      { id: 4, text: "Gracias por la oportunidad!", time: "09:22", sent: false },
    ],
  },
  {
    id: 3,
    name: "Camila R.",
    avatar: "https://i.pravatar.cc/100?img=45",
    lastMessage: "Puedo llegar 15 min antes para preparar",
    time: "hace 3 horas",
    unread: 1,
    messages: [
      { id: 1, text: "Hola Camila, necesitamos una chef de partida para un evento el sabado.", time: "08:00", sent: true },
      { id: 2, text: "Hola! Cuantos comensales son?", time: "08:30", sent: false },
      { id: 3, text: "Aproximadamente 80 personas, menu de 3 tiempos.", time: "08:35", sent: true },
      { id: 4, text: "Me interesa! A que hora necesitan que este?", time: "08:50", sent: false },
      { id: 5, text: "A las 14:00 en el salon principal.", time: "08:55", sent: true },
      { id: 6, text: "Puedo llegar 15 min antes para preparar", time: "09:10", sent: false },
    ],
  },
  {
    id: 4,
    name: "Martin G.",
    avatar: "https://i.pravatar.cc/100?img=33",
    lastMessage: "Dale, nos vemos el lunes entonces",
    time: "ayer",
    unread: 0,
    messages: [
      { id: 1, text: "Martin, quedas confirmado para el turno del lunes.", time: "14:00", sent: true },
      { id: 2, text: "Dale, nos vemos el lunes entonces", time: "14:30", sent: false },
    ],
  },
  {
    id: 5,
    name: "Sofia R.",
    avatar: "https://i.pravatar.cc/100?img=47",
    lastMessage: "Me avisan cualquier cosa",
    time: "ayer",
    unread: 0,
    messages: [
      { id: 1, text: "Sofia, lamentablemente el evento del domingo fue cancelado.", time: "16:00", sent: true },
      { id: 2, text: "Entiendo, no hay problema.", time: "16:20", sent: false },
      { id: 3, text: "Me avisan cualquier cosa", time: "16:21", sent: false },
    ],
  },
];

function IconSend() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}

export default function MensajesPage() {
  const [selectedId, setSelectedId] = useState(1);
  const selected = CONVERSATIONS.find((c) => c.id === selectedId)!;

  return (
    <div className="flex h-screen bg-[#F8F6F3] overflow-hidden">
      <Sidebar type="empresa" activeItem="Mensajes" />

      <main className="flex-1 overflow-hidden ml-0 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 pb-0">
          <TopBar title="Mensajes" subtitle="Conversaciones con trabajadores" />
        </div>

        {/* Two-column chat layout */}
        <div className="flex mx-4 sm:mx-6 lg:mx-8 mb-6 bg-white rounded-2xl shadow-sm border border-[#F0E6DC]/50 overflow-hidden" style={{ height: "calc(100vh - 180px)" }}>
          {/* Left: Conversation list */}
          <div className="w-80 border-r border-[#F0E6DC] flex flex-col shrink-0">
            <div className="p-4 border-b border-[#F0E6DC]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar conversacion..."
                  className="w-full pl-9 pr-4 py-2.5 bg-[#F8F6F3] rounded-xl text-sm text-[#1A0E05] placeholder-[#B8A898] outline-none focus:ring-2 focus:ring-[#E85520]/20"
                />
                <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B8A898]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {CONVERSATIONS.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedId(conv.id)}
                  className={`w-full flex items-center gap-3 p-4 text-left transition-colors ${
                    selectedId === conv.id
                      ? "bg-[#FFF0E6]"
                      : "hover:bg-[#F8F6F3]"
                  }`}
                >
                  <div className="relative shrink-0">
                    <img
                      src={conv.avatar}
                      alt={conv.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    {conv.unread > 0 && (
                      <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#E85520] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#1A0E05]">{conv.name}</span>
                      <span className="text-[10px] text-[#B8A898] shrink-0">{conv.time}</span>
                    </div>
                    <p className="text-xs text-[#7A5C48] truncate mt-0.5">{conv.lastMessage}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Messages */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-[#F0E6DC]">
              <img
                src={selected.avatar}
                alt={selected.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-bold text-[#1A0E05]">{selected.name}</h3>
                <p className="text-xs text-emerald-600">En linea</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {selected.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.sent
                        ? "bg-[#E85520] text-white rounded-br-md"
                        : "bg-[#F0E6DC] text-[#1A0E05] rounded-bl-md"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p
                      className={`text-[10px] mt-1 ${
                        msg.sent ? "text-white/70" : "text-[#7A5C48]"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#F0E6DC]">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  className="flex-1 px-4 py-3 bg-[#F8F6F3] rounded-xl text-sm text-[#1A0E05] placeholder-[#B8A898] outline-none focus:ring-2 focus:ring-[#E85520]/20"
                />
                <button className="w-10 h-10 bg-[#E85520] text-white rounded-xl flex items-center justify-center hover:bg-[#D04A1A] transition-colors shrink-0">
                  <IconSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
