<script lang="ts">
	import { Github, ExternalLink } from 'lucide-svelte';
	const { title, description, skills, github, demo } = $props<{
		title: string;
		description: string;
		skills: string[];
		github?: string;
		demo?: string;
	}>();
</script>

<div class="rounded-lg p-4 transition-all hover:bg-gray-50">
	<div class="flex items-start justify-between">
		<h4 class="text-lg font-medium text-gray-900">{title}</h4>
		<div class="flex gap-2">
			{#if github}
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="View source code on GitHub"
					class="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1 text-sm text-gray-600 transition-all hover:border-gray-900 hover:bg-gray-50 hover:text-gray-900"
				>
					<Github size={16} />
					<span>GitHub</span>
				</a>
			{/if}
			{#if demo}
				<a
					href={demo}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="View live demo"
					class="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1 text-sm text-gray-600 transition-all hover:border-gray-900 hover:bg-gray-50 hover:text-gray-900"
				>
					<ExternalLink size={16} />
					<span>Demo</span>
				</a>
			{/if}
		</div>
	</div>
	<p class="mt-2 text-gray-600">{description}</p>
	<div class="mt-3 flex flex-wrap gap-2">
		{#each skills as skill}
			<span
				class="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-600 transition-all hover:border-gray-900 hover:bg-gray-50 hover:text-gray-900"
			>
				{skill}
			</span>
		{/each}
	</div>
</div>
