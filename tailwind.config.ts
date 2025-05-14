import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: "#1A1A1A", // Deep black for primary elements
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#D4D4D4",
          300: "#A3A3A3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          700: "#262626",
          800: "#1A1A1A",
          900: "#0A0A0A",
        },
        // Accent colors
        accent: {
          DEFAULT: "#FF4D4D", // Vibrant red for CTAs and highlights
          50: "#FFF1F1",
          100: "#FFE3E3",
          200: "#FFC7C7",
          300: "#FF9B9B",
          400: "#FF6F6F",
          500: "#FF4D4D",
          600: "#FF1A1A",
          700: "#E60000",
          800: "#B30000",
          900: "#800000",
        },
        // Neutral colors for UI elements
        neutral: {
          DEFAULT: "#F8F8F8", // Light background
          50: "#FFFFFF",
          100: "#F8F8F8",
          200: "#F0F0F0",
          300: "#E0E0E0",
          400: "#C0C0C0",
          500: "#A0A0A0",
          600: "#808080",
          700: "#606060",
          800: "#404040",
          900: "#202020",
        },
        // Success colors
        success: {
          DEFAULT: "#22C55E",
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
        },
        // Warning colors
        warning: {
          DEFAULT: "#F59E0B",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        // Error colors
        error: {
          DEFAULT: "#EF4444",
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        // Special colors for sneaker details
        sneaker: {
          leather: "#8B4513", // Rich brown for leather accents
          suede: "#A0522D", // Warm brown for suede elements
          mesh: "#E8E8E8", // Light gray for mesh details
          rubber: "#2C2C2C", // Dark gray for rubber soles
          canvas: "#F5F5DC", // Off-white for canvas materials
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config; 