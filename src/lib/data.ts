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

export type WorkerCategory = "all" | "garzones" | "cocina" | "baristas" | "admin";

export const marqueeWorkers = [
  { name: "Camila R.", role: "Chef de partida", category: "cocina" as WorkerCategory, zone: "Providencia", availability: "now" as const, img: "https://i.pravatar.cc/150?img=1", rating: 4.9, experience: "6 años", price: "$5.500/hr", hours: "Hoy 10:00–18:00", tagline: "Especialista en cocina francesa y menú degustación", badge: "fast" as const, skills: ["Cocina francesa", "Repostería"] },
  { name: "Diego M.", role: "Barman", category: "baristas" as WorkerCategory, zone: "Las Condes", availability: "today" as const, img: "https://i.pravatar.cc/150?img=11", rating: 4.7, experience: "4 años", price: "$4.500/hr", hours: "Hoy 20:00–03:00", tagline: "Coctelería clásica y de autor, alto flujo", badge: "demand" as const, skills: ["Coctelería", "Mixología"] },
  { name: "Valentina S.", role: "Mesera", category: "garzones" as WorkerCategory, zone: "Vitacura", availability: "now" as const, img: "https://i.pravatar.cc/150?img=5", rating: 4.8, experience: "5 años", price: "$4.000/hr", hours: "Hoy 12:00–22:00", tagline: "Atención VIP y bilingüe inglés-español", badge: "fast" as const, skills: ["Atención VIP", "Bilingüe"] },
  { name: "Matías F.", role: "Sous Chef", category: "cocina" as WorkerCategory, zone: "Ñuñoa", availability: "now" as const, img: "https://i.pravatar.cc/150?img=12", rating: 5.0, experience: "8 años", price: "$7.000/hr", hours: "Hoy 09:00–17:00", tagline: "Gestión de equipo y cocina asiática fusión", badge: null, skills: ["Cocina asiática", "Gestión"] },
  { name: "Isidora P.", role: "Pastelera", category: "cocina" as WorkerCategory, zone: "Santiago Centro", availability: "today" as const, img: "https://i.pravatar.cc/150?img=9", rating: 4.9, experience: "5 años", price: "$5.000/hr", hours: "Mañana 07:00–15:00", tagline: "Pastelería fina y chocolatería artesanal", badge: "demand" as const, skills: ["Pastelería", "Chocolatería"] },
  { name: "Sebastián V.", role: "Garzón", category: "garzones" as WorkerCategory, zone: "La Reina", availability: "now" as const, img: "https://i.pravatar.cc/150?img=13", rating: 4.3, experience: "2 años", price: "$3.800/hr", hours: "Hoy 19:00–01:00", tagline: "Experiencia en fine dining y servicio de vinos", badge: null, skills: ["Fine dining", "Vinos"] },
  { name: "Antonia M.", role: "Hostess", category: "admin" as WorkerCategory, zone: "Providencia", availability: "now" as const, img: "https://i.pravatar.cc/150?img=23", rating: 4.8, experience: "3 años", price: "$4.200/hr", hours: "Hoy 12:00–20:00", tagline: "Gestión de reservas y atención al cliente premium", badge: "fast" as const, skills: ["Reservas", "Atención"] },
  { name: "Felipe L.", role: "Cocinero línea", category: "cocina" as WorkerCategory, zone: "Las Condes", availability: "today" as const, img: "https://i.pravatar.cc/150?img=14", rating: 4.2, experience: "1 año", price: "$3.500/hr", hours: "Hoy 18:00–02:00", tagline: "Parrilla y cocina rápida, turnos noche", badge: "new" as const, skills: ["Parrilla", "Cocina rápida"] },
  { name: "Catalina B.", role: "Sommelier", category: "baristas" as WorkerCategory, zone: "Vitacura", availability: "now" as const, img: "https://i.pravatar.cc/150?img=25", rating: 5.0, experience: "7 años", price: "$6.500/hr", hours: "Hoy 18:00–00:00", tagline: "Cata de vinos y maridaje para eventos", badge: "demand" as const, skills: ["Cata de vinos", "Maridaje"] },
  { name: "Tomás H.", role: "Ayudante cocina", category: "cocina" as WorkerCategory, zone: "Maipú", availability: "now" as const, img: "https://i.pravatar.cc/150?img=15", rating: 4.0, experience: "6 meses", price: "$3.000/hr", hours: "Hoy 10:00–18:00", tagline: "Preparación y limpieza, turnos flexibles", badge: "new" as const, skills: ["Prep", "Limpieza"] },
  { name: "Javiera C.", role: "Barista", category: "baristas" as WorkerCategory, zone: "Providencia", availability: "now" as const, img: "https://i.pravatar.cc/150?img=32", rating: 4.6, experience: "3 años", price: "$4.000/hr", hours: "Hoy 07:00–15:00", tagline: "Café de especialidad y latte art", badge: null, skills: ["Latte art", "Café especialidad"] },
  { name: "Roberto S.", role: "Garzón", category: "garzones" as WorkerCategory, zone: "Santiago Centro", availability: "today" as const, img: "https://i.pravatar.cc/150?img=33", rating: 4.5, experience: "3 años", price: "$4.000/hr", hours: "Mañana 12:00–22:00", tagline: "Restaurantes de alto flujo y eventos", badge: null, skills: ["Alto flujo", "Eventos"] },
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
