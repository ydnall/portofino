<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<section id={title.toLowerCase()}>
	<h3 class="mb-2 text-2xl font-medium tracking-wide text-gray-900">{title}</h3>
	<hr class="border-gray-200" />
	<div class="mt-4">
		{@render children()}
	</div>
</section>
