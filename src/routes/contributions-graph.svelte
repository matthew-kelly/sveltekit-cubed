<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { spring } from 'svelte/motion';

	let rows = 10;
	let depth = 10;
	let hue = Math.round(Math.random() * 360); // HSL -> H is a colour wheel

	let contributions = spring(getContributions());

	function refresh() {
		$contributions = getContributions();
		hue = Math.round(Math.random() * 360);
	}

	function getContributions() {
		return new Array(rows * depth).fill(0).map((value) => {
			return Math.ceil(Math.random() * 10);
		});
	}
</script>

<div class="controls">
	<button on:click={refresh}>Refresh</button>
</div>

<SC.Canvas antialias alpha>
	{#each $contributions as contribution, index}
		<SC.Mesh
			scale={[1, contribution, 1]}
			geometry={new THREE.BoxGeometry()}
			material={new THREE.MeshStandardMaterial({
				color: `hsl(${hue}, 50%, ${Math.round(contribution * 10)}%)`
			})}
			position={[Math.floor(index / rows), contribution / 2, index % rows]}
		/>
	{/each}
	<SC.PerspectiveCamera position={[0, 30, 45]} />
	<SC.OrbitControls enableZoom={true} />
	<SC.AmbientLight intensity={0.6} />
	<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />
</SC.Canvas>

<style>
	.controls {
		position: absolute;
		z-index: 10;
	}
</style>
