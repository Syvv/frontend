<template>
	<div>
		<div
			class="flex flex-row w-128 cursor-pointer p-0"
			@click="isExpanded = !isExpanded"
		>
			<img class="w-14" :src="getImageUrl(getTimelineImageURL('company'))" alt="Image" />
			<img class="mt-1 w-12 h-12" :src="getImageUrl(company.iconUrl)" alt="Image" />
			<span class="mb-1 ml-2 flex-1 flex-col">
				<p class="mt-1">
				{{ company.titleFunction }} @ {{ company.name }}
				</p>
				<p class="text-xs italic">
					{{ company.start.toLocaleDateString() }} -
					{{ company.end ? company.end.toLocaleDateString() : $t("present") }}
					({{ convertTimePassedToString(timePassed(company.start, company.end ?? new Date())) }})
				</p>
			</span>
			
			<div class="mr-1 mt-1.5">
				<p v-if="isExpanded">v</p>
				<p v-else>&lt;</p>
			</div>
		</div>
		<div
			v-if="isExpanded && company.jobs.length"
			class="w-128"
		>
			<div class="flex flex-row" v-for="job, index in company.jobs">
				<img class="w-14 h-14" :src="getImageUrl(getTimelineImageURL('job', index, company.jobs.length))" alt="Image" />
				<span class="flex flex-col mt-2 ml-7">
				<p>{{ job.title }}</p>
				<p class="text-xs italic">
					{{ job.start.toLocaleDateString() }} -
					{{ job.end ? job.end.toLocaleDateString() : $t("present") }}
					({{ convertTimePassedToString(timePassed(job.start, job.end ?? new Date())) }})
				</p>
				</span>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { getImageUrl } from "../utils/Images";
import { Company } from "../types/Companies";
import { PropType, ref } from "vue";
import { timePassed, TimePassed } from "../utils/Dates";
import { useI18n } from "vue-i18n";

const props = defineProps({
	company: {
		type: Object as PropType<Company>,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
	count: {
		type: Number,
		required: true,
	}
});
const isExpanded = ref(false);

const getTimelineImageURL = (type: "company" | "job", localindex?: number, localcount?: number): string => {
	let path = "../assets/timeline/";
	switch (type) {
		case "company":
			path += "major/"
			path += props.index === 0 ? "start.png" : ((props.index === props.count - 1 && !isExpanded.value) ? "end.png" : "middle.png")
			break;
		case "job":
			localcount = localcount ?? props.count;
			localindex = localindex ?? props.index;
			path += "minor/"
			path += localindex === localcount - 1 && props.index === props.count - 1 ? "end.png" : "middle.png"
			break;
	}
	return path;
}

const convertTimePassedToString = (timePassed: TimePassed): string => {
	const i18n = useI18n();
	const entries = Object.entries(timePassed);

	return entries.reduce((list, [key, value]) => {
		if (value != 0) {
			list.push(`${i18n.t("general." + key, value)}`)
		}
		return list;
	}, [] as string[]).join(", ");
};
</script>
