"use client";

import { useState } from "react";
import RevealWrapper from "./ui/RevealWrapper";


const faqs = [
  {
    question: "¿Cómo funciona el proceso de verificación?",
    answer:
      "Cada trabajador pasa por un proceso de verificación que incluye validación de identidad, referencias laborales, certificaciones y una entrevista inicial. Además, su GourmetScore se actualiza continuamente basado en feedback real de cada turno.",
  },
  {
    question: "¿Cuánto tiempo toma conseguir un trabajador?",
    answer:
      "En promedio, menos de 2 minutos. Una vez que publicas tu turno, nuestro algoritmo encuentra al trabajador verificado más cercano y disponible. Recibes la confirmación al instante.",
  },
  {
    question: "¿Qué pasa si un trabajador no se presenta?",
    answer:
      "Ofrecemos garantía de reemplazo inmediato sin costo adicional. Además, los no-shows afectan el GourmetScore del trabajador, lo que incentiva la puntualidad (98% de cumplimiento actual).",
  },
  {
    question: "¿Puedo contratar al mismo trabajador varias veces?",
    answer:
      "Sí, con la función 'Mi Equipo Flex' puedes guardar a tus trabajadores favoritos y re-contratarlos con un tap, sin re-negociar condiciones.",
  },
  {
    question: "¿Cómo se manejan los pagos?",
    answer:
      "Los pagos se procesan automáticamente al finalizar cada turno. Las empresas pagan vía transferencia o tarjeta, y los trabajadores reciben su pago el mismo día.",
  },
  {
    question: "¿En qué ciudades están disponibles?",
    answer:
      "Actualmente operamos en Santiago, Valparaíso, Viña del Mar, Concepción y La Serena. Estamos expandiéndonos a nuevas ciudades cada mes.",
  },
  {
    question: "¿Tiene costo para los trabajadores?",
    answer:
      "No. GourmetJobs es 100% gratuito para los trabajadores. Solo cobramos una comisión a las empresas por cada turno completado exitosamente.",
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer:
      "Sí. No hay contratos de permanencia ni penalizaciones por cancelación. Puedes usar GourmetJobs cuando lo necesites.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="sec-dark py-24 px-4">
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2.5 bg-orange/10 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
            <span className="text-orange text-xs font-bold uppercase tracking-wider">FAQ</span>
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-center">
          <span className="text-[#1A0E05]">Preguntas</span> <span className="gradient-text-orange">frecuentes</span>
        </h2>
        <p className="text-[#7A5C48] text-base mt-4 max-w-lg mx-auto text-center">Todo lo que necesitas saber antes de empezar.</p>
        <div className="w-16 h-1 bg-orange rounded-full mx-auto mt-6" />

        <RevealWrapper>
          <div className="bg-white/90 rounded-[28px] border border-light-border shadow-xl p-2 mt-14">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border-b border-light-border ${
                  i === faqs.length - 1 ? "border-b-0" : ""
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full py-5 flex items-center justify-between text-left px-5"
                >
                  <span className="text-[#1A0E05] text-base font-semibold pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`w-10 h-10 rounded-full bg-[#FFF0E6] flex items-center justify-center text-[#1A0E05] text-lg font-bold shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i
                      ? "max-h-[300px] opacity-100 pb-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#7A5C48] text-sm leading-relaxed px-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
