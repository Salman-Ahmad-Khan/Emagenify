/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        green: {
          100: "#E8F8EE",
          200: "#B9E6CA",
          300: "#6CD894",
          400: "#39CC6E",
          500: "#1DB954",
          600: "#179C46",
          700: "#128037",
        },
        dark: {
          400: "#7986AC",
          500: "#606C80",
          600: "#2B3674",
          700: "#384262",
        },
        primary: {
          DEFAULT: "hsl(142 75% 42%)",     
          foreground: "hsl(0 0% 100%)"     
        },
        secondary: {
          DEFAULT: "hsl(142 45% 35%)",      
          foreground: "hsl(0 0% 100%)"     
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",       
          foreground: "hsl(0 0% 100%)"      
        },
        muted: {
          DEFAULT: "hsl(142 20% 96%)",      
          foreground: "hsl(142 30% 35%)"    
        },
        accent: {
          DEFAULT: "hsl(162 75% 42%)",     
          foreground: "hsl(0 0% 100%)"      
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",        
          foreground: "hsl(142 30% 15%)"    
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",        
          foreground: "hsl(142 30% 15%)"    
        },
      },
      fontFamily: {
        IBMPlex: ["var(--font-ibm-plex)"],
      },
      backgroundImage: {
        "green-gradient": "url('/assets/images/gradient-bg.svg')",
        banner: "url('/assets/images/banner-bg.png')",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};