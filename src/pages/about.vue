<template>
	<div>
		<div>
			<p>{{ $t("about.intro") }}</p>
		</div>
		<div class="flex items-center flex-col">
			<p class="text-2xl my-2">{{ $t("about.experience.title") }}</p>
			<div v-for="company, index in companies">
				<CompanyExpand :company="company" :index="index" :count="companies.length" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useExperience } from "../composables/useExperience";
import CompanyExpand from "../components/companyExpand.vue";

const { companies } = useExperience();

const getImageUrl = (url: string) => {
	return new URL(url, import.meta.url).href;
};
</script>
