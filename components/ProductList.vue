<template>
  <div class="bg-transparent">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Features Grid -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Kenapa Memilih Worksheet Kami? 💎</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="group p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-xl shadow-md">
                📲
              </div>
              <h4 class="font-bold text-gray-900">Format Digital</h4>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed">Bisa <strong>dicetak sepuasnya</strong> tanpa takut rusak! Akses kapan saja, di mana saja.</p>
          </div>

          <div class="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center text-xl shadow-md">
                😊
              </div>
              <h4 class="font-bold text-gray-900">Sesuai Usia</h4>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed">Materinya <strong>ringan & menyenangkan</strong>, si kecil tetap happy saat belajar!</p>
          </div>

          <div class="group p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-xl shadow-md">
                🎨
              </div>
              <h4 class="font-bold text-gray-900">Desain Menarik</h4>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed">Bikin anak <strong>excited</strong>! Visual lucu dan warna-warni bikin belajar seru!</p>
          </div>

          <div class="group p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border-2 border-green-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-xl shadow-md">
                💻
              </div>
              <h4 class="font-bold text-gray-900">Multi-Device</h4>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed">Bisa di HP, iPad, atau Tablet. Belajar kapan pun dan di mana pun!</p>
          </div>
        </div>
      </div>

			<!-- Section Header -->
			<div class="flex items-center justify-between mb-8">
				<div>
					<h3 class="text-2xl font-bold text-gray-900">Worksheet Anak 🎯</h3>
					<p class="text-gray-600 mt-1">Pilih sesuai usia si kecil</p>
				</div>
				<a
					href="https://lynk.id/temanisikecil"
					target="_blank"
					class="group inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors">
					Lihat Semua
					<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
					</svg>
				</a>
			</div>

      <div class="max-w-7xl mx-auto">
        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="product in products" :key="product.id" class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:scale-105">
            <!-- Product Image -->
            <div class="relative overflow-hidden bg-gray-100">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-500 lg:aspect-auto lg:h-80" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Hover Badge -->
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span class="text-xs font-bold text-blue-600">Lihat Detail →</span>
              </div>
            </div>
            
            <!-- Product Info -->
            <div class="p-5">
              <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                <a :href="product.href" target="_blank" class="flex items-center justify-between">
                  <span aria-hidden="true" class="absolute inset-0" />
                  <span>{{ product.name }}</span>
                  <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </a>
              </h3>
              <div class="mt-3 flex items-center gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  ✓ Digital PDF
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  📱 Multi-Device
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Coding Worksheet Section -->
        <div class="mt-20 p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-3xl border-2 border-purple-100">
					<div class="flex items-start gap-4 mb-6">
						<div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
							💻
						</div>
						<div>
							<h2 class="text-3xl font-bold text-gray-900 mb-2">
								Coding Worksheet 🚀
							</h2>
							<p class="text-lg leading-relaxed text-gray-700">
								Worksheet coding interaktif untuk anak-anak dengan aktivitas seru yang mengenalkan <strong>konsep berpikir logis dan pemecahan masalah</strong>. Belajar jadi lebih menyenangkan, kreatif, dan interaktif! 
							</p>
						</div>
					</div>
					
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
						<div v-for="product in codingProducts" :key="product.id" class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-purple-100 hover:border-purple-300 hover:scale-105">
							<!-- Product Image -->
							<div class="relative overflow-hidden bg-gray-100">
								<img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-500 lg:aspect-auto lg:h-80" />
								<div class="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								
								<!-- Special Badge for Coding -->
								<div class="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1.5 rounded-full shadow-lg">
									<span class="text-xs font-bold text-white">🔥 CODING</span>
								</div>
								
								<!-- Hover Badge -->
								<div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
									<span class="text-xs font-bold text-purple-600">Lihat Detail →</span>
								</div>
							</div>
							
							<!-- Product Info -->
							<div class="p-5">
								<h3 class="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
									<a :href="product.href" target="_blank" class="flex items-center justify-between">
										<span aria-hidden="true" class="absolute inset-0" />
										<span>{{ product.name }}</span>
										<svg class="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
										</svg>
									</a>
								</h3>
								<div class="mt-3 flex items-center gap-2 flex-wrap">
									<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
										🧠 Logika
									</span>
									<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
										🎯 Problem Solving
									</span>
									<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
										📱 Digital
									</span>
								</div>
							</div>
						</div>
					</div>
        </div>

				<!-- Final CTA -->
				<div class="mt-16 text-center">
					<div class="inline-block p-1 bg-gradient-to-r from-green-400 via-teal-400 to-green-400 rounded-full shadow-xl">
						<a
							href="https://lynk.id/temanisikecil"
							target="_blank"
							class="group relative inline-flex items-center gap-3 bg-white hover:bg-transparent rounded-full px-8 py-4 text-base font-bold text-gray-900 hover:text-white transition-all duration-300">
							<span class="relative z-10">Lihat Semua Produk Kami</span>
							<svg class="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
							</svg>
						</a>
					</div>
					<p class="mt-4 text-sm text-gray-600">
						💝 Investasi terbaik untuk masa depan si kecil
					</p>
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
