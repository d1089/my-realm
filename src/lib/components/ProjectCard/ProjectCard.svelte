<script lang="ts">
	import { countMonths, getMonthName, getTimeDiff } from '$lib/utils/helpers';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import type { Project } from '$lib/types';
	import { getAssetUrl } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	export let project: Project;
	$: months = countMonths(project.period.from, project.period.to);
	// $: period = `${months} month${months > 1 ? 's' : ''}`;
	$: period = `${getTimeDiff(
		project.period.from,
		project.period.to ?? new Date(Date.now() + 1000 * 60 * 60 * 24)
	)}`;
	$: from = `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`;
	$: to = project.period.to
		? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
		: 'now';
</script>

<Card >
	<!-- href={`${base}/projects/${project.slug}`} -->
	<img
		class={`rounded-15px aspect-square`}
		height={40}
		width={40}
		alt={project.name}
		src={getAssetUrl(project.logo)}
	/>
	<div class="m-t-20px row justify-between items-center">
		<h3 class="font-[var(--title-f)] text-1.25em">{project.name}</h3>
		<div class="row">
			{#each project.links as link}
				<a
					class="card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit"
					href={link.to}
					title={link.label}
					target="_blank"
					rel="noreferrer"
					data-help={link.label}
				>
					<UIcon icon="i-carbon-link" classes="text-[var(--secondary-text)]" />
				</a>
			{/each}
		</div>
	</div>
	<div class="bg-[var(--border)] h-1px m-y-10px" />
	<div
		class="row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"
	>
		<p>{project.type}</p>
		<p>{period}</p>
	</div>
	<p class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1">
		{project.shortDescription}
	</p>
	<div class="row justify-between text-0.8em font-400">
		<Chip>{from}</Chip>
		{#if from !== to}
			<Chip>{to}</Chip>
		{/if}
	</div>
	<div class="bg-[var(--border)] h-1px m-y-10px" />
	<div class="row">
		{#each project.skills as tech}
			<ChipIcon
				logo={getAssetUrl(tech.logo)}
				name={tech.name}
				href={`${base}/skills/${tech.slug}`}
			/>
		{/each}
	</div>
</Card>
