<script lang='ts'>
  import {
		Scene,
		Engine,
		Vector3,
		HemisphericLight,
		Color3,
		Mesh,
		ArcRotateCamera
	} from '@babylonjs/core';

	import { GridMaterial } from '@babylonjs/materials/grid';
	import { onMount } from 'svelte';

  export let sceneHolder: HTMLCanvasElement;

	onMount(() => {
		initScene();
	});

	const initScene = () => {
		const engine = new Engine(sceneHolder, false);
		const scene = new Scene(engine);

		const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);
		camera.attachControl(sceneHolder, true);

		const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

		const groundMaterial = new GridMaterial("groundMaterial", scene);
		groundMaterial.majorUnitFrequency = 5;
		groundMaterial.minorUnitVisibility = 0.45;
		groundMaterial.gridRatio = 2;
		groundMaterial.backFaceCulling = false;
		groundMaterial.mainColor = new Color3(1, 1, 1);
		groundMaterial.lineColor = new Color3(1.0, 1.0, 1.0);
		groundMaterial.opacity = 0.98;

		const ground = Mesh.CreateGround('ground', 10, 10, 100, scene);
		ground.material = groundMaterial;
		console.log(ground);

		engine.runRenderLoop(function () {
			camera.alpha += 0.003;
		});
	}
</script>