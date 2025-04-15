<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import KanataIcon from './Svg/kanataIcon.svelte';
	let klass: string = '';
	export { klass as class };
</script>

<nav
	class="{klass} mx-auto flex h-24 items-center justify-between border-b border-b-gray-200 px-4 text-3xl"
>
	<a href="/"><KanataIcon class="h-24 w-24"></KanataIcon></a>
	<div class="float-end">
		<a
			class=""
			href="/about">About</a
		>
		<button on:click={toggleMode}>Dark</button>
	</div>
</nav>
