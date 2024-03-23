import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Onest', ...defaultTheme.fontFamily.sans],
		},
		minHeight: {
			full: '100svh',
		},
		gridColumn: {
			'span-2': defaultTheme.gridColumn['span-2'],
			'span-full': defaultTheme.gridColumn['span-full'],
		},
		gridColumnStart: {
			'1': defaultTheme.gridColumnStart[1],
			'2': defaultTheme.gridColumnStart[2],
			'3': defaultTheme.gridColumnStart[3],
		},
		gridTemplateColumns: {
			lines: '185px 49.59px 236.41px 1fr',
		},
		fontSize: {
			'2xl': defaultTheme.fontSize['2xl'],
			'5xl': defaultTheme.fontSize['5xl'],
		},
		letterSpacing: {
			wider: defaultTheme.letterSpacing.wider,
		},
		margin: {
			'2': defaultTheme.spacing[2],
			'3': defaultTheme.spacing[3],
		},
		extend: {},
	},
	plugins: [],
}

export default config
