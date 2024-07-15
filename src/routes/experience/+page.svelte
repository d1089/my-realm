<script lang="ts">
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { EXPERIENCES } from '$lib/params';
	import type { Experience } from '$lib/types';
    import ExperienceCard from '$lib/components/Card/ExperienceCard.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';

    const {items, title} = EXPERIENCES;
    let result: Array<Experience> = [...items]

</script>

<div class="px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">
	<MainTitle>{title}</MainTitle>
</div>
<div class="col items-center relative mt-10 flex-1">
<div class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded" />
{#each result as job, index (job.slug)}
	<div
		class={`flex ${
			index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
		} relative items-center w-full my-[10px]`}
	>
		<div class="flex-1 hidden lg:flex" />
		<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
			<UIcon icon="i-carbon-condition-point" classes="" />
		</div>
		<div class="flex-1 col items-stretch">
			<ExperienceCard experience={job} />
		</div>
	</div>
{/each}
</div>
