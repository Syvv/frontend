import { Company } from "../types/Companies";

const companies: Company[] = [
	{
		name: "Saysimple",
		start: new Date("2020-02-04"),
		titleFunction: "Fullstack developer",
		jobs: [
			{
				title: "Intern developer",
				start: new Date("2020-02-04"),
				end: new Date("2020-06-30")
			}
		],
		iconUrl: "../assets/saysimple.png",
	},
];

export function useExperience() {
	return {
		companies,
	};
}
