<script>
	import * as SC from 'svelte-cubed';
	import * as THREE from 'three';
	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
	// import logo from '../../static/Svelte_Logo.svg?raw';

	// const svgLogo = new SVGLoader().parse(logo);
	const svgPathColours = [0xff3e00, 0xffffff, 0xff3e00];

	let svgPaths = [];
	const loader = new SVGLoader();
	loader.load('/logo.svg', (data) => {
		data.paths.forEach((path) => {
			svgPaths = [...svgPaths, path];
		});
	});

	let x = 0;
	let y = Math.PI;
	let z = Math.PI;
</script>

<SC.Canvas antialias alpha background={new THREE.Color('papayawhip')}>
	<SC.Group scale={0.05} rotation={[x, y, z]} position={[-5, 5, 5]}>
		<!-- {#each svgLogo.paths as logoPath, index}
			<SC.Mesh
				geometry={new THREE.ExtrudeGeometry(logoPath.toShapes(false), {
					depth: 40
				})}
				material={new THREE.MeshBasicMaterial({
					color: svgPathColours[index]
					// opacity: index === 1 ? 0 : 1
				})}
			/>
		{/each} -->

		{#if svgPaths.length}
			{#each svgPaths as path, index}
				<SC.Mesh
					geometry={new THREE.ExtrudeBufferGeometry(path.toShapes(false), {
						depth: 40
					})}
					material={new THREE.MeshBasicMaterial({
						color: path.color
					})}
				/>
			{/each}
		{/if}
	</SC.Group>
	<SC.PerspectiveCamera position={[10, 1, 30]} />
	<SC.OrbitControls />
</SC.Canvas>

<div class="controls">
	<input type="range" bind:value={x} min={0} max={5} step={0.01} />
	{x}
	<input type="range" bind:value={y} min={0} max={5} step={Math.PI / 4} />
	{y}
	<input type="range" bind:value={z} min={0} max={5} step={0.01} />
	{z}
</div>

<style>
	.controls {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}
</style>
