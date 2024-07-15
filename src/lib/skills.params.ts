import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';
import cpp from './md/cpp.md?raw';
import ts from './md/ts.md?raw';
import java from './md/java.md?raw';
import js from './md/js.md?raw';
import react from './md/react.md?raw';
import python from './md/python.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'java',
		color: 'white',
		description: java,
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'spring-boot',
		color: 'green',
		description: 'Spring Boot',
		logo: Assets.SpringBoot,
		name: 'Spring Boot'
	}),
	s({
		slug: 'cpp',
		color: 'blue',
		description: cpp,
		logo: Assets.Cpp,
		name: 'CPP'
	}),
	s({
		slug: 'python',
		color: 'yellow',
		description: python,
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'js',
		color: 'yellow',
		description: js,
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description: ts,
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'golang',
		color: 'blue',
		description: 'golang',
		logo: Assets.Go,
		name: 'Golang'
	}),
	s({
		slug: 'fastAPI',
		color: 'blue',
		description: 'fastAPI',
		logo: Assets.FastApi,
		name: 'FastAPI'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description: react,
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'selenium',
		color: 'orange',
		description: 'selenium',
		logo: Assets.Selenium,
		name: 'Selenium'
	}),
	s({
		slug: 'azure',
		color: 'blue',
		description: 'azure',
		logo: Assets.Azure,
		name: 'Azure'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
