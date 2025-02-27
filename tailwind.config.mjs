const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainColor3: "#C45EEC",
        alertColor2: "#7D7979",
        mainColor2: "#F6EEE3",
        subTitleGray: "#B3ADA5",
        purple500: "#7b75ad",
        purple700: "#36344c",
        bg: "#161516",
        inputBg:"#201f20"
      },
      fontFamily: {
        clash: "var(--fontClash)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #FF0FFD 0%, #006FFC 38%, #D73DE5 57%, #EDB547 64%, #6E5EEE 68%, #85AE87 79%, #197DF7 93%)",
      },
      spacing: {
        '60': '60px',
      },
      screens: {
        'menu': '1045px', // Use 1045px as the new breakpoint
        // Alternatively, use 1054px if you prefer:
        // 'md': '1054px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".gradient-border": {
          borderImage:
            "linear-gradient(to right, #FF0FFD 0%, #006FFC 38%, #D73DE5 57%, #EDB547 64%, #6E5EEE 68%, #85AE87 79%, #197DF7 93%) 1",
        },
      });
    }),
  ],
};
