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
      },
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#2AC299",
      },
      boxShadow: {
        primary: "0 3px 13px 2px rgba(255,255,255)",
      },

      animation: {
        slideup: "slideup 0.7s ease-in-out",
        slideup42: "slideup42 1s ease-in-out",
        slidedown: "slidedown 1s ease-in-out",
        slidedown2: "slidedown2 1.8s ease-in-out",
        slideleft: "slideleft 1.2s ease-in-out",
        slideleftT2: "slideleft 1s ease-in-out",
        slideleftT3: "slideleft 1.3s ease-in-out",
        slideleftT4: "slideleft 1.6s ease-in-out",
        slideleft3: "slideleft3 1s ease-in-out",
        slideleft2: "slideleft2 1.8s ease-in-out",
        slideright: "slideright 1s ease-in-out",
        slideright2: "slideright2 1.3s ease-in-out",
        slowfade: "slowfade 2.2s ease-in-out",
        slowfade2: "slowfade2 1.5s ease-in-out",
        wave: "wave 1.2s linear infinite",
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slowfade2: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: "translateY(5%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideup42: {
          from: { opacity: 0, transform: "translateY(100%)" },
          to: { opacity: 1, transform: "none" },
        },
        slidedown: {
          from: { opacity: 0, transform: "translateY(-25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slidedown2: {
          from: { opacity: 0, transform: "translateY(-600px)" },
          to: { opacity: 1, transform: "none" },
        },
        slideleft: {
          from: { opacity: 0, transform: "translateX(-250px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideleft3: {
          from: { opacity: 0, transform: "translateX(-350px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideleft2: {
          from: { opacity: 0, transform: "translateX(-500px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright2: {
          from: { opacity: 0, transform: "translateX(500px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        wave: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },

    screens: {
      225: "225px",
      310: "310px",
      340: "340px",
      350: "350px",
      370: "370px",
      400: "400px",
      420: "420px",
      450: "450px",
      500: "500px",
      550: "550px",
      600: "600px",
      630: "630px",
      660: "660px",
      720: "720px",
      800: "800px",
      840: "840px",
      860: "860px",
      900: "900px",
      950: "950px",
      1000: "1000px",
      1140: "1140px",
      1250: "1250px",
      1260: "1260px",
      1280: "1280px",
      1300: "1300px",
    },
  },
  plugins: [],
};
