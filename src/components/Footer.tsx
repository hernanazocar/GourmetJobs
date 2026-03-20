import Image from "next/image";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="sec-light border-t border-border pt-16 pb-8 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="GourmetJobs"
                width={160}
                height={36}
                className="h-8 w-auto"
              />
            </div>

            <p className="text-text2 text-sm max-w-xs">
              Plataforma de contratación gastronómica en tiempo real.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 bg-[rgba(52,211,153,0.12)] text-green text-xs font-semibold px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
              247 activos
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-text2 text-sm hover:text-white transition cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-text3 text-xs">
            © 2024 GourmetJobs. Todos los derechos reservados.
          </span>
          <span className="bg-card text-text3 text-xs px-3 py-1 rounded-full">
            v1.0.0 — Beta
          </span>
        </div>
      </div>
    </footer>
  );
}
