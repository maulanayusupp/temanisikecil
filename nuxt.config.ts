// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        }
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-swiper', 'nuxt-gtag', '@nuxtjs/sitemap'],
  gtag: {
    id: 'G-X2G682LK7K',
    config: {
      page_title: 'Temanisikecil - Worksheet Edukatif untuk Anak | Aktivitas & Coding'
    },
  },
  site: { 
    url: 'https://temanisikecil.com', 
    name: 'Temanisikecil - Worksheet Edukatif untuk Anak | Aktivitas & Coding' 
  }, 
})