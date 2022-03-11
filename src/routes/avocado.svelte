<script>
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
</script>

<SC.Canvas antialias alpha>
	<SC.Mesh {geometry} {material} />
	<SC.PerspectiveCamera position={[0.1, 0.2, -0.1]} />
	<SC.OrbitControls enableZoom={true} />
	<SC.AmbientLight intensity={0.7} />
	<SC.PointLight position={[1, 5, 1]} decay={2} />
</SC.Canvas>
