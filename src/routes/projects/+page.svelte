<script lang="ts">
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import { PROJECTS } from '$lib/params';
	import type { Project } from '$lib/types';


    const { items, title } = PROJECTS;

    let displayed: Array<Project> = [];

    displayed = items
</script>
<div class="px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">
	<MainTitle>{title}</MainTitle>
</div>
{#if displayed.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="projects-list mt-5">
			{#each displayed as project}
				<ProjectCard {project} />
			{/each}
		</div>
	{/if}

<style lang="scss">
	.projects-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>