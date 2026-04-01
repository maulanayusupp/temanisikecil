<template>
	<div class="relative overflow-hidden">
		<!-- Full-page continuous background -->
		<div class="absolute inset-0 -z-20 bg-gradient-to-b from-amber-50 via-white to-white"></div>

		<!-- Decorative blobs that flow across sections -->
		<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
			<!-- Top area blob -->
			<div class="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-bl from-orange-200/50 via-amber-100/40 to-transparent blur-3xl"></div>
			<div class="absolute top-[10%] -left-40 w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-rose-100/40 via-pink-100/30 to-transparent blur-3xl"></div>

			<!-- Mid area blobs -->
			<div class="absolute top-[30%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-sky-100/40 via-blue-100/30 to-transparent blur-3xl"></div>
			<div class="absolute top-[45%] -left-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-violet-100/35 via-purple-100/25 to-transparent blur-3xl"></div>

			<!-- Bottom area blobs -->
			<div class="absolute top-[65%] right-[5%] w-[32rem] h-[32rem] rounded-full bg-gradient-to-bl from-emerald-100/35 via-teal-100/25 to-transparent blur-3xl"></div>
			<div class="absolute top-[80%] -left-32 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-amber-100/30 via-orange-100/20 to-transparent blur-3xl"></div>
		</div>

		<main>
			<!-- Hero Section -->
			<section id="home" class="relative min-h-[90vh] flex items-center scroll-mt-24">
				<div class="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28">
					<div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						<!-- Left: Text content -->
						<div class="max-w-2xl">
							<div class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur rounded-full border border-orange-200/60 shadow-sm mb-8">
								<span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
								<span class="text-sm font-medium text-gray-700">Kurangi Screen Time, Tambah Skill Time</span>
							</div>

							<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-gray-900">
								Transformasi
								<span class="relative inline-block">
									<span class="relative z-10 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Waktu Layar</span>
									<span class="absolute bottom-1 left-0 w-full h-3 bg-amber-200/60 -z-0 rounded"></span>
								</span>
								<br />Menjadi Waktu Belajar
							</h1>

							<p class="mt-8 text-lg leading-relaxed text-gray-600">
								Worksheet interaktif dari <strong class="text-gray-900">Temanisikecil</strong> membantu anak belajar sambil bermain, mengasah logika, dan mengembangkan kreativitas dengan cara yang menyenangkan.
							</p>

							<!-- Stats row -->
							<div class="mt-8 flex flex-wrap gap-6 text-sm">
								<div class="flex items-center gap-2">
									<span class="text-yellow-500 text-base">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
									<span class="font-semibold text-gray-800">4.9/5 Rating</span>
								</div>
								<div class="flex items-center gap-2 text-gray-600">
									<svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
									<span>Dipercaya ratusan orang tua</span>
								</div>
							</div>

							<!-- CTA -->
							<div class="mt-10 flex flex-col sm:flex-row gap-4">
								<a
									href="https://lynk.id/temanisikecil"
									target="_blank"
									class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-gray-900/30 hover:-translate-y-0.5">
									Lihat Produk Kami
									<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
								</a>
								<a
									href="#features"
									@click.prevent="scrollTo('features')"
									class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-200">
									Pelajari Lebih Lanjut
								</a>
							</div>
						</div>

						<!-- Right: Image mosaic -->
						<div class="relative hidden lg:block">
							<div class="grid grid-cols-2 gap-4">
								<div class="space-y-4 pt-8">
									<div class="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
										<img src="/assets/images/hero/hero_1.png" alt="Contoh worksheet edukatif anak usia 2-3 tahun dari Temanisikecil" class="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" />
									</div>
									<div class="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
										<img src="/assets/images/hero/hero_2.png" alt="Worksheet aktivitas motorik halus untuk anak PAUD" class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
									</div>
								</div>
								<div class="space-y-4">
									<div class="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
										<img src="/assets/images/hero/hero_3.png" alt="Worksheet coding untuk anak usia 5 tahun ke atas" class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
									</div>
									<div class="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
										<img src="/assets/images/hero/hero_4.png" alt="Anak belajar kreativitas dengan worksheet Temanisikecil" class="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" />
									</div>
								</div>
							</div>
							<div class="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-400 rounded-2xl -z-10 rotate-6 opacity-60"></div>
							<div class="absolute -top-4 -right-4 w-16 h-16 bg-orange-300 rounded-full -z-10 opacity-50"></div>
						</div>
					</div>
				</div>
			</section>

			<!-- Curved section divider: Hero → Features -->
			<div class="relative h-24 -mb-1">
				<svg class="absolute bottom-0 w-full h-full" viewBox="0 0 1440 96" preserveAspectRatio="none" fill="none">
					<path d="M0 96L1440 96L1440 0C1440 0 1080 96 720 96C360 96 0 0 0 0L0 96Z" fill="white" fill-opacity="0.5" />
				</svg>
			</div>

			<!-- Features Section -->
			<section id="features" class="relative py-24 sm:py-32 scroll-mt-24">
				<!-- Section-specific accent -->
				<div class="absolute inset-0 -z-10 bg-white/50"></div>

				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="max-w-2xl mx-auto text-center mb-16">
						<p class="text-sm font-semibold tracking-widest text-orange-600 uppercase mb-3">Kenapa Kami?</p>
						<h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900">
							Worksheet Aktivitas yang Mengasyikkan
						</h2>
						<p class="mt-4 text-lg text-gray-600 leading-relaxed">
							Dirancang khusus untuk mendukung perkembangan anak dengan cara yang seru dan interaktif
						</p>
					</div>

					<div class="grid lg:grid-cols-2 gap-16 items-start">
						<!-- Feature blocks -->
						<div class="space-y-6">
							<div class="group p-6 rounded-2xl bg-white/70 backdrop-blur border border-sky-100/80 shadow-sm hover:shadow-lg transition-all duration-300">
								<div class="flex items-start gap-4">
									<div class="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-2xl">
										👶
									</div>
									<div>
										<h3 class="text-lg font-bold text-gray-900 mb-2">Usia 2-5 Tahun: Belajar Sambil Bermain</h3>
										<p class="text-gray-600 leading-relaxed mb-4">Worksheet interaktif yang meningkatkan motorik, kreativitas, dan kemampuan berpikir anak.</p>
										<ul class="space-y-2">
											<li class="flex items-center gap-3 text-sm text-gray-700">
												<svg class="w-4 h-4 text-sky-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
												<span>Motorik halus & koordinasi tangan-mata</span>
											</li>
											<li class="flex items-center gap-3 text-sm text-gray-700">
												<svg class="w-4 h-4 text-sky-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
												<span>Kreativitas & daya imajinasi</span>
											</li>
											<li class="flex items-center gap-3 text-sm text-gray-700">
												<svg class="w-4 h-4 text-sky-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
												<span>Kemampuan berpikir & problem-solving</span>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div class="group p-6 rounded-2xl bg-white/70 backdrop-blur border border-violet-100/80 shadow-sm hover:shadow-lg transition-all duration-300">
								<div class="flex items-start gap-4">
									<div class="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-2xl">
										💻
									</div>
									<div>
										<h3 class="text-lg font-bold text-gray-900 mb-2">Usia 5+ Tahun: Petualangan Coding</h3>
										<p class="text-gray-600 leading-relaxed mb-4">Kenalkan konsep coding sejak dini dengan cara yang mudah & menyenangkan!</p>
										<ul class="space-y-2">
											<li class="flex items-center gap-3 text-sm text-gray-700">
												<svg class="w-4 h-4 text-violet-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
												<span>Berpikir logis & computational thinking</span>
											</li>
											<li class="flex items-center gap-3 text-sm text-gray-700">
												<svg class="w-4 h-4 text-violet-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
												<span>Mengenal pola & algoritma sederhana</span>
											</li>
											<li class="flex items-center gap-3 text-sm text-gray-700">
												<svg class="w-4 h-4 text-violet-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
												<span>Keterampilan teknologi masa depan</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<!-- Feature highlights grid -->
						<div class="grid grid-cols-2 gap-4">
							<div class="p-5 rounded-2xl bg-white/80 backdrop-blur border border-gray-100/80 shadow-sm hover:shadow-md transition-shadow">
								<div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-lg mb-3">📲</div>
								<h4 class="font-bold text-gray-900 text-sm">Format Digital</h4>
								<p class="text-xs text-gray-500 mt-1 leading-relaxed">Bisa dicetak sepuasnya, akses kapan saja</p>
							</div>
							<div class="p-5 rounded-2xl bg-white/80 backdrop-blur border border-gray-100/80 shadow-sm hover:shadow-md transition-shadow">
								<div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-lg mb-3">😊</div>
								<h4 class="font-bold text-gray-900 text-sm">Sesuai Usia</h4>
								<p class="text-xs text-gray-500 mt-1 leading-relaxed">Materi ringan & menyenangkan</p>
							</div>
							<div class="p-5 rounded-2xl bg-white/80 backdrop-blur border border-gray-100/80 shadow-sm hover:shadow-md transition-shadow">
								<div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-lg mb-3">🎨</div>
								<h4 class="font-bold text-gray-900 text-sm">Desain Menarik</h4>
								<p class="text-xs text-gray-500 mt-1 leading-relaxed">Visual lucu bikin belajar seru</p>
							</div>
							<div class="p-5 rounded-2xl bg-white/80 backdrop-blur border border-gray-100/80 shadow-sm hover:shadow-md transition-shadow">
								<div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg mb-3">💻</div>
								<h4 class="font-bold text-gray-900 text-sm">Multi-Device</h4>
								<p class="text-xs text-gray-500 mt-1 leading-relaxed">HP, iPad, atau Tablet</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Curved divider: Features → Gallery -->
			<div class="relative h-24 -mb-1">
				<svg class="absolute bottom-0 w-full h-full" viewBox="0 0 1440 96" preserveAspectRatio="none" fill="none">
					<path d="M0 0L0 96L1440 96L1440 0C1200 80 960 96 720 80C480 64 240 16 0 0Z" class="fill-amber-50/60" />
				</svg>
			</div>

			<!-- Gallery Section -->
			<section id="gallery" class="relative py-24 sm:py-32 scroll-mt-24">
				<div class="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/60 via-orange-50/30 to-transparent"></div>

				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="max-w-2xl mx-auto text-center mb-16">
						<p class="text-sm font-semibold tracking-widest text-orange-600 uppercase mb-3">Galeri</p>
						<h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900">
							Anak-Anak Sedang Asyik Belajar
						</h2>
						<p class="mt-4 text-lg text-gray-600">
							Ribuan orang tua sudah mempercayai worksheet kami untuk perkembangan si kecil
						</p>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
						<div v-for="(item, i) in galleryItems" :key="i" class="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-[4/5] shadow-md hover:shadow-xl transition-shadow duration-300">
							<img :src="item.src" :alt="item.alt" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
							<div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
							<div class="absolute bottom-0 left-0 right-0 p-6">
								<p class="text-white font-semibold text-lg">{{ item.caption }}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Curved divider: Gallery → Products -->
			<div class="relative h-24 -mb-1">
				<svg class="absolute bottom-0 w-full h-full" viewBox="0 0 1440 96" preserveAspectRatio="none" fill="none">
					<path d="M0 96L1440 96L1440 0C1320 64 1080 96 840 80C600 64 360 16 0 0L0 96Z" class="fill-emerald-50/40" />
				</svg>
			</div>

			<!-- Products Section -->
			<section id="products" class="relative py-24 sm:py-32 scroll-mt-24">
				<div class="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/40 via-teal-50/20 to-transparent"></div>

				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="max-w-2xl mx-auto text-center mb-16">
						<p class="text-sm font-semibold tracking-widest text-orange-600 uppercase mb-3">Produk Kami</p>
						<h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900">
							Worksheet Terbaik untuk Si Kecil
						</h2>
						<p class="mt-4 text-lg text-gray-600">
							Pilih paket sesuai kebutuhan dan usia anak Anda
						</p>
					</div>

					<product-list />
				</div>
			</section>

			<!-- Curved divider: Products → Testimonials -->
			<div class="relative h-24 -mb-1">
				<svg class="absolute bottom-0 w-full h-full" viewBox="0 0 1440 96" preserveAspectRatio="none" fill="none">
					<path d="M0 0L0 96L1440 96L1440 0C1080 80 720 96 480 72C240 48 120 16 0 0Z" class="fill-violet-50/40" />
				</svg>
			</div>

			<!-- Testimonials Section -->
			<section id="testimonials" class="relative py-24 sm:py-32 scroll-mt-24">
				<div class="absolute inset-0 -z-10 bg-gradient-to-b from-violet-50/40 via-purple-50/20 to-transparent"></div>

				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="max-w-2xl mx-auto text-center mb-16">
						<p class="text-sm font-semibold tracking-widest text-orange-600 uppercase mb-3">Testimoni</p>
						<h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900">
							Apa Kata Orang Tua?
						</h2>
						<p class="mt-4 text-lg text-gray-600">
							Dengarkan pengalaman orang tua yang sudah merasakan manfaatnya
						</p>
					</div>

					<div class="grid md:grid-cols-3 gap-8">
						<div v-for="testimonial in testimonials" :key="testimonial.name" class="relative bg-white/80 backdrop-blur p-8 rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow duration-300">
							<svg class="absolute top-6 right-6 w-8 h-8 text-orange-100" fill="currentColor" viewBox="0 0 32 32">
								<path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
							</svg>

							<div class="flex items-center gap-1 mb-4">
								<svg v-for="n in 5" :key="n" class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
								</svg>
							</div>

							<p class="text-gray-700 leading-relaxed mb-6">"{{ testimonial.quote }}"</p>

							<div class="flex items-center gap-3 pt-4 border-t border-gray-100">
								<div class="w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm" :class="testimonial.avatarBg">
									{{ testimonial.name.charAt(0) }}
								</div>
								<div>
									<p class="font-semibold text-gray-900 text-sm">{{ testimonial.name }}</p>
									<p class="text-xs text-gray-500">{{ testimonial.role }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Final CTA -->
			<section class="py-24 sm:py-32">
				<div class="mx-auto max-w-4xl px-6 lg:px-8 text-center">
					<div class="rounded-3xl bg-gray-900 px-8 py-16 sm:px-16 sm:py-20 relative overflow-hidden">
						<!-- CTA decorative elements -->
						<div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-2xl"></div>
						<div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-2xl"></div>

						<div class="relative z-10">
							<h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">
								Siap Memberikan yang Terbaik untuk Si Kecil?
							</h2>
							<p class="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
								Investasi terbaik untuk masa depan anak dimulai dari sekarang. Worksheet edukatif yang menyenangkan menanti!
							</p>
							<a
								href="https://lynk.id/temanisikecil"
								target="_blank"
								class="inline-flex items-center gap-2 px-10 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
								Lihat Semua Produk
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>
import ProductList from '~/components/ProductList.vue'

const galleryItems = [
	{ src: '/assets/images/testimonials/testimonial_1.jpeg', alt: 'Anak sedang mengerjakan worksheet', caption: 'Belajar dengan gembira!' },
	{ src: '/assets/images/testimonials/testimonial_2.jpeg', alt: 'Hasil karya anak', caption: 'Kreativitas tanpa batas!' },
	{ src: '/assets/images/testimonials/testimonial_3.jpeg', alt: 'Anak fokus belajar', caption: 'Fokus & berkembang!' },
]

const testimonials = [
	{
		name: 'Sarah',
		role: 'Ibu dari Aisyah (4 tahun)',
		quote: 'Anak saya jadi lebih semangat belajar! Worksheet ini benar-benar membantu perkembangan motorik dan kreativitasnya. Highly recommended!',
		avatarBg: 'from-sky-400 to-blue-500',
	},
	{
		name: 'Dinda',
		role: 'Ibu dari Rafi (5 tahun)',
		quote: 'Worksheet dari Temanisikecil seru banget! Anak saya jadi bisa belajar sambil bermain tanpa bosan. Worth it banget!',
		avatarBg: 'from-violet-400 to-purple-500',
	},
	{
		name: 'Rina',
		role: 'Ibu dari Keenan (3 tahun)',
		quote: 'Bagus banget! Desainnya menarik, anak jadi lebih fokus dan menikmati setiap aktivitas di dalam worksheetnya. Sangat membantu!',
		avatarBg: 'from-emerald-400 to-green-500',
	},
]

const scrollTo = (id) => {
	const el = document.getElementById(id)
	if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
