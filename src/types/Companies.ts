export type Company = {
	name: string;
	start: Date;
	end?: Date;
	iconUrl: string;
	titleFunction: string;
	jobs: Job[];
};

export type Job = {
	start: Date;
	end?: Date;
	title: string;
	description?: string;
};
