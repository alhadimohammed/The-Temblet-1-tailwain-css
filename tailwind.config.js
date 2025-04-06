/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'secbg': '#f6f6f6',
        'maincolor': '#10cab7',
        "pcolor": "#777",
      },
    },
  },
  variants: {},
  plugins: [],
}

