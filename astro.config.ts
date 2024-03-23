import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	output: 'static',
	site: 'https://sheokahn.com/',
	devToolbar: { enabled: false },
	integrations: [tailwind()],
})
