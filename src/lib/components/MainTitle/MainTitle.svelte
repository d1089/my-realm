<script lang="ts">
	export let classes = '';
</script>

<h3
	class={`font-[var(--title-f)] font-black tracking-[4px] text-left text-2em sm:text-[2.5em] md:text-[3em] lg:text-[3em] ${classes}`}
>
	<slot />
</h3>
