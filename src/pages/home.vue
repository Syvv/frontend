<template>
	<div>
		{{ $t("home.intro") }}
		<VueParliamentChart></VueParliamentChart>
	</div>
</template>
<script setup lang="ts">
import { VueParliamentChart } from "vue-parliament-chart";
</script>
