<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { spring } from 'svelte/motion';

	let width = 1;
	let height = 1;
	let depth = 1;

	let spin = 0;
	let spinSpeed = 0.01;
	// SC.onFrame(() => {
	// 	spin += spinSpeed;
	// });

	let isActive = false;
	let xPos = spring(0);
	$: $xPos = isActive ? 1 : 0;
</script>

<svelte:window on:click={() => (isActive = !isActive)} />

<div class="controls">
	<label>
		Width:
		<input type="range" step={0.1} min={0.1} max={3} bind:value={width} />
	</label>
	<label>
		Height:
		<input type="range" step={0.1} min={0.1} max={3} bind:value={height} />
	</label>
	<label>
		Depth:
		<input type="range" step={0.1} min={0.1} max={3} bind:value={depth} />
	</label>
	<label>
		Spin Speed:
		<input type="range" step={0.005} min={0.001} max={0.1} bind:value={spinSpeed} />
	</label>
</div>

<SC.Canvas antialias background={new THREE.Color('papayawhip')}>
	<SC.Mesh
		position={[$xPos, 0, 0]}
		rotation={[0, spin, 0]}
		scale={[width, height, depth]}
		geometry={new THREE.BoxGeometry()}
		material={new THREE.MeshStandardMaterial({ color: 0xff3e00 })}
	/>
	<SC.PerspectiveCamera position={[2, 2, 3]} />
	<SC.OrbitControls enableZoom={true} />
	<SC.AmbientLight intensity={0.6} />
	<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />
</SC.Canvas>

<style>
	.controls {
		position: absolute;
		z-index: 10;
	}
	label {
		display: block;
	}
</style>
