import { Company } from "../types/Companies";

const companies: Company[] = [
	{
		name: "Saysimple",
		start: new Date("2020-02-04"),
		titleFunction: "Fullstack developer",
		functions: [],
		iconUrl: "../assets/saysimple.png",
	},
];

export function useExperience() {
	return {
		companies,
	};
}
