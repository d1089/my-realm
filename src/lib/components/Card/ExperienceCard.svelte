<script lang="ts">
  import type { Experience } from "$lib/types";
  import { getMonthName, getTimeDiff } from "$lib/utils/helpers";
  import Card from "./Card.svelte";
  import ChipIcon from "../Chip/ChipIcon.svelte";
  import { getAssetUrl } from "$lib/data/assets";
  import { base } from "$app/paths";
  import UIcon from "../Icon/UIcon.svelte";

  export let experience: Experience;

  const months = getTimeDiff(experience.period.from, experience.period.to);

  const from = `${getMonthName(
    experience.period.from.getMonth() - 1
  )} ${experience.period.from.getFullYear()}`;
  const to = experience.period.to
    ? `${getMonthName(
        experience.period.to.getMonth() - 1
      )} ${experience.period.to.getFullYear()}`
    : "Present";

  const period = `${from} - ${to}`;
  // console.log(period, from, to, months);
</script>

<Card margin="0px 0px 20px 0px" tiltDegree={2}>
  <!-- href={`${base}/experience/${experience.slug}`} -->
  <div class="col md:flex-row items-start gap-5 md:gap-1">
    <img
      class={`rounded-15 aspect-square`}
      src={getAssetUrl(experience.logo)}
      alt={experience.company}
      height={75}
      width={75}
    />
    <div class="col ml-0 md:ml-[20px] gap-3 w-full">
      <h3
        class="flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"
      >
        <h3 class="font-[var(--title-f)] text-1.25em">{experience.name}</h3>
      </h3>
      <div class="row flex-wrap m-b-2 gap-1 text-0.9em font-300">
        <ChipIcon name={`Company: ${experience.company}`}>
          <UIcon icon="i-carbon-building" />
        </ChipIcon>
        <ChipIcon name={`Location: ${experience.location}`}>
          <UIcon icon="i-carbon-location" />
        </ChipIcon>
        <ChipIcon name={`Contract: ${experience.contract}`}>
          <UIcon icon="i-carbon-hourglass" />
        </ChipIcon>
      </div>
      <div class="text-[var(--accent-text)] text-[0.9em] font-200">
        {period}
      </div>
      <div class="experience-description">
        {#each experience.description as val}
          <p>{val}</p>
        {/each}
      </div>

      <div class="flex flex-row flex-wrap mt-5">
        {#each experience.skills as skill}
          <ChipIcon
            logo={getAssetUrl(skill.logo)}
            name={skill.name}
            href={`${base}/skills/${skill.slug}`}
          />
        {/each}
      </div>
    </div>
  </div>
</Card>
