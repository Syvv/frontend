import { Company } from "../types/Companies";

const companies: Company[] = [
	{
		name: "HHNK",
		start: new Date("2024-01-01"),
		titleFunction: "DBA",
		jobs: [
			{
				title: "Junior Databasebeheerder",
				start: new Date("2024-01-01")
			},
		],
		iconUrl: "/hhnk.png",
	},
	{
		name: "Saysimple",
		start: new Date("2020-02-04"),
		end: new Date("2023-12-31"),
		titleFunction: "Fullstack developer",
		jobs: [
			{
				title: "Junior developer & SCRUM Master",
				start: new Date("2023-08-01"),
				end: new Date("2023-12-31"),
			},
			{
				title: "Junior developer",
				start: new Date("2021-02-01"),
				end: new Date("2023-07-31"),
			},
			{
				title: "Junior developer (part-time)",
				start: new Date("2020-07-01"),
				end: new Date("2021-01-31"),
			},
			{
				title: "Intern developer",
				start: new Date("2020-02-04"),
				end: new Date("2020-06-30"),
			},
		],
		iconUrl: "/saysimple.png",
	},
];

export function useExperience() {
	return {
		companies,
	};
}
