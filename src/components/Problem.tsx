"use client";

import { problems, solutions } from "@/lib/data";
import RevealWrapper from "./ui/RevealWrapper";

export default function Problem() {
  return (
    <section id="problema" className="sec-dark py-24 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <span className="label inline-block px-4 py-1.5 rounded-full text-xs bg-opal text-orange">
          EL DIAGNÓSTICO
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
          <span className="text-white">Los portales son lentos.</span>
          <br />
          <span className="gradient-text">La gastronomía no.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <RevealWrapper direction="left">
            <div className="bg-card rounded-[28px] p-8 border border-border">
              <h3 className="text-xl font-bold text-white mb-6">
                El método tradicional
              </h3>
              <ul className="space-y-5">
                {problems.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="bg-bg2 rounded-xl w-10 h-10 flex items-center justify-center text-lg shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-text2 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>

          <RevealWrapper direction="right">
            <div
              className="rounded-[28px] p-8"
              style={{
                background: "linear-gradient(135deg, #E85520, #C04010)",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                La forma GourmetJobs
              </h3>
              <ul className="space-y-5">
                {solutions.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div
                      className="rounded-xl w-10 h-10 flex items-center justify-center text-lg shrink-0"
                      style={{ background: "rgba(255,255,255,0.15)" }}
                    >
                      {item.icon}
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
