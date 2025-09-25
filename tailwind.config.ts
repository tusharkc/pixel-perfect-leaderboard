import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      // Only allowed colors from user specification
      black: "#000000",
      white: "#FFFFFF",
      brown: {
        dark: "#2C1B18",
        medium: "#944F23",
        light: "#D0C6AC",
        cream: "#EDB98A",
      },
      gray: {
        light: "#E6E6E6",
        lighter: "#F2F2F2",
        blue: "#8493A8",
      },
      pink: {
        DEFAULT: "#FF7096",
        light: "#FFD6DD",
      },
      purple: {
        darkest: "#1E192F",
        darker: "#1F152D",
        dark: "#211B27",
        DEFAULT: "#2C233A",
        bright: "#B946FF",
      },
      blue: {
        DEFAULT: "#437FD9",
        cyan: "#1DC8CC",
      },
      orange: {
        dark: "#FC6500",
        DEFAULT: "#FF5500",
        light: "#FF9500",
      },
      yellow: "#FFDD00",
      green: "#00FFB2",
      // Additional colors from the specification
      teal: {
        bright: "#16D6C9",
        light: "#56BCE1",
      },
      violet: "#781EF0",
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
