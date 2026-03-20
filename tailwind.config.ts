import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#100A06",
        bg2: "#180E08",
        bg3: "#1E1208",
        card: "#231408",
        card2: "#2C1A0A",
        orange: "#E85520",
        orange2: "#FF7040",
        orange3: "#FF9060",
        opal: "rgba(232,85,32,.12)",
        cream: "#FFF8F2",
        "light-warm": "#FFE4CC",
        "light-card": "#FFD9B8",
        "light-border": "rgba(232,85,32,0.18)",
        text: "#FFF4EC",
        text2: "#B89880",
        text3: "#7A5C48",
        green: "#34D399",
        border: "rgba(255,255,255,.07)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "28px",
        btn: "16px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-14px) translateX(10px)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-20px) translateX(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        float2: "float2 10s ease-in-out infinite",
        float3: "float3 9s ease-in-out infinite",
        marquee: "marquee 12s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
