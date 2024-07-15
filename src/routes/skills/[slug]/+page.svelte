<script lang="ts">
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import { SKILLS } from '$lib/params';
	import type { Skill } from '$lib/types';
	import { getAssetUrl } from '$lib/data/assets';
	// import { base } from '$app/paths';

	export let data: { skill?: Skill };

	const { title } = SKILLS;
	$: computedTitle = data.skill ? `${data.skill.name} - ${title}` : title;
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.skill === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-software-resource-cluster" classes="text-3.5em" />
			<p class="font-300">Could not load skill data LOL.</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetUrl(data.skill.logo)}>
				<MainTitle>{data.skill.name}</MainTitle>
			</Banner>
			<!-- <div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.skill.description}
						<Markdown content={data.skill.description ?? 'This place is yet to be filled...'} />
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description</p>
						</div>
					{/if}
				</div>
			</div> -->
			<div class="self-stretch mb-2" />
		</div>
	{/if}
</div>
