<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

	let geometry = new THREE.BoxGeometry();
	let material = new THREE.MeshStandardMaterial();
	let model;
	let path = 'Avocado/Avocado.gltf';
	let loader = new GLTFLoader();
	loader.load(path, (gltf) => {
		geometry = gltf.scene.children[0].geometry;
		material = gltf.scene.children[0].material;
	});

	let rotation = 0;
	SC.onFrame(() => {
		rotation += 0.01;
	});
</script>

<div class="canvas-container">
	<SC.Canvas antialias alpha>
		<SC.Mesh {geometry} {material} scale={[10, 10, 10]} rotation={[0, rotation, 0]} />

		<SC.PerspectiveCamera position={[1, 1, -2]} />
		<SC.OrbitControls enableZoom={true} />
		<SC.AmbientLight intensity={0.7} />
		<SC.DirectionalLight intensity={0.5} />
		<SC.PointLight position={[1, 5, 1]} decay={2} />
	</SC.Canvas>
</div>

<style>
	.canvas-container {
		position: relative;
		width: 100px;
		height: 100px;
	}
</style>
