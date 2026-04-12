/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#0B1D3A",
        secondary: "#1C2E5A",
        accent: "#FF6A2B",
        accentSoft: "#FFA366",

        background: "#F5F6F8",
        surface: "#FFFFFF",
        muted: "#6B7280",
        border: "#E5E7EB",

        purple: "#4F5BD5",
        purpleLight: "#6C7BFF",
      },

      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      fontSize: {
        hero: ["64px", { lineHeight: "1.1", letterSpacing: "-1px" }],
        h1: ["40px", { lineHeight: "1.2" }],
        h2: ["32px", { lineHeight: "1.3" }],
        base: ["16px", { lineHeight: "1.6" }],
        sm: ["14px"],
      },

      borderRadius: {
        xl: "20px",
        full: "999px",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.1)",
        card: "0 5px 20px rgba(0,0,0,0.08)",
      },

      maxWidth: {
        container: "1200px",
      },

      spacing: {
        section: "80px",
      }
    },
  },

  plugins: [],
};
