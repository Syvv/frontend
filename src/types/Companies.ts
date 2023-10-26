export type Company = {
    name: string;
    start: Date;
    end?: Date;
    iconUrl: string;
    titleFunction: string;
    functions: Function[];
}

export type Function = {
    start: Date;
    end?: Date;
    title: string;
    description?: string;
}