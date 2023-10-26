<template>
    <div>
        <div>
            <p>{{ $t("about.intro") }}</p>
        </div>
        <div>
            <p class="text-2xl">{{ $t("about.experience.title") }}</p>
            <div v-for="company in companies">
                <div class="flex flex-row"><img class="w-10" :src="getImageUrl(company.iconUrl)" alt="Image"/><p class="mt-1.5 ml-2">{{ company.titleFunction }} @ {{ company.name }}</p></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useExperience } from "../composables/useExperience";

    const { companies } = useExperience();

    const getImageUrl = (url: string) => {
        return new URL(url, import.meta.url).href;
    }
</script>