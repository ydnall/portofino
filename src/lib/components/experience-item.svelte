<script lang="ts">
	const { title, period, description } = $props<{
		title: string;
		period: string;
		description: string;
	}>();
</script>

<div class="rounded-lg p-4 transition-all hover:bg-gray-50">
	<h4 class="text-lg font-medium text-gray-900">{title}</h4>
	<p class="text-gray-600">{period}</p>
	<p class="mt-2 text-gray-600">{description}</p>
</div>
