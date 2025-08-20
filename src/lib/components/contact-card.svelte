<script lang="ts">
	import { Mail, MapPin, Github, Linkedin } from 'lucide-svelte';
	import { siteConfig } from '$lib/config/site';
</script>

<div class="space-y-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
	<div>
		<h1 class="text-4xl font-bold tracking-tight text-gray-900">andy li</h1>
		<h2 class="mt-2 text-xl font-medium tracking-wide text-gray-600">
			some funny stuff here or whatever. <br /><br />
			also click github button to use this template.
		</h2>
	</div>

	<div class="flex items-end justify-between">
		<div>
			<div class="flex items-center gap-2 text-gray-600">
				<MapPin size={20} />
				<span class="text-lg leading-none tracking-wide">{siteConfig.location}</span>
			</div>
		</div>
		<div class="flex items-center gap-3">
			<a
				href="mailto:{siteConfig.email}"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Send email"
				class="text-gray-600 transition-all hover:text-gray-900"
			>
				<Mail size={24} />
			</a>
			<a
				href={siteConfig.socials.github}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visit GitHub profile"
				class="text-gray-600 transition-all hover:text-gray-900"
			>
				<Github size={24} />
			</a>
			<a
				href={siteConfig.socials.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visit LinkedIn profile"
				class="text-gray-600 transition-all hover:text-gray-900"
			>
				<Linkedin size={24} />
			</a>
		</div>
	</div>
</div>
