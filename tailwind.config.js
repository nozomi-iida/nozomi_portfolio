/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        page: "64px",
      },
      lineHeight: {
        nav: "80px",
      },
      colors: {
        primary: "#1E90FF",
        bg: "#F7F7F7",
      },
      flex: { "1/2": "0 0 50%" },
      boxShadow: {
        "home-icon": "12px 0 #bae6fd, 24px 0 #e0f2fe, 36px 0 #f0f9ff",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(80px, 1fr));",
      },
      maxWidth: {
        "work-card-img": "360px",
      },
      height: {
        "work-card-img": "200px",
      },
      margin: {
        header: "80px",
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
