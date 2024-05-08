/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#04ABFF",
        primary2: "#000000",
        secondary: "#FF8032",
        background: "#CAEDFF",
        button: "#04ABFF",
        // ...
      },
      backgroundImage: {
        "my-image":
          "url('https://res.cloudinary.com/dhhuv7n0h/image/upload/v1714202688/div.background_h76wu5.png')",
      },
    },
  },
  plugins: [],
};
