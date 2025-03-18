<script lang="ts">
	import { motion, hover } from '$lib/motion.svelte';
</script>

<button
	use:motion={{
		keyframes: { scale: [0.8, 1], opacity: [0, 1] }
	}}
	class="rounded-lg border-sky-700 bg-sky-400 p-2">Button</button
>
