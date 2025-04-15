<script lang="ts">
	import Nav from '$lib/Components/Nav.svelte';
	import '../app.css';
    import {ModeWatcher} from "mode-watcher";

	let { children } = $props();
</script>

<ModeWatcher/>
<main class="max-w-5xl mx-auto">
	<Nav class=""></Nav>
	{@render children()}
</main>
