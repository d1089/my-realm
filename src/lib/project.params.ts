import Assets from "./data/assets";
import { getSkills } from "./skills.params";
import type { Project } from "./types";


const MY_PROJECTS: Array<Project> = [
    {
        slug: 'my-portfolio',
		color: '',
		description:
			['This is My Portfolio Project, here i have a list of all my achivements and experiences.'],
		shortDescription:
			'This is My Portfolio Project, here i have a list of all my achivements and experiences.',
		links: [{ to: 'https://github.com/harsh07021999/Harshs-Portfolio', label: 'GitHub' }, { to: 'https://harshs-sktportfolio.netlify.app/', label: 'Netlify'}],
		logo: Assets.Svelte,
		name: 'My Portfolio',
		period: {
			from: new Date(2023,11,12)
		},
		skills: getSkills('svelte', 'ts', 'tailwind'),
		type: 'Portfolio Website'
    },
	{
		slug: 'comp-cart',
		color: '',
		description:
			['This is a Basic Computer Parts E-commerce website that was built using Django and HTML & CSS, Django Monolith'],
		shortDescription:
			'This is a Basic Computer Parts E-commerce website that was built using Django and HTML & CSS, Django Monolith',
		links: [{ to: 'https://github.com/harsh07021999/Comp_Cart', label: 'GitHub' }],
		logo: Assets.Compcart,
		name: 'Comp Cart',
		period: {
			from: new Date(2020,5,12)
		},
		skills: getSkills('django'),
		type: 'E-commerce Website'
	},
	{
		slug: 'Logger',
		color: '',
		description:
			['This is a Log Monitor Project where it any updates in the log directory and sends the change as message via kafka to client side that could furthur be used.'],
		shortDescription:
			'This is a Log Monitor Project where it any updates in the log directory and sends the change as message via kafka to client side that could furthur be used',
		links: [{ to: 'https://github.com/harsh07021999/Logger', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Logger',
		period: {
			from: new Date(2022,7,12)
		},
		skills: getSkills('python','kafka'),
		type: 'Logger'


	}
]

export default MY_PROJECTS