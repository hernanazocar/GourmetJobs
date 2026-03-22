"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

// ── Data ────────────────────────────────────────────────────────────────────

interface Message {
  id: number;
  from: "worker" | "restaurant";
  text: string;
  time: string;
}

interface Conversation {
  id: number;
  restaurant: string;
  initials: string;
  lastMessage: string;
  time: string;
  unread: number;
  messages: Message[];
}

const conversations: Conversation[] = [
  {
    id: 1,
    restaurant: "La Mision",
    initials: "LM",
    lastMessage: "Perfecto, te esperamos el sabado!",
    time: "10:32",
    unread: 1,
    messages: [
      { id: 1, from: "restaurant", text: "Hola Diego! Tenemos un turno disponible este sabado de 19:00 a 01:00 como garzon. Te interesa?", time: "09:15" },
      { id: 2, from: "worker", text: "Hola! Si, me interesa mucho. Cual es la tarifa?", time: "09:20" },
      { id: 3, from: "restaurant", text: "La tarifa es de $4.500/hr. Incluye propinas compartidas del equipo.", time: "09:25" },
      { id: 4, from: "worker", text: "Excelente, acepto el turno. Estare ahi a las 18:45 para prepararme.", time: "10:00" },
      { id: 5, from: "restaurant", text: "Perfecto, te esperamos el sabado!", time: "10:32" },
    ],
  },
  {
    id: 2,
    restaurant: "Osaka",
    initials: "OK",
    lastMessage: "El evento es formal, lleva camisa negra.",
    time: "Ayer",
    unread: 0,
    messages: [
      { id: 1, from: "restaurant", text: "Hola Diego, necesitamos un barman para un evento privado el domingo. 20:00 a 02:00, $5.000/hr.", time: "Lun 14:00" },
      { id: 2, from: "worker", text: "Me interesa! Que tipo de evento es?", time: "Lun 14:30" },
      { id: 3, from: "restaurant", text: "Es una cena corporativa para 40 personas. Necesitamos alguien con experiencia en cocteleria.", time: "Lun 15:00" },
      { id: 4, from: "worker", text: "Perfecto, tengo experiencia con ese tipo de eventos. Confirmo asistencia.", time: "Lun 15:15" },
      { id: 5, from: "restaurant", text: "El evento es formal, lleva camisa negra.", time: "Ayer" },
    ],
  },
  {
    id: 3,
    restaurant: "Borago",
    initials: "BO",
    lastMessage: "Gracias por tu excelente trabajo la semana pasada!",
    time: "Mar",
    unread: 0,
    messages: [
      { id: 1, from: "restaurant", text: "Hola Diego, queriamos agradecerte por el turno del viernes. Recibimos muy buenos comentarios de los clientes.", time: "Lun 10:00" },
      { id: 2, from: "worker", text: "Muchas gracias! Fue un placer trabajar con el equipo de Borago.", time: "Lun 11:00" },
      { id: 3, from: "restaurant", text: "Gracias por tu excelente trabajo la semana pasada!", time: "Mar" },
    ],
  },
  {
    id: 4,
    restaurant: "Liguria",
    initials: "LI",
    lastMessage: "Tenemos turnos disponibles para el fin de semana.",
    time: "Lun",
    unread: 2,
    messages: [
      { id: 1, from: "restaurant", text: "Hola Diego! Como estas? Tenemos turnos disponibles para el fin de semana. Sabado y domingo almuerzo.", time: "Lun 09:00" },
      { id: 2, from: "restaurant", text: "Tenemos turnos disponibles para el fin de semana.", time: "Lun 09:01" },
    ],
  },
];

// ── Main Page ───────────────────────────────────────────────────────────────

export default function MensajesPage() {
  const [activeConversation, setActiveConversation] = useState<number>(conversations[0].id);
  const [inputValue, setInputValue] = useState("");
  const [showMobileChat, setShowMobileChat] = useState(false);

  const currentConversation = conversations.find((c) => c.id === activeConversation)!;

  const handleSend = () => {
    if (inputValue.trim()) {
      setInputValue("");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8F6F3]">
      <Sidebar type="trabajador" activeItem="Mensajes" />

      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 pt-20 lg:pt-8">
          <TopBar title="Mensajes" subtitle="Conversaciones con restaurantes" />

          {/* Chat container */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex" style={{ height: "calc(100vh - 200px)" }}>
            {/* Left: conversation list */}
            <div className={`w-full sm:w-80 border-r border-gray-100 flex flex-col shrink-0 ${showMobileChat ? "hidden sm:flex" : "flex"}`}>
              <div className="p-4 border-b border-gray-100">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A5C48]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Buscar conversacion..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F8F6F3] text-sm text-[#1A0E05] placeholder:text-[#7A5C48]/50 focus:outline-none focus:ring-2 focus:ring-[#E85520]/20"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => {
                      setActiveConversation(conv.id);
                      setShowMobileChat(true);
                    }}
                    className={`w-full px-4 py-3.5 flex items-center gap-3 text-left transition hover:bg-[#F8F6F3] ${
                      activeConversation === conv.id ? "bg-[#FFF0E6]" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#E85520]/10 flex items-center justify-center text-[#E85520] font-bold text-xs shrink-0">
                      {conv.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-semibold text-sm text-[#1A0E05]">{conv.restaurant}</span>
                        <span className="text-[10px] text-[#7A5C48]">{conv.time}</span>
                      </div>
                      <p className="text-xs text-[#7A5C48] truncate">{conv.lastMessage}</p>
                    </div>
                    {conv.unread > 0 && (
                      <span className="w-5 h-5 rounded-full bg-[#E85520] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                        {conv.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: chat view */}
            <div className={`flex-1 flex flex-col ${showMobileChat ? "flex" : "hidden sm:flex"}`}>
              {/* Chat header */}
              <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
                <button
                  onClick={() => setShowMobileChat(false)}
                  className="sm:hidden w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-[#7A5C48]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <div className="w-9 h-9 rounded-full bg-[#E85520]/10 flex items-center justify-center text-[#E85520] font-bold text-xs">
                  {currentConversation.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A0E05] text-sm">{currentConversation.restaurant}</h3>
                  <p className="text-xs text-green-500">En linea</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {currentConversation.messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.from === "worker" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                        msg.from === "worker"
                          ? "bg-[#E85520] text-white rounded-br-md"
                          : "bg-[#F8F6F3] text-[#1A0E05] rounded-bl-md"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className={`text-[10px] mt-1 ${msg.from === "worker" ? "text-white/60" : "text-[#7A5C48]/60"}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="px-5 py-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Escribe un mensaje..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#F8F6F3] text-sm text-[#1A0E05] placeholder:text-[#7A5C48]/50 focus:outline-none focus:ring-2 focus:ring-[#E85520]/20"
                  />
                  <button
                    onClick={handleSend}
                    className="w-10 h-10 rounded-xl bg-[#E85520] text-white flex items-center justify-center hover:bg-[#D04A1A] transition shrink-0"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
