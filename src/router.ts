import { createRouter, createWebHistory } from "vue-router";
import home from "./pages/home.vue";
import about from "./pages/about.vue";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: home,
		},
		{
			path: "/about",
			component: about,
		},
	],
});
