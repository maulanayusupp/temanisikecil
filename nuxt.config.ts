// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        },
        {
          rel: "canonical",
          href: "https://temanisikecil.com"
        }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Temanisikecil menyediakan worksheet edukatif untuk anak usia 2-5 tahun dan worksheet coding untuk usia 5+. Belajar sambil bermain, asah motorik, kreativitas & logika anak.' },
        { name: 'keywords', content: 'worksheet anak, worksheet edukatif, worksheet PAUD, aktivitas anak, belajar anak, coding anak, worksheet coding, lembar kerja anak, worksheet TK, worksheet motorik halus, temanisikecil' },
        { name: 'author', content: 'Temanisikecil' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://temanisikecil.com' },
        { property: 'og:title', content: 'Temanisikecil - Worksheet Edukatif untuk Anak | Aktivitas & Coding' },
        { property: 'og:description', content: 'Worksheet interaktif untuk anak usia 2-5 tahun dan coding worksheet untuk usia 5+. Transformasi waktu layar menjadi waktu belajar yang menyenangkan!' },
        { property: 'og:image', content: 'https://temanisikecil.com/assets/images/logos/landscape_logo.png' },
        { property: 'og:site_name', content: 'Temanisikecil' },
        { property: 'og:locale', content: 'id_ID' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Temanisikecil - Worksheet Edukatif untuk Anak | Aktivitas & Coding' },
        { name: 'twitter:description', content: 'Worksheet interaktif untuk anak usia 2-5 tahun dan coding worksheet untuk usia 5+. Transformasi waktu layar menjadi waktu belajar!' },
        { name: 'twitter:image', content: 'https://temanisikecil.com/assets/images/logos/landscape_logo.png' },
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Temanisikecil",
            "url": "https://temanisikecil.com",
            "description": "Worksheet edukatif untuk anak usia 2-5 tahun dan worksheet coding untuk usia 5+.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://temanisikecil.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Temanisikecil",
            "url": "https://temanisikecil.com",
            "logo": "https://temanisikecil.com/assets/images/logos/landscape_logo.png",
            "sameAs": [
              "https://www.instagram.com/temanisikecil",
              "https://lynk.id/temanisikecil"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "url": "https://www.instagram.com/temanisikecil",
              "contactType": "customer service"
            }
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Navigasi Temanisikecil",
            "description": "Menu utama situs Temanisikecil",
            "itemListElement": [
              {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "Fitur Worksheet",
                "description": "Fitur worksheet edukatif untuk anak usia 2-5 tahun dan coding untuk usia 5+",
                "url": "https://temanisikecil.com/#features"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "Galeri",
                "description": "Galeri foto anak-anak yang sedang belajar dengan worksheet Temanisikecil",
                "url": "https://temanisikecil.com/#gallery"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Produk Worksheet",
                "description": "Daftar produk worksheet aktivitas dan coding untuk berbagai usia",
                "url": "https://temanisikecil.com/#products"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Testimoni",
                "description": "Testimoni orang tua yang sudah menggunakan worksheet Temanisikecil",
                "url": "https://temanisikecil.com/#testimonials"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 5,
                "name": "Beli Worksheet",
                "description": "Beli worksheet edukatif Temanisikecil di toko online kami",
                "url": "https://lynk.id/temanisikecil"
              }
            ]
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Worksheet Edukatif Anak - Temanisikecil",
            "description": "Worksheet interaktif untuk anak usia 2-5+ tahun. Tersedia worksheet aktivitas dan worksheet coding.",
            "brand": {
              "@type": "Brand",
              "name": "Temanisikecil"
            },
            "offers": {
              "@type": "AggregateOffer",
              "url": "https://lynk.id/temanisikecil",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "ratingCount": "100"
            }
          })
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