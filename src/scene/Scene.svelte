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

  let sceneHolder;

  const engine = new Engine(sceneHolder, false);
	const scene = new Scene(engine);

	const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);
	camera.attachControl(sceneHolder, true);

	const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

	var groundMaterial = new GridMaterial("groundMaterial", scene);
	groundMaterial.majorUnitFrequency = 5;
	groundMaterial.minorUnitVisibility = 0.45;
	groundMaterial.gridRatio = 2;
	groundMaterial.backFaceCulling = false;
	groundMaterial.mainColor = new Color3(1, 1, 1);
	groundMaterial.lineColor = new Color3(1.0, 1.0, 1.0);
	groundMaterial.opacity = 0.98;

	var ground = Mesh.CreateGround('ground', 10, 10, 100, scene);
	ground.material = groundMaterial;
</script>

<div class='container'>
  <slot>{sceneHolder}</slot>
</div>