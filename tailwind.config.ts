import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,html,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // use `font-gameboy` to apply your Early Gameboy font
        gameboy: ['"Roboto Mono"', '"Early Gameboy"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config