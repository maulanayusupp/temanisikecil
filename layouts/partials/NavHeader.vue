<template>
	<div class="bg-transparent">
		<header class="fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
			<nav
				class="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 lg:px-6"
				:class="isScrolled ? 'border-gray-200/60 bg-white/90 shadow-lg backdrop-blur' : 'border-orange-200/30 bg-white/70 shadow-sm backdrop-blur'"
				aria-label="Global">
				<div class="flex lg:flex-1">
					<a href="/" class="-m-1.5 rounded-xl p-1.5 transition-transform duration-300 hover:scale-[1.02]">
						<span class="sr-only">temanisikecil</span>
						<img class="h-12 rounded-lg w-auto" src="/assets/images/logos/landscape_logo.png" alt="" />
					</a>
				</div>
				<div class="flex lg:hidden">
					<button type="button" class="inline-flex items-center justify-center rounded-xl p-2 text-gray-700 ring-1 ring-gray-900/10 transition hover:bg-gray-50" @click="mobileMenuOpen = true">
						<span class="sr-only">Open main menu</span>
						<Bars3Icon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div class="hidden lg:flex lg:gap-x-2">
					<a
						v-for="item in navigation"
						:key="item.name"
						:href="item.href"
						class="group relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-transparent transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-900 hover:shadow-md hover:ring-orange-200/70"
						@click="onNavClick(item, $event)">
						<span class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
							<span class="absolute inset-0 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-100"></span>
							<span class="absolute inset-0" style="box-shadow: inset 0 0 0 1px rgba(249, 115, 22, 0.15);"></span>
						</span>
						<span class="relative z-10">
							{{ item.name }}
							<span class="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-4/5"></span>
						</span>
					</a>
				</div>
				<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				</div>
			</nav>
			<Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
				<div class="fixed inset-0 z-50" />
				<DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div class="flex items-center justify-between">
						<a href="#" class="-m-1.5 rounded-xl p-1.5">
							<span class="sr-only">Your Company</span>
							<img class="h-10 rounded-lg w-auto" src="/assets/images/logos/landscape_logo.png" alt="" />
						</a>
						<button type="button" class="rounded-xl p-2 text-gray-700 ring-1 ring-gray-900/10 transition hover:bg-gray-50" @click="mobileMenuOpen = false">
							<span class="sr-only">Close menu</span>
							<XMarkIcon class="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-gray-500/10">
							<div class="space-y-2 py-6">
								<a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-gray-900 transition hover:bg-orange-50 hover:text-orange-900" @click="onNavClick(item, $event)">
									{{ item.name }}
								</a>
							</div>

							<div class="py-6 hidden">
								<a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
	{ name: 'Home', href: '#home' },
	{ name: 'Fitur', href: '#features' },
	{ name: 'Galeri', href: '#gallery' },
	{ name: 'Produk', href: '#products' },
	{ name: 'Testimoni', href: '#testimonials' },
	// { name: 'Home', href: '/' },
	// { name: 'Aturan', href: '/rules' },
	// { name: 'Daftar Member', href: '/register' },
	// { name: 'Tentang Kami', href: '/about' },
	// { name: 'Products', href: '#' },
]

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const onScroll = () => {
	isScrolled.value = window.scrollY > 10
}

onMounted(() => {
	onScroll()
	window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
	window.removeEventListener('scroll', onScroll)
})

const onNavClick = (item, event) => {
	if (!item?.href) return

	const href = String(item.href)
	if (!href.startsWith('#')) return

	event?.preventDefault?.()
	const targetId = href.slice(1)
	const el = document.getElementById(targetId)
	if (!el) return

	mobileMenuOpen.value = false
	el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
