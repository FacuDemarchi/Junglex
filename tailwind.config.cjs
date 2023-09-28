/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'accent-light': 'var(--color-accent-light)',
			  },
			  backgroundColor: {
				'accent-light': 'rgb(var(--color-accent-light))',
			  },
		},
	},
	variants: {
		extend: {
		  backgroundColor: ['responsive', 'hover', 'focus', 'active'],
		},
	  },
	plugins: [],
}
