<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="max-w-2xl text-gray-800 mt-4 mb-10">
        <h2 class="text-lg font-bold mb-4">Worksheet Edukatif & Seru untuk Anak! 🎉</h2>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="text-green-500 text-xl">✅</span>
            <p class="ml-3"><strong>Format Digital (PDF)</strong> – Bisa <strong>dicetak sepuasnya</strong> tanpa takut rusak! Praktis dan bisa diakses kapan saja, di mana saja. 📲🖨️</p>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 text-xl">✅</span>
            <p class="ml-3"><strong>Disesuaikan dengan Usia Anak</strong> – Materinya <strong>ringan & menyenangkan</strong>, jadi si kecil tetap happy saat belajar tanpa merasa terbebani! 😊✨</p>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 text-xl">✅</span>
            <p class="ml-3"><strong>Desain Menarik & Interaktif</strong> – Bikin anak <strong>excited</strong> setiap kali mengerjakan! Visual yang lucu dan warna-warni bikin belajar makin seru! 🎨🐻</p>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 text-xl">✅</span>
            <p class="ml-3"><strong>Bisa Digunakan di HP, iPad, atau Tablet</strong> – Gak perlu ribet, si kecil bisa belajar kapan pun dan di mana pun dengan mudah! 📱💻</p>
          </li>
        </ul>
      </div>

			<div class="mt-12 text-center flex justify-between">
				<div class="font-bold">
					Produk Kami
				</div>
				<a
					href="https://lynk.id/temanisikecil"
					target="_blank"
					class="font-bold text-blue-500">
					Lihat semua produk
				</a>
			</div>

      <div class="max-w-7xl mx-auto">
        <div class="mt-6 grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[7rem]">
          <div v-for="product in products" :key="product.id" class="group relative">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-96" />
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-md text-gray-700">
                  <a :href="product.href" target="blank">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
              </div>
              <!-- <p class="text-sm font-medium text-gray-900">{{ product.price }}</p> -->
            </div>
          </div>
        </div>

        <div class="mt-12 mb-3">
					<h2 class="text-lg font-bold">
						Coding Worksheet
					</h2>
					<p class="text-lg leading-8 text-gray-600">
						Worksheet coding interaktif untuk anak-anak dengan aktivitas seru yang mengenalkan konsep berpikir logis dan pemecahan masalah. Belajar jadi lebih menyenangkan, kreatif, dan interaktif! 🚀💡
					</p>
        </div>
        <div class="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[7rem]">
          <div v-for="product in codingProducts" :key="product.id" class="group relative">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-96" />
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-md text-gray-700">
                  <a :href="product.href" target="blank">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
              </div>
              <!-- <p class="text-sm font-medium text-gray-900">{{ product.price }}</p> -->
            </div>
          </div>
        </div>

				<div class="mt-12 text-center">
					<a
						href="https://lynk.id/temanisikecil"
						target="_blank"
						class="rounded-full bg-green-400 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 hover:text-gray-900">
						Lihat semua produk
					</a>
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
    href: 'https://lynk.id/temanisikecil/ElDE5OM',
    imageSrc: '/assets/images/products/1.png',
    imageAlt: "Worksheet Anak 2-3 Tahun",
    price: 'Rp10.000',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Worksheet Anak 3-4 Tahun',
    href: 'https://lynk.id/temanisikecil/QgRrXya',
    imageSrc: '/assets/images/products/2.png',
    imageAlt: "Worksheet Anak 3-4 Tahun",
    price: 'Rp10.000',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Worksheet Anak 4-5 Tahun',
    href: 'https://lynk.id/temanisikecil/E9wXaKM',
    imageSrc: '/assets/images/products/3.png',
    imageAlt: "Worksheet Anak 4-5 Tahun",
    price: 'Rp10.000',
    color: 'Black',
  },
];
const codingProducts = [
  {
    id: 4,
    name: 'Coding Worksheet Stage 1',
    href: 'https://lynk.id/temanisikecil/pb5jWnm',
    imageSrc: '/assets/images/products/4.png',
    imageAlt: "Coding Worksheet Stage 1",
    price: 'Rp20.000',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Coding Worksheet Stage 2',
    href: 'https://lynk.id/temanisikecil/Lp91y6b',
    imageSrc: '/assets/images/products/5.png',
    imageAlt: "Coding Worksheet Stage 2",
    price: 'Rp20.000',
    color: 'Black',
  },
];
</script>
