<script lang="ts">
	import { hover, rotateScaleIn } from '$lib/motion.svelte';
</script>

<button use:rotateScaleIn use:hover class="rounded-lg border-sky-700 bg-sky-400 p-2">Button</button>
