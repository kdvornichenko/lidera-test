import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			components: `${path.resolve(__dirname, './src/components/')}`,
			content: `${path.resolve(__dirname, './src/content/')}`,
			public: `${path.resolve(__dirname, './public/')}`,
			ui: `${path.resolve(__dirname, './src/components/ui')}`,
			data: `${path.resolve(__dirname, './src/data')}`,
			pages: `${path.resolve(__dirname, './src/pages')}`,
			hooks: `${path.resolve(__dirname, './src/hooks')}`,
			store: `${path.resolve(__dirname, './src/store')}`,
			types: `${path.resolve(__dirname, './src/types')}`,
		},
	},
})
