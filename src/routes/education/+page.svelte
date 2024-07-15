<script lang="ts">
	import Card from "$lib/components/Card/Card.svelte";
	import Chip from "$lib/components/Chip/Chip.svelte";
	import UIcon from "$lib/components/Icon/UIcon.svelte";
	import MainTitle from "$lib/components/MainTitle/MainTitle.svelte";
	import { getAssetUrl } from "$lib/data/assets";
	import { EDUCATION } from "$lib/params";
	import type { Education } from "$lib/types";
	import { getTimeDiff } from "$lib/utils/helpers";

    

    const {items,title} = EDUCATION

    let result: Array<Education> = [...items]
</script>
<div class="px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">
	<MainTitle>{title}</MainTitle>
</div>
<div class="col items-center relative mt-10 flex-1">
    <div class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded" />
    {#each result as education, index (education.slug)}
				<div
					class={`flex ${
						index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
					} relative items-center w-full my-[10px]`}
				>
					<div class="flex-1 hidden lg:flex" />
					<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
						<UIcon icon="i-carbon-condition-point" />
					</div>
					<div class="col flex-1 items-stretch">
						<Card>
							<div class="flex-1 col gap-2 items-stretch">
								<img
									src={getAssetUrl(education.logo)}
									alt={education.organization}
									height="50"
									width="50"
									class="mb-5"
								/>
								<div class="text-[1.3em]">{education.degree}</div>
								<div>{education.organization}</div>
								<div class="text-[var(--accent-text)] text-[0.9em] font-200 mb-2">
									{education.location} · {getTimeDiff(education.period.from, education.period.to)}
								</div>
								<div class="row flex-wrap gap-1">
									{#each education.subjects as subject}
										<Chip>{subject}</Chip>
									{/each}
								</div>
							</div>
						</Card>
					</div>
				</div>
			{/each}
    </div>
    