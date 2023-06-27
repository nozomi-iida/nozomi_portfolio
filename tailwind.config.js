/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        nav: "80px",
      },
      colors: {
        primary: "#1E90FF",
        bg: "#F7F7F7",
      },
      flex: { "1/2": "0 0 50%", "work-card-img": "0 0 40%" },
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
      zIndex: {
        hide: -1,
        auto: "auto",
        base: 0,
        docked: 10,
        dropdown: 1000,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
