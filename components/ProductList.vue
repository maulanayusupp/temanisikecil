<template>
  <div>
    <!-- Worksheet Products -->
    <div class="mb-20">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h3 class="text-xl font-bold text-gray-900">Worksheet Anak</h3>
          <p class="text-sm text-gray-500 mt-1">Pilih sesuai usia si kecil</p>
        </div>
        <a
          href="https://lynk.id/temanisikecil"
          target="_blank"
          class="group inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors">
          Lihat Semua
          <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="product in products"
          :key="product.id"
          :href="product.href"
          target="_blank"
          class="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300">
          <div class="relative overflow-hidden bg-gray-100">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-5">
            <h4 class="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{{ product.name }}</h4>
            <div class="mt-3 flex items-center gap-2">
              <span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-200">PDF Digital</span>
              <span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">Multi-Device</span>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- Coding Products -->
    <div class="rounded-3xl bg-gradient-to-br from-violet-50 via-purple-50/50 to-fuchsia-50/30 border border-violet-100 p-8 sm:p-10">
      <div class="flex flex-col sm:flex-row items-start gap-4 mb-8">
        <div class="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-md flex-shrink-0">
          💻
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-900">Coding Worksheet</h3>
          <p class="text-sm text-gray-600 mt-1 leading-relaxed">
            Worksheet coding interaktif yang mengenalkan konsep berpikir logis dan pemecahan masalah.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          v-for="product in codingProducts"
          :key="product.id"
          :href="product.href"
          target="_blank"
          class="group block bg-white rounded-2xl border border-violet-100 overflow-hidden hover:shadow-lg hover:border-violet-200 transition-all duration-300">
          <div class="relative overflow-hidden bg-gray-100">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute top-3 left-3">
              <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-violet-600 text-white shadow-md">CODING</span>
            </div>
          </div>
          <div class="p-5">
            <h4 class="font-bold text-gray-900 group-hover:text-violet-600 transition-colors">{{ product.name }}</h4>
            <div class="mt-3 flex flex-wrap items-center gap-2">
              <span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-violet-50 text-violet-700 border border-violet-200">Logika</span>
              <span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-pink-50 text-pink-700 border border-pink-200">Problem Solving</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Worksheet Anak 2-3 Tahun',
    href: 'https://lynk.id/temanisikecil/ElDE5OM',
    imageSrc: '/assets/images/products/1.png',
    imageAlt: 'Worksheet Anak 2-3 Tahun',
  },
  {
    id: 2,
    name: 'Worksheet Anak 3-4 Tahun',
    href: 'https://lynk.id/temanisikecil/QgRrXya',
    imageSrc: '/assets/images/products/2.png',
    imageAlt: 'Worksheet Anak 3-4 Tahun',
  },
  {
    id: 3,
    name: 'Worksheet Anak 4-5 Tahun',
    href: 'https://lynk.id/temanisikecil/E9wXaKM',
    imageSrc: '/assets/images/products/3.png',
    imageAlt: 'Worksheet Anak 4-5 Tahun',
  },
]

const codingProducts = [
  {
    id: 4,
    name: 'Coding Worksheet Stage 1',
    href: 'https://lynk.id/temanisikecil/pb5jWnm',
    imageSrc: '/assets/images/products/4.png',
    imageAlt: 'Coding Worksheet Stage 1',
  },
  {
    id: 5,
    name: 'Coding Worksheet Stage 2',
    href: 'https://lynk.id/temanisikecil/Lp91y6b',
    imageSrc: '/assets/images/products/5.png',
    imageAlt: 'Coding Worksheet Stage 2',
  },
]
</script>
