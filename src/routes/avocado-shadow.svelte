<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

	let geometry, material, model;
	let path = '../../static/Avocado/Avocado.gltf';
	let loader = new GLTFLoader();
	loader.load(path, (gltf) => {
		model = gltf.scene.children[0];
		geometry = model.geometry;
		material = model.material;
	});

	let rotation = 0;
	SC.onFrame(() => {
		rotation += 0.01;
	});

	// let star;
	// let starLoader = new GLTFLoader();
	// starLoader.load('star.gltf', (gltf) => {
	// 	console.log(gltf.scene.children[0]);
	// });
</script>

<!-- <div class="controls">
	<button on:click={() => {}}>Refresh</button>
</div> -->

<SC.Canvas antialias alpha shadows>
	<SC.Mesh {geometry} {material} scale={[10, 10, 10]} castShadow rotation={[0, rotation, 0]} />
	<SC.Group position={[0, -0.1, 0]}>
		<SC.Mesh
			receiveShadow
			geometry={new THREE.PlaneGeometry(10, 10)}
			material={new THREE.MeshStandardMaterial({ color: 'grey' })}
			rotation={[-Math.PI / 2, 0, 0]}
		/>
		<SC.Primitive
			object={new THREE.GridHelper(10, 10, 0x444444, 0x555555)}
			position={[0, 0.001, 0]}
		/>
	</SC.Group>
	<SC.PerspectiveCamera position={[1, 1, -2]} />
	<SC.OrbitControls enableZoom={true} />
	<SC.AmbientLight intensity={0.7} />
	<SC.DirectionalLight intensity={0.5} />
	<SC.PointLight shadow={{ mapSize: [2048, 2048] }} position={[1, 5, 1]} decay={2} />
</SC.Canvas>

<style>
	/* .controls {
		position: absolute;
		z-index: 10;
	} */
</style>
