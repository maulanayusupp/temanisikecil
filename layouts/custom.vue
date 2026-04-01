<template>
	<Html lang="id">
			<!-- Head -->
			<Head>
					<Title>Temanisikecil - Worksheet Edukatif untuk Anak | Aktivitas & Coding</Title>
					<Meta name="description" content="Temanisikecil menyediakan worksheet edukatif untuk anak usia 2-5 tahun dan worksheet coding untuk usia 5+. Belajar sambil bermain, asah motorik, kreativitas & logika anak." />
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
import NavHeader from '@/layouts/partials/NavHeader.vue'
import TheFooter from '@/layouts/partials/TheFooter.vue'

export default {
	components: {
		NavHeader,
		TheFooter,
	},
}
</script>

