<script lang="ts">
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import '$lib/index.scss';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	// export const prerender = true;

	onMount(() => onHydrated());
</script>

<!-- <MatrixRain> -->
<div class={`body contents ${$theme ? 'theme-dark' : 'theme-light'}`}>
	<NavMenu />
	<div class="content container"><slot /></div>
</div>

<!-- </MatrixRain> -->

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0px 0px;
	}

	.body {
		margin: 0px;
		// background-color: var(--main);
		//background: linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%);linear-gradient(90deg, hsla(252, 40%, 29%, 1) 0%, hsla(270, 77%, 71%, 1) 100%);
		background: linear-gradient(315deg, var(--main-start) 0%, var(--main-end) 100%);
		color: var(--main-text);
		font-family: var(--text-f);
		display: flex;
		flex-direction: column;
		transition-duration: 200ms;
		letter-spacing: 1px;
		min-height: 100vh;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>
