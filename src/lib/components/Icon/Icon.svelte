<script lang="ts">
	import { Icons } from '$lib/utils';
	import { viewBox } from './Icon';

	let el: SVGElement;

	export let size = '30px';
	export let color = 'var(--main-text)';

	export let icon: Icons;
</script>

<svg
	bind:this={el}
	class="inline-block"
	viewBox={viewBox(icon)}
	fill={color}
	height={size}
	width={size}
	xmlns="http://www.w3.org/2000/svg"
>
	<path d={icon} />
</svg>
<!-- {/if} -->
