interface SectionLabelProps {
  text: string;
  color?: "orange" | "green";
}

export default function SectionLabel({ text, color = "orange" }: SectionLabelProps) {
  const bg = color === "orange" ? "bg-opal text-orange" : "gpal text-green";
  return (
    <span className={`label inline-block px-4 py-1.5 rounded-full text-xs ${bg}`}>
      {text}
    </span>
  );
}
