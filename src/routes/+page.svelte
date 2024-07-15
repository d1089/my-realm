<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';

	import { Platform } from '$lib/types';

	import MY_SKILLS from '$lib/skills.params';

	import { HOME, getPlatfromIcon } from '$lib/params';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Carousel from '$lib/components/Carousel/Carousel.svelte';
	const { name, lastName, links, description, skills, quote, author } = HOME;
</script>

<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName},</MainTitle>
		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>

		<blockquote>
			<p>{quote}</p>
			<footer>{author}</footer>
		</blockquote>

		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${link.platform === Platform.Email ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>
	<Carousel items={skills ?? MY_SKILLS} />
</div>
