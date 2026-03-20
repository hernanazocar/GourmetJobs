"use client";

interface BlobProps {
  className?: string;
  size?: string;
  color?: string;
}

export default function Blob({
  className = "",
  size = "400px",
  color = "var(--orange)",
}: BlobProps) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: "blur(80px)",
        opacity: 0.35,
      }}
    />
  );
}
