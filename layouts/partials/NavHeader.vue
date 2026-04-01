<template>
	<div class="bg-transparent">
		<header class="fixed inset-x-0 top-0 z-50 px-3 sm:px-5">
			<nav
				class="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-2 py-1.5 transition-all duration-500 ring-1"
				:class="isScrolled
					? 'bg-white/80 shadow-lg shadow-gray-900/5 backdrop-blur-xl ring-gray-900/5'
					: 'bg-white/50 backdrop-blur-md ring-white/20'"
				aria-label="Global">

				<!-- Logo -->
				<a href="/" class="flex-shrink-0 pl-2">
					<span class="sr-only">temanisikecil</span>
					<img class="h-9 rounded-lg w-auto" src="/assets/images/logos/landscape_logo.png" alt="Temanisikecil" />
				</a>

				<!-- Desktop nav links (pill container) -->
				<div class="hidden lg:flex items-center">
					<div class="relative flex items-center bg-gray-100/60 rounded-full p-1">
						<!-- Sliding active indicator -->
						<div
							ref="indicatorRef"
							class="absolute h-[calc(100%-8px)] rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 ease-out"
							:style="indicatorStyle">
						</div>
						<a
							v-for="(item, index) in navigation"
							:key="item.name"
							:ref="el => setNavRef(el, index)"
							:href="item.href"
							class="relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 whitespace-nowrap"
							:class="activeSection === item.href.slice(1)
								? 'text-gray-900'
								: 'text-gray-500 hover:text-gray-800'"
							@click="onNavClick(item, $event)">
							{{ item.name }}
						</a>
					</div>
				</div>

				<!-- Right side: CTA + mobile burger -->
				<div class="flex items-center gap-2">
					<a
						href="https://lynk.id/temanisikecil"
						target="_blank"
						class="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30">
						Belanja
						<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
					</a>
					<button
						type="button"
						class="lg:hidden inline-flex items-center justify-center rounded-full w-9 h-9 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
						@click="mobileMenuOpen = true">
						<span class="sr-only">Open main menu</span>
						<Bars3Icon class="h-5 w-5" aria-hidden="true" />
					</button>
				</div>
			</nav>

			<!-- Mobile menu -->
			<Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
				<div class="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity" />
				<DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto sm:max-w-sm">
					<div class="flex h-full flex-col bg-white/95 backdrop-blur-xl shadow-2xl">
						<!-- Mobile header -->
						<div class="flex items-center justify-between px-6 py-5 border-b border-gray-100">
							<a href="/" class="flex-shrink-0">
								<img class="h-8 rounded-lg w-auto" src="/assets/images/logos/landscape_logo.png" alt="Temanisikecil" />
							</a>
							<button
								type="button"
								class="rounded-full w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
								@click="mobileMenuOpen = false">
								<XMarkIcon class="h-5 w-5" aria-hidden="true" />
							</button>
						</div>

						<!-- Mobile nav links -->
						<div class="flex-1 px-4 py-6">
							<div class="space-y-1">
								<a
									v-for="item in navigation"
									:key="item.name"
									:href="item.href"
									class="flex items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all duration-200"
									:class="activeSection === item.href.slice(1)
										? 'text-orange-700 bg-gradient-to-r from-orange-50 to-amber-50/50'
										: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'"
									@click="onNavClick(item, $event)">
									<span
										class="w-1.5 h-1.5 rounded-full transition-all duration-200"
										:class="activeSection === item.href.slice(1) ? 'bg-orange-500 scale-100' : 'bg-transparent scale-0'">
									</span>
									{{ item.name }}
								</a>
							</div>
						</div>

						<!-- Mobile footer CTA -->
						<div class="px-4 py-5 border-t border-gray-100 bg-gray-50/50">
							<a
								href="https://lynk.id/temanisikecil"
								target="_blank"
								class="flex items-center justify-center gap-2 w-full px-4 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/20">
								Lihat Produk
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
							</a>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch, nextTick } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
	{ name: 'Home', href: '#home' },
	{ name: 'Fitur', href: '#features' },
	{ name: 'Galeri', href: '#gallery' },
	{ name: 'Produk', href: '#products' },
	{ name: 'Testimoni', href: '#testimonials' },
]

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')

const sectionIds = navigation.map(n => n.href.slice(1))

// Sliding pill indicator
const navRefs = ref([])
const indicatorStyle = ref({ left: '4px', width: '0px' })

const setNavRef = (el, index) => {
	if (el) navRefs.value[index] = el
}

const updateIndicator = () => {
	const activeIndex = sectionIds.indexOf(activeSection.value)
	const el = navRefs.value[activeIndex]
	if (!el) return
	indicatorStyle.value = {
		left: `${el.offsetLeft}px`,
		width: `${el.offsetWidth}px`,
	}
}

watch(activeSection, () => {
	nextTick(updateIndicator)
})

const updateActiveSection = () => {
	const offset = 120
	for (let i = sectionIds.length - 1; i >= 0; i--) {
		const el = document.getElementById(sectionIds[i])
		if (el && el.getBoundingClientRect().top <= offset) {
			activeSection.value = sectionIds[i]
			return
		}
	}
	activeSection.value = sectionIds[0]
}

const onScroll = () => {
	isScrolled.value = window.scrollY > 10
	updateActiveSection()
}

onMounted(() => {
	onScroll()
	nextTick(updateIndicator)
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

	activeSection.value = targetId
	mobileMenuOpen.value = false
	el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
