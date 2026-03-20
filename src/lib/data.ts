export const heroStats = [
  { value: "2 min", label: "Tiempo promedio de match" },
  { value: "94%", label: "Tasa de aceptación" },
  { value: "3.2K", label: "Trabajadores activos" },
  { value: "0 CVs", label: "Cero papeleo" },
];

export const avatarColors = [
  "#E85520", "#FF7040", "#34D399", "#3B82F6", "#A855F7",
  "#F59E0B", "#EC4899", "#14B8A6", "#8B5CF6", "#F97316",
];

export const marqueeWorkers = [
  { name: "Camila Rojas", role: "Chef de partida", zone: "Providencia", availability: "now" as const, img: "https://i.pravatar.cc/150?img=1", rating: 4.9, turnos: 142, puntualidad: 99, skills: ["Cocina francesa", "Repostería"] },
  { name: "Diego Morales", role: "Barman", zone: "Las Condes", availability: "today" as const, img: "https://i.pravatar.cc/150?img=11", rating: 4.7, turnos: 89, puntualidad: 95, skills: ["Coctelería clásica", "Mixología"] },
  { name: "Valentina Soto", role: "Mesera", zone: "Vitacura", availability: "now" as const, img: "https://i.pravatar.cc/150?img=5", rating: 4.8, turnos: 210, puntualidad: 98, skills: ["Atención VIP", "Bilingüe"] },
  { name: "Matías Fuentes", role: "Sous Chef", zone: "Ñuñoa", availability: "now" as const, img: "https://i.pravatar.cc/150?img=12", rating: 5.0, turnos: 178, puntualidad: 100, skills: ["Cocina asiática", "Gestión equipo"] },
  { name: "Isidora Parra", role: "Pastelera", zone: "Santiago Centro", availability: "today" as const, img: "https://i.pravatar.cc/150?img=9", rating: 4.9, turnos: 115, puntualidad: 97, skills: ["Pastelería fina", "Chocolatería"] },
  { name: "Sebastián Vera", role: "Garzón", zone: "La Reina", availability: "now" as const, img: "https://i.pravatar.cc/150?img=13", rating: 4.6, turnos: 67, puntualidad: 93, skills: ["Fine dining", "Vinos"] },
  { name: "Antonia Muñoz", role: "Hostess", zone: "Providencia", availability: "now" as const, img: "https://i.pravatar.cc/150?img=23", rating: 4.8, turnos: 134, puntualidad: 99, skills: ["Reservas", "Atención cliente"] },
  { name: "Felipe Lagos", role: "Cocinero línea", zone: "Las Condes", availability: "today" as const, img: "https://i.pravatar.cc/150?img=14", rating: 4.5, turnos: 56, puntualidad: 91, skills: ["Parrilla", "Cocina rápida"] },
  { name: "Catalina Bravo", role: "Sommelier", zone: "Vitacura", availability: "now" as const, img: "https://i.pravatar.cc/150?img=25", rating: 5.0, turnos: 198, puntualidad: 100, skills: ["Cata de vinos", "Maridaje"] },
  { name: "Tomás Herrera", role: "Ayudante cocina", zone: "Maipú", availability: "now" as const, img: "https://i.pravatar.cc/150?img=15", rating: 4.4, turnos: 43, puntualidad: 90, skills: ["Prep", "Limpieza"] },
];

export const problems = [
  { icon: "⏳", title: "Proceso lento", text: "Publicar, filtrar, entrevistar y esperar semanas para cubrir un solo turno. Mientras tanto, tu operación sufre." },
  { icon: "📄", title: "CVs irrelevantes", text: "Recibes cientos de postulaciones genéricas sin experiencia gastronómica verificable ni referencias reales." },
  { icon: "👻", title: "No-shows frecuentes", text: "El 35% de los candidatos no se presenta el primer día. Sin garantía, sin reemplazo, sin solución." },
  { icon: "💸", title: "Costos ocultos", text: "Comisiones de portales, horas de RRHH, turnos descubiertos. El costo real de contratar es 3x más de lo que crees." },
  { icon: "📊", title: "Cero visibilidad", text: "No tienes datos de rendimiento, puntualidad ni historial. Contratas a ciegas cada vez." },
];

export const solutions = [
  { icon: "⚡", title: "Match en 2 min", text: "Nuestro algoritmo conecta tu turno con el trabajador verificado más cercano y disponible. Confirmación instantánea." },
  { icon: "🛡️", title: "100% verificado", text: "Cada trabajador tiene GourmetScore: identidad validada, referencias comprobadas y rating actualizado en tiempo real." },
  { icon: "🔄", title: "Garantía total", text: "Si un trabajador no se presenta, enviamos reemplazo inmediato sin costo. Nuestra tasa de cumplimiento es del 98%." },
  { icon: "💰", title: "Paga por resultado", text: "Solo pagas por turnos completados exitosamente. Sin comisiones ocultas, sin contratos de permanencia." },
  { icon: "📈", title: "Analytics completo", text: "Dashboard con métricas de cada turno: puntualidad, calidad, costos y proyecciones. Decisiones basadas en datos." },
];

export const howItWorks = [
  {
    number: "01",
    icon: "📋",
    title: "Publica tu turno",
    description: "Describe el rol, horario y zona. Toma menos de 30 segundos.",
    chip: "30 seg",
  },
  {
    number: "02",
    icon: "🤖",
    title: "Match inteligente",
    description: "Nuestro algoritmo conecta con trabajadores verificados disponibles cerca.",
    chip: "~2 min",
  },
  {
    number: "03",
    icon: "🤝",
    title: "Confirma y listo",
    description: "El trabajador llega, hace su turno, y tú calificas. Sin contratos largos.",
    chip: "0 papeleo",
  },
];

export type BentoSize = "span4" | "span2";

export interface Feature {
  icon: string;
  title: string;
  description: string;
  chip?: string;
  size: BentoSize;
  accent?: boolean;
}

export const features: Feature[] = [
  {
    icon: "🛡️",
    title: "Score de Confiabilidad",
    description: "Cada trabajador tiene un puntaje basado en puntualidad, aceptación y rating.",
    chip: "IA",
    size: "span4",
    accent: true,
  },
  {
    icon: "💰",
    title: "Earnings Tracker",
    description: "Visualiza costos por semana, mes y proyección anual en tiempo real.",
    chip: "Analytics",
    size: "span2",
  },
  {
    icon: "💬",
    title: "WhatsApp Disponibilidad",
    description: "Los trabajadores actualizan su disponibilidad directamente por WhatsApp.",
    chip: "Integración",
    size: "span2",
  },
  {
    icon: "🏪",
    title: "Shift Marketplace",
    description: "Publica turnos abiertos y recibe postulaciones al instante.",
    chip: "Marketplace",
    size: "span2",
  },
  {
    icon: "🗺️",
    title: "Zonas Calientes",
    description: "Mapa de demanda en tiempo real para optimizar tu ubicación.",
    chip: "Geolocation",
    size: "span2",
  },
  {
    icon: "⭐",
    title: "GourmetScore Empresas",
    description: "Los trabajadores también califican a las empresas. Mejor score = mejor talento.",
    chip: "Reputación",
    size: "span2",
  },
  {
    icon: "👥",
    title: "Mi Equipo Flex",
    description: "Arma tu equipo de confianza y re-contrátalos con un tap. Sin re-negociar.",
    chip: "Favoritos",
    size: "span4",
  },
];

export const trustBars = [
  { label: "Puntualidad", value: 98 },
  { label: "Aceptación", value: 94 },
  { label: "Rating", value: 96 },
];

export const earningsData = [
  { label: "Semana", value: "$142K" },
  { label: "Mes", value: "$580K" },
  { label: "Proyección", value: "$720K" },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/mes",
    description: "Para probar la plataforma",
    features: [
      "3 turnos al mes",
      "Acceso a trabajadores verificados",
      "Chat integrado",
      "Soporte por email",
    ],
    cta: "Empezar gratis",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49.990",
    period: "/mes",
    description: "Para restaurantes activos",
    features: [
      "Turnos ilimitados",
      "Match prioritario",
      "Equipo Flex (favoritos)",
      "Analytics avanzados",
      "Soporte prioritario",
      "API access",
    ],
    cta: "Comenzar Pro",
    popular: true,
  },
  {
    name: "Premium",
    price: "$99.990",
    period: "/mes",
    description: "Para cadenas y catering",
    features: [
      "Todo en Pro",
      "Multi-sucursal",
      "Account manager dedicado",
      "Integraciones custom",
      "SLA garantizado",
      "Onboarding personalizado",
    ],
    cta: "Contactar ventas",
    popular: false,
  },
];

export const footerLinks = {
  Producto: ["Cómo funciona", "Precios", "Features", "API"],
  Empresa: ["Nosotros", "Blog", "Carreras", "Prensa"],
  Legal: ["Términos", "Privacidad", "Cookies"],
};
