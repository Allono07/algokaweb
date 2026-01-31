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
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Algoka custom colors
        space: {
          dark: "hsl(var(--space-dark))",
          mid: "hsl(var(--space-mid))",
        },
        star: {
          glow: "hsl(var(--star-glow))",
        },
        flame: {
          orange: "hsl(var(--flame-orange))",
          yellow: "hsl(var(--flame-yellow))",
          red: "hsl(var(--flame-red))",
        },
        cloud: {
          light: "hsl(var(--cloud-light))",
          dark: "hsl(var(--cloud-dark))",
        },
        label: {
          glow: "hsl(var(--label-glow))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "twinkle": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "flame-flicker": {
          "0%, 100%": { 
            transform: "scaleY(1) scaleX(1)",
            opacity: "1",
          },
          "25%": { 
            transform: "scaleY(1.1) scaleX(0.95)",
            opacity: "0.9",
          },
          "50%": { 
            transform: "scaleY(0.95) scaleX(1.05)",
            opacity: "1",
          },
          "75%": { 
            transform: "scaleY(1.05) scaleX(0.98)",
            opacity: "0.85",
          },
        },
        "cloud-drift": {
          "0%": { transform: "translateX(0) scale(1)" },
          "50%": { transform: "translateX(30px) scale(1.02)" },
          "100%": { transform: "translateX(0) scale(1)" },
        },
        "cloud-drift-slow": {
          "0%": { transform: "translateX(0) scale(1)" },
          "50%": { transform: "translateX(-20px) scale(1.01)" },
          "100%": { transform: "translateX(0) scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 5px hsl(var(--primary) / 0.5), 0 0 10px hsl(var(--primary) / 0.3)",
          },
          "50%": { 
            boxShadow: "0 0 15px hsl(var(--primary) / 0.7), 0 0 30px hsl(var(--primary) / 0.4)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "twinkle-slow": "twinkle 5s ease-in-out infinite",
        "twinkle-fast": "twinkle 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "flame-flicker": "flame-flicker 0.15s ease-in-out infinite",
        "cloud-drift": "cloud-drift 20s ease-in-out infinite",
        "cloud-drift-slow": "cloud-drift-slow 30s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
