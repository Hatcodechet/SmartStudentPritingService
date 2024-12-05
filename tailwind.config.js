/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Dancing-Script": ['Dancing Script', 'sans-serif']
    }
    },
  },
  plugins: [require("daisyui")],
}

