<script lang="ts">
	import type { Education, Experience, Project } from '$lib/types';
	import ContactCard from '$lib/components/contact-card.svelte';
	import Section from '$lib/components/section.svelte';
	import ExperienceItem from '$lib/components/experience-item.svelte';
	import ProjectItem from '$lib/components/project-item.svelte';

	const educationItems: Education[] = [
		{
			title: 'KTH Royal Institute of Technology',
			period: 'BSc & MSc in Computer Science • Aug. 2022 - May 2027',
			description:
				'Specializing in Machine Learning and AI systems. Key coursework: Advanced Algorithms, Deep Learning, Distributed Systems, and Cloud Computing.'
		}
	];

	const experienceItems: Experience[] = [
		{
			title: 'Web Developer @ Tough Energy',
			period: 'Dec. 2024 - Present',
			description:
				'Developed and launched a Shopify e-commerce platform, implementing custom features and optimizations that drove 40% revenue growth in the Nordic market.'
		}
	];

	const projectItems: Project[] = [
		{
			title: 'AI-Powered Task Manager',
			description:
				'Smart task management platform using ML for task prioritization. Implemented NLP for analysis and automated scheduling, achieving 90% categorization accuracy.',
			skills: ['React', 'TypeScript', 'Node.js'],
			github: 'https://github.com/yourusername/project-alpha',
			demo: 'https://project-alpha.demo.com'
		},
		{
			title: 'Real-time Collaboration Platform',
			description:
				'Collaborative workspace featuring live document editing and team chat. Optimized for 1000+ concurrent users with <100ms latency.',
			skills: ['Svelte', 'TailwindCSS', 'Firebase'],
			github: 'https://github.com/yourusername/project-beta'
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
						hey! i build cool stuff for the web and play around with machine learning. when i'm not
						coding, you'll probably find me falling off boulders at the climbing gym. always down to
						learn new tech and build fun things! looking for new opportunities (hire me lol) to
						create something awesome together 🚀
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
