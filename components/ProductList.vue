<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Banyak yang Suka Ini Juga!
      </h2>

      <div class="mt-2 leading-8">
          Temukan produk favorit lainnya yang bikin belajar lebih seru & menyenangkan untuk si kecil! ✨ Dari worksheet interaktif hingga e-book edukatif, semua dirancang untuk mengasah kreativitas, logika, dan keterampilan anak. 🎨📚
          <br>
          👉 Lengkapi koleksi belajar si kecil sekarang! 🚀
      </div>

      <div class="max-w-7xl mx-auto">
        <div class="mt-6 grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[7rem]">
          <div v-for="product in products" :key="product.id" class="group relative">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-96" />
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>

        <div class="mt-10 mb-3">
            <h2 class="text-lg font-bold mb-4">
              Coding Worksheet
            </h2>
          </div>
        <div class="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[7rem]">
          <div v-for="product in codingProducts" :key="product.id" class="group relative">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-96" />
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const products = [
  {
    id: 1,
    name: 'Worksheet Anak 2-3 Tahun',
    href: '#',
    imageSrc: '/assets/images/products/1.png',
    imageAlt: "Worksheet Anak 2-3 Tahun",
    price: 'Rp10.000',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Worksheet Anak 3-4 Tahun',
    href: '#',
    imageSrc: '/assets/images/products/2.png',
    imageAlt: "Worksheet Anak 3-4 Tahun",
    price: 'Rp10.000',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Worksheet Anak 4-5 Tahun',
    href: '#',
    imageSrc: '/assets/images/products/3.png',
    imageAlt: "Worksheet Anak 4-5 Tahun",
    price: 'Rp10.000',
    color: 'Black',
  },
];
const codingProducts = [
  {
    id: 1,
    name: 'Coding Worksheet Stage 1',
    href: '#',
    imageSrc: '/assets/images/products/4.png',
    imageAlt: "Coding Worksheet Stage 1",
    price: 'Rp20.000',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Coding Worksheet Stage 2',
    href: '#',
    imageSrc: '/assets/images/products/5.png',
    imageAlt: "Coding Worksheet Stage 2",
    price: 'Rp20.000',
    color: 'Black',
  },
];
</script>