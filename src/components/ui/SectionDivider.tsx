interface SectionDividerProps {
  to: "dark" | "light";
}

export default function SectionDivider({ to }: SectionDividerProps) {
  const bg = to === "dark" ? "#140D08" : "#FFF5EE";
  return (
    <div className="relative -mb-px z-10" aria-hidden>
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[40px] md:h-[60px] block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60V20C240 0 480 0 720 20C960 40 1200 40 1440 20V60H0Z"
          fill={bg}
        />
      </svg>
    </div>
  );
}
