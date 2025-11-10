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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/keiaa-75/safepoint' }],
			customCss: ['./src/assets/landing.css'],
			sidebar: [
				{
					label: 'Start Here',
					autogenerate: { directory: 'start' }
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
