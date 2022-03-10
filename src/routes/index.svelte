<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';

	let width = 1;
	let height = 1;
	let depth = 1;
</script>

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
</div>

<SC.Canvas antialias background={new THREE.Color('papayawhip')}>
	<SC.Mesh
		scale={[width, height, depth]}
		geometry={new THREE.BoxGeometry()}
		material={new THREE.MeshStandardMaterial({ color: 0xff3e00 })}
	/>
	<SC.PerspectiveCamera position={[2, 2, 3]} />
	<SC.OrbitControls enableZoom={false} />
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
