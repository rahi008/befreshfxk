import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mytheme: {
          
    "primary": "#9b87f2",
             
    "secondary": "#3c12e5",
             
    "accent": "#cb55d6",
             
    "neutral": "#2a343c",
             
    "base-100": "#f5eef7",
             
    "info": "#a1b4e8",
             
    "success": "#27b45d",
             
    "warning": "#e6851e",
             
    "error": "#e9221c",
             },
  plugins: [require("daisyui"),require('@tailwindcss/forms')],
}
export default config
