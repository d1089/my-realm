<script lang="ts">
	import type { Skill } from '$lib/types';
	import { base } from '$app/paths';
	import { SKILLS } from '$lib/params';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import { getAssetUrl } from '$lib/data/assets';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';

	const { items, title } = SKILLS;

	const result: Array<Skill> = items;
</script>

<div class="px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">
	<MainTitle>{title}</MainTitle>
</div>

{#if result.length === 0}
	<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
		<UIcon icon="i-carbon-cube" classes="text-3.5em" />
		<p class="font-300">Could not find anything...</p>
	</div>
{:else}
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each result as skill (skill.slug)}
			<Card
				classes={['cursor-pointer decoration-none']}
				tiltDegree={1}
				bgImg={getAssetUrl(skill.logo)}
			>
				<p class="text-[var(--tertiary-text)]">{skill.name}</p>
			</Card>
		{/each}
	</div>
{/if}
