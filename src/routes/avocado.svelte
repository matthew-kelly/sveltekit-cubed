<script>
	import { fly } from 'svelte/transition';
	import Avocado from '$lib/Avocado.svelte';

	let isShowing = false;

	function hitButton() {
		isShowing = true;
		setTimeout(() => {
			isShowing = false;
		}, 40);
	}
</script>

<header>
	<h1>Avocado</h1>
</header>

<div style:position="relative">
	{#if isShowing}
		<div class="avocado" out:fly={{ opacity: 0, y: -100, duration: 1000 }}>
			<Avocado />
		</div>
	{/if}
	<button on:click={hitButton}>Avocado</button>
</div>

<style>
	header {
		display: flex;
		margin-bottom: 60px;
	}

	.avocado {
		position: absolute;
		top: -30px;
		z-index: -1;
	}
</style>
