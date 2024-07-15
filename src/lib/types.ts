export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube'
}

export interface HomeLink {
	platform: Platform;
	link: string;
}

export interface PageParams {
	title: string;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface Project extends Item {
	links: Array<Link>;
	color: string;
	period: {
		from: Date;
		to?: Date;
	};
	type: string;
	skills: Array<Skill>;
}

export type Asset = string | { light: string; dark: string };

export interface Item {
	slug: string;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: Array<string>;
	screenshots?: Array<{ src: string; label: string }>;
}

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export interface Experience extends Project {
	company: string;
	location: string;
	contract: ContractType;
}

export interface Education extends Item {
	organization: string;
	location: string;
	period: {
		from: Date;
		to?: Date;
	};
	subjects: Array<string>;
	degree: string;
}

export interface Skill extends Omit<Item, 'shortDescription'> {
	color: string;
}

export interface HomePageParams extends PageParams {
	name: string;
	lastName: string;
	description: string;
	quote:string;
	author:string;
	links: Array<HomeLink>;
	skills?: Array<Skill>;
}

export interface PageWithSearchParams<T> extends PageParams {
	items: Array<T>;
}

export type SkillPageParams = PageWithSearchParams<Skill>

export type ProjectPageParams = PageWithSearchParams<Project>;

export type ExperiencePageParams = PageWithSearchParams<Experience>;

export type EducationPageParams = PageWithSearchParams<Education>;

export interface ResumePageParams extends PageParams {
	item: string;
}
