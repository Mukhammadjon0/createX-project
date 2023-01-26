/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/assets/img/home-bg.jpg')",
        'video-img': "url('/assets/img/video-img.png')",
        'bg-img': "url('/assets/img/background.jpg')",
        'card-img': "url('/assets/img/image1.jpg')",
        'bg-tz-img': "url('/assets/img/bg-image.png')",
        'bg-img-footer': "url('/assets/img/bg-img-footer.jpg')"
      }
    },
  },
  plugins: [],
}