<script lang="ts">
	import Scene from './scene/Scene.svelte';
</script>

<div class="scene">
	<Scene let:sceneHolder={sceneHolder}>
		<canvas class:sceneHolder>
		</canvas>
	</Scene>
</div>

<style>
	.sceneHolder {
    z-index: 1;
    display: block;
    float: right;
    width: 100%;
    height: 100%;
  }
</style>