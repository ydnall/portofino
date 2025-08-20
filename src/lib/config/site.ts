type SiteConfig = {
	title: string;
	description: string;
	author: string;
	email: string;
	location: string;
	socials: {
		github: string;
		linkedin: string;
	};
	metadata: {
		keywords: string[];
		themeColor: string;
		language: string;
	};
};

export const siteConfig: SiteConfig = {
	title: 'Portfolio - Andy Li',
	description: 'Computer Science student at KTH, enjoy web development.',
	author: 'Andy Li',
	email: 'andy_li_@outlook.com',
	location: 'stockholm, sweden',
	socials: {
		github: 'https://github.com/ydnall/portofino',
		linkedin: 'https://linkedin.com/in/ydnall'
	},
	metadata: {
		keywords: [
			'computer science student',
			'kth',
			'web development',
			'software engineering',
			'svelte',
			'typescript',
			'react',
			'portfolio',
			'stockholm'
		],
		themeColor: '#ffffff',
		language: 'en'
	}
} as const;
