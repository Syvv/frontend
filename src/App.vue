<template>
	<nav class="h-12 bg-yellow-600 flex w-full">
		<div class="flex justify-center items-center grow">
			<router-link class="navbtn" to="/">{{
				$t("routes.home")
			}}</router-link>
			<router-link class="navbtn" to="/about">{{
				$t("routes.about")
			}}</router-link>
			<router-link class="navbtn" to="/contact">{{
				$t("routes.contact")
			}}</router-link>
		</div>
		<div class="w-8">
			<img
				class="w-6"
				@click="i18n.locale.value = 'nl'"
				src="./assets/nl.svg"
			/>
			<img
				class="w-6"
				@click="i18n.locale.value = 'en'"
				src="./assets/uk.svg"
			/>
		</div>
	</nav>

	<main>
		<router-view />
	</main>
</template>
<script setup lang="ts">
// @ts-ignore
import { useI18n } from "vue-i18n";

const i18n = useI18n();
</script>
