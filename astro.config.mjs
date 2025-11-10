// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SafePoint Docs',
			logo: {
				light: '/src/assets/logo-light.svg',
				dark: '/src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/keiaa-75/safepoint' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/mc2XSuu7bq' },
			],
			customCss: [
				'./src/assets/global.css',
				'./src/assets/landing.css',
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						'start/what-is-safepoint',
						'start/for-students',
						'start/for-counselors',
					]
				},
				{
					label: 'User Guides',
					autogenerate: { directory: 'user-guides' }
				},
				{
					label: 'Development',
					autogenerate: { directory: 'development' },
				},
			],
		}),
	],
});
