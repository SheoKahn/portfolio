import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	site: 'https://sheokahn.com/',
	devToolbar: { enabled: false },
	integrations: [tailwind(), sitemap()],
})
