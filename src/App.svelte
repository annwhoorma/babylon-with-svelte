<script lang="ts">
	import Scene from './scene/Scene.svelte';
  let sceneHolder: HTMLCanvasElement;
</script>

<canvas class="sceneHolder" bind:this={sceneHolder}>
  {#if (sceneHolder)}
    <Scene sceneHolder={sceneHolder}>
    </Scene>
  {/if}
</canvas>

<style>
	.sceneHolder {
    width: 100%;
    height: 100%;
  }
</style>