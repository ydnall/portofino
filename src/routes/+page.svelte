<script lang="ts">
	import type { Education, Experience, Project } from '$lib/types';
	import ContactCard from '$lib/components/contact-card.svelte';
	import Section from '$lib/components/section.svelte';
	import ExperienceItem from '$lib/components/experience-item.svelte';
	import ProjectItem from '$lib/components/project-item.svelte';

	const educationItems: Education[] = [
		{
			title: 'KTH Royal Institute of Technology',
			period: 'MSc in Computer Science • Aug. 2022 - Present',
			description:
				'i like to study sometimes... this education card can be used to showcase your education background, maybe also even some coursework you did.'
		}
	];

	const experienceItems: Experience[] = [
		{
			title: 'Job Title',
			period: 'Start Date - End Date',
			description: 'describe your experience here. maybe you have done something impressive :O'
		}
	];

	const projectItems: Project[] = [
		{
			title: 'Example Project',
			description: 'cool project description here.',
			skills: ['Skill', 'Another Skill', 'Maybe one more'],
			github: '#',
			demo: '#'
		},
		{
			title: 'Another Example Project',
			description:
				'yet another placeholder description. replace it with your own cool project description.',
			skills: ['Skill', 'Some Skill', 'Maybe Framework', 'Or Tool you used'],
			github: '#'
		}
	];
</script>

<div class="relative flex min-h-screen flex-col">
	<div class="mx-auto my-12 w-full max-w-[720px] px-4 sm:px-6 lg:px-8">
		<div class="space-y-16">
			<ContactCard />
			<div class="space-y-12">
				<Section title="about">
					<p class="text-gray-600">
						hey! lets learn stuff together :&#41; <br /><br />
						introduce yourself here or maybe even talk about your passions, hobbies, and whatever you
						want!
					</p>
				</Section>

				<Section title="education">
					<div class="space-y-6">
						{#each educationItems as item}
							<ExperienceItem
								title={item.title}
								period={item.period}
								description={item.description}
							/>
						{/each}
					</div>
				</Section>

				<Section title="experience">
					<div class="space-y-6">
						{#each experienceItems as item}
							<ExperienceItem
								title={item.title}
								period={item.period}
								description={item.description}
							/>
						{/each}
					</div>
				</Section>

				<Section title="projects">
					<div class="space-y-6">
						{#each projectItems as item}
							<ProjectItem
								title={item.title}
								description={item.description}
								skills={item.skills}
								github={item.github}
								demo={item.demo}
							/>
						{/each}
					</div>
				</Section>
			</div>
		</div>
	</div>
</div>
