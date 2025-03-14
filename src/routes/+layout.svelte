<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="m-16">
	{@render children()}
</main>
