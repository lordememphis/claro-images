const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#F16522",
        accent: "#69BA10",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
