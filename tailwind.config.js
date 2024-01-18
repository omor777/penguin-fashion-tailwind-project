/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,

        // screens: {
        //   sm: "640px",
        //   md: "768px",
        //   lg: "1024px",
        //   xl: "1170px",
        // },
      },
      fontSize: {
        25: "1.5625rem",
        36: "2.25rem",
        40: "2.5rem",
        48: "3rem",
        50: "50px",
        80: "5rem",
      },
      colors: {
        olive: {
          light: "#A4BC46",
          dark: "#85A019",
        },

        orange: "#FABE4C",
        title: "#363958",
        link: "#3C3C3C",
        para: "#3E3E3E",
      },
      fontWeight: {
        900: "900",
      },
      margin: {
        99: "6.1875rem",
        96: "6rem",
        130:'8.125rem'
      },
      lineHeight: {
        26: "1.625rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      borderRadius: {
        10: "0.625rem",
        20: "1.25rem",
      },
      boxShadow: {
        card: "0px 10px 30px 0px rgba(0, 0, 0, 0.05)",
      },
      padding: {
        18: "1.125rem",
        34: "2.125rem",
        164:'10.25rem',
        200:'12.5rem'
      },
    },
  },
  plugins: [],
};
