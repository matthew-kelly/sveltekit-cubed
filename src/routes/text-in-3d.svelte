<script>
	import { onMount } from 'svelte';
	import * as SC from 'svelte-cubed';
	import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
	import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
	import typefaceData from '@compai/font-mako/data/typefaces/mako-normal-400.json';

	let font;
	let text = 'Level Up';
	let loader = new FontLoader();

	onMount(() => {
		font = loader.parse(typefaceData);
	});

	// options: https://threejs.org/docs/index.html?q=textge#examples/en/geometries/TextGeometry
</script>

<SC.Canvas antialias alpha>
	<SC.Mesh geometry={new TextGeometry(text, { font, size: 5, height: 10 })} />
	<SC.PerspectiveCamera position={[10, 0, 100]} />
	<SC.OrbitControls />
</SC.Canvas>

<input type="text" bind:value={text} />

<style>
	input {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}
</style>
