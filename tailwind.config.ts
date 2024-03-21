import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Onest', ...fontFamily.sans],
			},
			gridTemplateColumns: {
				lines: '185px 49.59px 236.41px 1fr',
			},
		},
	},
	plugins: [],
}

export default config
