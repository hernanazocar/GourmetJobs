"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const quickActions = [
  "Ver mis invitaciones",
  "Mejorar mi perfil",
  "Activarme ahora",
  "\u00bfC\u00f3mo gano m\u00e1s?",
];

const INITIAL_GREETING =
  "\u00a1Hola Diego! Soy tu asistente personal. Puedo ayudarte a:\n\n\u2022 \u2705 Gestionar tus invitaciones\n\u2022 \ud83d\udcdd Mejorar tu perfil\n\u2022 \ud83d\udcc5 Organizar tu disponibilidad\n\u2022 \ud83d\udca1 Darte tips para recibir m\u00e1s ofertas\n\u2022 \ud83d\udcca Ver tu actividad\n\n\u00bfEn qu\u00e9 te ayudo?";

const responseMap: { keywords: string[]; response: string }[] = [
  {
    keywords: ["invitaciones", "oportunidades"],
    response:
      "Tienes 3 invitaciones pendientes:\n\n1. \ud83c\udf7d\ufe0f La Misi\u00f3n \u2014 Garz\u00f3n hoy 19:00 \u2014 $4.000-$5.000/hr\n   \u23f1\ufe0f Responde en 28 min\n\n2. \ud83c\udf63 Osaka \u2014 Barman hoy 20:00 \u2014 $4.000-$6.000/hr\n   \u23f1\ufe0f Responde en 18 min\n\n3. \ud83c\udf3f Borago \u2014 Garz\u00f3n ma\u00f1ana \u2014 $5.000-$7.000/hr\n   \u23f1\ufe0f Responde en 45 min\n\n\u00bfQuieres que acepte alguna?",
  },
  {
    keywords: ["perfil", "mejorar"],
    response:
      "Tu perfil est\u00e1 al 70%. Para mejorarlo:\n\n\u274c Falta foto profesional\n\u274c Bio muy corta (agrega especialidades)\n\u274c No has indicado tarifa referencial\n\u2705 Experiencia completa\n\u2705 Disponibilidad actualizada\n\nUn perfil completo recibe 3x m\u00e1s invitaciones. \u00bfQuieres que te ayude a completarlo?",
  },
  {
    keywords: ["activar", "disponible"],
    response:
      "\u00a1Te he activado! \ud83d\udfe2\n\nAhora est\u00e1s visible para restaurantes en tu zona.\n\n\ud83d\udccd Zona: Providencia y alrededores\n\u23f1\ufe0f Disponible: Ahora\n\nTip: Los trabajadores activos reciben invitaciones 5x m\u00e1s r\u00e1pido.",
  },
  {
    keywords: ["ganar m\u00e1s", "tips", "ofertas"],
    response:
      "Tips para recibir m\u00e1s invitaciones:\n\n1. \ud83d\udfe2 Mantente activo en horarios punta (18:00-22:00)\n2. \u26a1 Responde r\u00e1pido (tu promedio: 12 min \u2014 muy bien)\n3. \ud83d\udcf8 Agrega foto profesional (+40% invitaciones)\n4. \u2b50 Mant\u00e9n tu puntualidad arriba del 95%\n5. \ud83d\udcdd Completa tu bio con especialidades\n\nTu GourmetScore actual: 4.7 \u2014 \u00a1Excelente!",
  },
  {
    keywords: ["aceptar", "s\u00ed", "la misi\u00f3n", "osaka", "borago"],
    response:
      "\u2705 \u00a1Invitaci\u00f3n aceptada!\n\nHe confirmado tu turno. El restaurante recibir\u00e1 la notificaci\u00f3n.\n\n\ud83d\udccb Detalles:\n\u2022 Llegar 10 min antes\n\u2022 Dress code: formal\n\u2022 Contacto del restaurante disponible en Mensajes\n\n\u00bfNecesitas algo m\u00e1s?",
  },
  {
    keywords: ["score", "actividad", "estad\u00edsticas"],
    response:
      "\ud83d\udcca Tu actividad esta semana:\n\n\u2022 3 empresas vieron tu perfil\n\u2022 8 b\u00fasquedas te incluyeron\n\u2022 12 min tiempo de respuesta promedio\n\u2022 2 invitaciones recibidas\n\nGourmetScore: 4.7/5.0\n\u2022 Puntualidad: 98%\n\u2022 Aceptaci\u00f3n: 94%\n\n\u00a1Vas muy bien! \ud83d\udcaa",
  },
];

const DEFAULT_RESPONSE =
  "Puedo ayudarte con:\n\n\u2022 Ver y gestionar invitaciones\n\u2022 Activar/desactivar tu disponibilidad\n\u2022 Mejorar tu perfil\n\u2022 Tips para recibir m\u00e1s ofertas\n\n\u00bfQu\u00e9 necesitas?";

function getBotResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const entry of responseMap) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.response;
    }
  }
  return DEFAULT_RESPONSE;
}

export default function AIAgentTrabajador() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: INITIAL_GREETING },
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
    }, 800);
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 bg-[#E85520] rounded-full flex items-center justify-center shadow-xl hover:bg-[#D14A1A] transition-all duration-300 hover:scale-105"
        style={{ boxShadow: "0 8px 30px rgba(232,85,32,0.4)" }}
        aria-label="Abrir asistente IA"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
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
        <div
          className="fixed bottom-24 right-6 z-[90] w-[400px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          style={{ height: "550px", border: "1px solid rgba(0,0,0,0.08)" }}
        >
          {/* Header */}
          <div className="bg-[#E85520] px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold text-sm">Asistente GourmetJobs</h4>
              <p className="text-white/70 text-xs">IA para profesionales</p>
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
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-[#E85520] text-white rounded-2xl rounded-br-md"
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

          {/* Quick actions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 pt-1 bg-[#FFF8F2] flex flex-wrap gap-2">
              {quickActions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-xs font-semibold text-[#E85520] bg-[#E85520]/10 px-3 py-1.5 rounded-full hover:bg-[#E85520]/20 transition"
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
              className="flex-1 bg-[#F5F0EB] rounded-xl px-4 py-2.5 text-sm text-[#1A0E05] placeholder:text-[#B89880] outline-none focus:ring-2 focus:ring-[#E85520]/30"
            />
            <button
              type="submit"
              className="w-10 h-10 bg-[#E85520] rounded-xl flex items-center justify-center hover:bg-[#D14A1A] transition shrink-0"
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
