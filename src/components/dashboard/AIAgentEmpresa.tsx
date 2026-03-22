"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const quickActions = [
  "Necesito un garz\u00f3n hoy",
  "\u00bfQui\u00e9n est\u00e1 disponible?",
  "Ver mis b\u00fasquedas",
  "Contactar equipo frecuente",
];

const INITIAL_GREETING =
  "\u00a1Hola! Soy tu asistente de contrataci\u00f3n. Puedo ayudarte a:\n\n\u2022 \ud83d\udd0d Buscar talento disponible ahora\n\u2022 \u26a1 Crear una b\u00fasqueda urgente\n\u2022 \ud83d\udcca Ver m\u00e9tricas de contrataci\u00f3n\n\u2022 \ud83d\udcac Contactar trabajadores\n\u2022 \ud83d\udd04 Re-invitar a tu equipo frecuente\n\n\u00bfQu\u00e9 necesitas?";

const responseMap: { keywords: string[]; response: string }[] = [
  {
    keywords: ["garz\u00f3n", "chef", "barman", "necesito"],
    response:
      "He encontrado 5 profesionales disponibles para hoy:\n\n1. Diego M. \u2014 Garz\u00f3n \u2b50 4.7 \u2014 Disponible ahora\n2. Valentina S. \u2014 Garz\u00f3n \u2b50 4.8 \u2014 Disponible hoy\n3. Sebasti\u00e1n V. \u2014 Garz\u00f3n \u2b50 4.3 \u2014 Disponible ahora\n\n\u00bfQuieres que env\u00ede invitaciones autom\u00e1ticas a los 3?",
  },
  {
    keywords: ["disponible", "qui\u00e9n", "activo"],
    response:
      "Ahora mismo hay 12 profesionales activos en tu zona:\n\n\ud83d\udfe2 5 Garzones\n\ud83d\udfe2 3 Chefs\n\ud83d\udfe2 2 Baristas\n\ud83d\udfe2 2 Administrativos\n\n\u00bfQuieres ver el listado completo o filtrar por rol?",
  },
  {
    keywords: ["b\u00fasqueda", "mis b\u00fasquedas"],
    response:
      "Tienes 3 b\u00fasquedas activas:\n\n1. Garz\u00f3n hoy 19:00 \u2014 3 matches \u2705\n2. Chef ma\u00f1ana \u2014 Buscando...\n3. Barman viernes \u2014 1 match\n\n\u00bfQuieres ver los matches o crear una nueva b\u00fasqueda?",
  },
  {
    keywords: ["equipo", "frecuente", "re-invitar"],
    response:
      "Tu equipo frecuente:\n\n\ud83d\udc68\u200d\ud83c\udf73 Mart\u00edn G. \u2014 Chef (12 turnos)\n\ud83c\udf77 Sof\u00eda R. \u2014 Sommelier (8 turnos)\n\ud83c\udf78 Lucas H. \u2014 Barman (6 turnos)\n\n\u00bfQuieres re-invitar a alguno? Puedo enviar la invitaci\u00f3n ahora.",
  },
  {
    keywords: ["urgente", "r\u00e1pido", "ya"],
    response:
      "Modo urgente activado \ud83d\udd25\n\nVoy a:\n1. Buscar todos los profesionales disponibles AHORA\n2. Enviar notificaci\u00f3n masiva\n3. Priorizar por cercan\u00eda y velocidad de respuesta\n\n\u00bfQu\u00e9 rol necesitas y para qu\u00e9 horario?",
  },
  {
    keywords: ["s\u00ed", "env\u00eda", "invita"],
    response:
      "\u00a1Listo! He enviado invitaciones a los 3 profesionales. Te notificar\u00e9 cuando respondan.\n\n\u23f1\ufe0f Tiempo estimado de respuesta: 5-15 minutos",
  },
  {
    keywords: ["m\u00e9tricas", "datos", "analytics"],
    response:
      "\ud83d\udcca Resumen este mes:\n\n\u2022 21 turnos completados\n\u2022 87% tasa de \u00e9xito\n\u2022 15 min tiempo promedio de match\n\u2022 89% tasa de respuesta\n\n\u00bfQuieres ver m\u00e1s detalle?",
  },
];

const DEFAULT_RESPONSE =
  "Puedo ayudarte con:\n\n\u2022 Buscar talento por rol y zona\n\u2022 Crear b\u00fasquedas urgentes\n\u2022 Re-invitar a tu equipo\n\u2022 Ver m\u00e9tricas\n\n\u00bfQu\u00e9 necesitas?";

function getBotResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const entry of responseMap) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.response;
    }
  }
  return DEFAULT_RESPONSE;
}

export default function AIAgentEmpresa() {
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
              <p className="text-white/70 text-xs">IA para empresas</p>
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
