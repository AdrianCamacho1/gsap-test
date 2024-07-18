module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Ensure 'Inter' is listed as the primary sans-serif font
      },
      colors: {
        "sls-blue": "#3F9CF0", // Your custom color
        dark: "#1E293B",
      },
    },
  },
  plugins: [],
};
