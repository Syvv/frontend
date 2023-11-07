<template>
	<div>
		<div
			class="flex flex-row amber-500-rounded-border w-96 cursor-pointer"
			@click="isExpanded = !isExpanded"
		>
			<img class="w-10" :src="getImageUrl(company.iconUrl)" alt="Image" />
			<p class="mt-1.5 ml-2 flex-1">
				{{ company.titleFunction }} @ {{ company.name }}
			</p>
			<div class="mr-1 mt-1.5">
				<p v-if="isExpanded">v</p>
				<p v-else>&lt;</p>
			</div>
		</div>
		<div
			v-if="isExpanded && company.jobs.length"
			class="amber-500-rounded-border w-96"
		>
			<div class="flex flex-col" v-for="job in company.jobs">
				<p>{{ job.title }}</p>
				<p>
					{{ job.start.toLocaleDateString() }} -
					{{ job.end ? job.end.toLocaleDateString() : $t("present") }}
					({{}})
				</p>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { getImageUrl } from "../utils/Images";
import { Company } from "../types/Companies";
import { PropType, ref } from "vue";
import { TimePassed } from "../utils/Dates";
import { useI18n } from "vue-i18n";

defineProps({
	company: {
		type: Object as PropType<Company>,
		required: true,
	},
});
const isExpanded = ref(false);

const convertTimePassedToString = (timePassed: TimePassed): string => {
	const i18n = useI18n();
	const entries = Object.entries(timePassed);
	return entries.map(([key, value]) => `${i18n.tc(key, value)}`).join(" ");
};
</script>
