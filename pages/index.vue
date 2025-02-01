<template>
<div>
	<main>

		<!-- Hero section -->
		<!-- <hero-section class="mt-20" /> -->

		<!-- Intro -->
		<div class="relative isolate">
			<svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
				<defs>
					<pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y="-1" class="overflow-visible fill-gray-50">
					<path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
				</svg>
				<rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
			</svg>
			<div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
				<div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
			</div>
			<div class="overflow-hidden">
				<div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
					<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
						<div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
							<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								temanisikecil
							</h1>
							<p class="mt-6 text-lg text-gray-600 sm:max-w-md lg:max-w-none">
								<span class="text-black font-bold">Ini lho cara seru biar anak gak cuma nonton terus!</span>
								<br>
								Dengan worksheet interaktif dari temanisikecil, anak bisa belajar sambil bermain, mengasah logika, dan mengenal coding dengan cara yang menyenangkan. Yuk, bantu si kecil eksplorasi dunia baru tanpa layar berlebih!
							</p>
						</div>
						<div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
							<div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
								<div class="relative">
									<img src="/assets/images/hero/hero_1.png" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
									<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
								<div class="relative">
									<img src="/assets/images/hero/hero_2.png" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
									<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div class="relative">
									<img src="/assets/images/hero/hero_3.png" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
									<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
								<div class="relative">
									<img src="/assets/images/hero/hero_4.png" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
									<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div class="relative">
									<img src="/assets/images/hero/hero_5.png" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
									<div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Vision -->
		<div class="overflow-hidden bg-white py-24 sm:py-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div class="lg:pr-8 lg:pt-4">
						<div class="lg:max-w-lg">
							<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Manfaat
							</p>
							<p class="mt-6 text-lg leading-8 text-gray-600">
								<b>temanisikecil</b> menghadirkan worksheet edukatif untuk anak-anak dengan aktivitas seru, latihan logika, dan pengenalan coding. Belajar jadi lebih menyenangkan & interaktif!
							</p>
							<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
								<div v-for="mission in missions" :key="mission.name" class="relative pl-9">
									<dt class="inline font-semibold text-gray-900">
										<component :is="mission.icon" class="absolute left-1 top-1 h-5 w-5 text-yellow-600" aria-hidden="true" />
										{{ mission.name }}
									</dt>
									{{ ' ' }}
									<dd class="inline">{{ mission.description }}</dd>
								</div>
							</dl>
						</div>
					</div>
					<img src="/assets/images/logos/logo.jpeg" alt="Product screenshot" class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 w-full md:-ml-4 lg:-ml-0" width="2432" height="1442" />
				</div>
			</div>
		</div>
	</main>
</div>
</template>

<script setup>
import { ref } from 'vue'

import { StarIcon } from '@heroicons/vue/20/solid'
import HeroSection from '~/components/home/HeroSection.vue';

const missions = [
  {
    name: 'Materi Edukatif & Menarik',
    description: 'Worksheet dirancang khusus untuk mengasah logika, kreativitas, dan keterampilan berpikir kritis anak.',
    icon: StarIcon,
  },
  {
    name: 'Beragam Aktivitas',
    description: 'Mulai dari aktivitas seru, latihan berpikir logis, hingga pengenalan coding yang menyenangkan.',
    icon: StarIcon,
  },
  {
    name: 'Format Praktis & Mudah Digunakan',
    description: 'Bisa langsung dicetak atau digunakan secara digital, cocok untuk belajar di rumah maupun di sekolah.',
    icon: StarIcon,
  },
  {
    name: 'Harga Terjangkau',
    description: 'Dapatkan materi berkualitas dengan harga yang ramah di kantong.',
    icon: StarIcon,
  },
  {
    name: 'Belajar Sambil Bermain',
    description: 'Anak-anak bisa belajar dengan cara yang menyenangkan tanpa merasa terbebani.',
    icon: StarIcon,
  },
]
</script>
