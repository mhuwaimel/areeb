/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Brand-dark": "#4c5353",
        "Brand-light": "#F2F4CD",
      },
      fontFamily: {
        almarai: ["var(--font-almarai)"],
        cairo: ["var(--font-cairo)"],
        changa: ["var(--font-changa)"],
        tajawal: ["var(--font-tajawal)"],
        alexandria: ["var(--font-alexandria)"],
        alkalami: ["var(--font-alkalami)"],
      },
    },
  },
  plugins: [],
};
