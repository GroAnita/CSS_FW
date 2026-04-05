/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}", "./**/*.html"],
  theme: {
    extend: {
      keyframes: {
        pop: {
          "0%": { transform: "scale(0) rotate(-10deg)" },
          "50%": { transform: "scale(1.3) rotate(5deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        pop: "pop 0.3s ease-out",
        gradient: "gradient 5s ease infinite",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
