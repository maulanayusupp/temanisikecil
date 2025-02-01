<template>
	<Html>
			<!-- Head -->
			<Head>
					<Title>Worksheet Edukatif untuk Anak | Aktivitas & Coding</Title>
					<Meta name="description" :content="`temanisikecil adalah brand yang menghadirkan berbagai worksheet edukatif untuk anak-anak, mulai dari aktivitas kreatif, latihan logika, hingga pengenalan coding. Dengan desain yang menarik dan konten yang interaktif, temanisikecil membantu anak-anak belajar sambil bermain, mengembangkan keterampilan berpikir kritis, serta meningkatkan kreativitas mereka.`" />
					<!-- <Link rel="preload" href="/test.txt" as="script" /> -->
					<!-- <Style type="text/css" :children="styleString" /> -->
			</Head>

			<!-- Header -->
			<nav-header />

			<!-- Content -->
			<slot />

			<!-- Footer -->
			<the-footer />
	</Html>
</template>

<script>
definePageMeta({
  layout: "custom",
});

import NavHeader from '@/layouts/partials/NavHeader.vue'
import TheFooter from '@/layouts/partials/TheFooter.vue'

export default {
	components: {
		NavHeader,
		TheFooter,
	},
	setup() {
		return {
		}
	},
}
</script>

