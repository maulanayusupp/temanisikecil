<template>
	<Html>
			<!-- Head -->
			<Head>
					<Title>Worksheet Edukatif untuk Anak | Aktivitas & Coding</Title>
					<!-- <Link rel="preload" href="/test.txt" as="script" /> -->
					<!-- <Style type="text/css" :children="styleString" /> -->

					<!-- Open Graph Meta Tags -->
					<Meta property="og:title" content="Worksheet Edukatif untuk Anak | Aktivitas & Coding" />
					<Meta property="og:description" content="Temanisikecil membantu anak-anak belajar sambil bermain, mengembangkan keterampilan berpikir kritis, serta meningkatkan kreativitas mereka." />
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

