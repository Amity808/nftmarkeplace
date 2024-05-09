/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** primary */
        "prosperity": "#FCFF52",
        "forest": "#476520",
        /** base */
        "gypsum": "#FCF6F1",
        "sand": "#E7E3D4",
        "wood": "#655947",
        "fig": "#1E002B",
        /** functional */
        "snow": "#FFFFFF",
        "onyx": "#000000",
        "success": "#329F3B",
        "error": "#E70532",
        "disabled": "#9B9B9B",
        /** accent */
        "sky": "#7CC0FF",
        "citrus": "#FF9A51",
        "lotus": "#FFA3EB",
        "lavender": "#B490FF",
        "ppGrad": "var(--pp2-purple, #671AE4)"
      },
      fontFamily: {
        // variable and include fallback fonts from tailwind default theme
        ppReg: ['var(--font-ppReg)'],
        ppB: ['var(--font-ppB)'],
        ppEB: ['var(--font-ppEB)'],
        manropeL: ['var(--font-manropeL)'],
        manropeEL: ['var(--font-manropeEL)'],
        manropeB: ['var(--font-manropeB)'],
        manropeEB: ['var(--font-manropeEB)'],
      }
    },
  },
  plugins: [],
}
