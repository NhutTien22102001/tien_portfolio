/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        "black-12": "#030712",
        "gray-38": "#1f2838",
        "gray-51": "#374051",
        "black-27": "#101727"
      },
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
  
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
  
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
  
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

