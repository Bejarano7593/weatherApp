/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
    screens: {
      'xs': {'min': '280px', 'max': '420px'},

      'sm': {'min': '420px', 'max': '640px'},

      'mq':{ 'min':'640px', 'max': '768px'},

      'md': {'min': '769px', 'max': '912px'},

      'lq': {'min': '912px', 'max': '1023px'},

      'lg': {'min': '1024px', 'max': '1279px'},

      'xl': {'min': '1280px', 'max': '1535px'},

      '2xl': {'min': '1536px'},

    },
    plugins: [],
  },
};
