"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Message {
  role: "bot" | "user";
  text: string;
}

const quickReplies = [
  "¿Cómo funciona?",
  "¿Cuánto cuesta?",
  "Soy empresa",
  "Soy trabajador",
];

const botResponses: Record<string, string> = {
  "¿cómo funciona?":
    "¡Es muy simple! 🚀\n\n1️⃣ Publicas tu turno (30 seg)\n2️⃣ Nuestro algoritmo encuentra al profesional verificado más cercano\n3️⃣ Confirmas y listo — llega en minutos\n\n¿Te gustaría publicar tu primer turno gratis?",
  "¿cuánto cuesta?":
    "Tenemos 3 planes:\n\n🆓 **Free** — 3 turnos/mes, $0\n⭐ **Pro** — Turnos ilimitados, $49.990/mes\n💎 **Premium** — Multi-sucursal, $99.990/mes\n\nSolo pagas por turnos completados. Sin contratos. ¿Quieres empezar gratis?",
  "soy empresa":
    "¡Perfecto! Como empresa puedes:\n\n✅ Publicar turnos en 30 segundos\n✅ Recibir candidatos verificados en 2 min\n✅ Pagar solo por turnos completados\n✅ Acceder a analytics completos\n\nMás de 450 restaurantes ya confían en nosotros. ¿Quieres crear tu cuenta gratis?",
  "soy trabajador":
    "¡Bienvenido! Como profesional gastronómico puedes:\n\n🍽️ Elegir tus propios turnos\n💰 Cobrar el mismo día\n⭐ Construir tu reputación\n📱 Gestionar todo desde tu celular\n\nÚnete a +3,200 profesionales activos. ¿Quieres registrarte?",
  default:
    "¡Gracias por tu mensaje! 😊\n\nPuedo ayudarte con:\n• Cómo funciona GourmetJobs\n• Precios y planes\n• Info para empresas\n• Info para trabajadores\n\n¿Sobre qué te gustaría saber más?",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const [key, value] of Object.entries(botResponses)) {
    if (key === "default") continue;
    if (lower.includes(key.replace("¿", "").replace("?", "").toLowerCase())) {
      return value;
    }
  }
  if (lower.includes("gratis") || lower.includes("empezar") || lower.includes("registr")) {
    return "¡Genial! 🎉 Puedes crear tu cuenta gratis ahora mismo.\n\nHaz click en 'Empezar gratis' en el menú superior y en menos de 1 minuto estarás publicando tu primer turno.\n\n¿Necesitas ayuda con algo más?";
  }
  if (lower.includes("hola") || lower.includes("hey") || lower.includes("buenas")) {
    return "¡Hola! 👋 Soy el asistente de GourmetJobs.\n\nEstoy aquí para ayudarte a encontrar talento gastronómico en minutos. ¿En qué puedo ayudarte?";
  }
  return botResponses.default;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "¡Hola! 👋 Soy el asistente de GourmetJobs.\n\n¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function sendMessage(text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: text.trim() }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 bg-orange rounded-full flex items-center justify-center shadow-xl hover:bg-orange2 transition-all duration-300 hover:scale-105"
        style={{ boxShadow: "0 8px 30px rgba(232,85,32,0.4)" }}
        aria-label="Abrir chat"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Notification dot */}
      {!open && (
        <span className="fixed bottom-[68px] right-6 z-[91] flex h-4 w-4 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
        </span>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[90] w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          style={{ height: "520px", border: "1px solid rgba(0,0,0,0.08)" }}
        >
          {/* Header */}
          <div className="bg-orange px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Image src="/logo-white.png" alt="GJ" width={28} height={28} className="h-5 w-auto" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold text-sm">GourmetJobs</h4>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-white/70 text-xs">En línea ahora</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FFF8F2]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-orange text-white rounded-2xl rounded-br-md"
                      : "bg-white text-[#1A0E05] rounded-2xl rounded-bl-md shadow-sm border border-[rgba(0,0,0,0.05)]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-[rgba(0,0,0,0.05)]">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-[#ccc] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-[#ccc] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-[#ccc] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 pt-1 bg-[#FFF8F2] flex flex-wrap gap-2">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-xs font-semibold text-orange bg-orange/10 px-3 py-1.5 rounded-full hover:bg-orange/20 transition"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="px-4 py-3 bg-white border-t border-[rgba(0,0,0,0.06)] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-[#F5F0EB] rounded-xl px-4 py-2.5 text-sm text-[#1A0E05] placeholder:text-[#B89880] outline-none focus:ring-2 focus:ring-orange/30"
            />
            <button
              type="submit"
              className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center hover:bg-orange2 transition shrink-0"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
