/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					black: '#424242',
					red: '#d32f2f',
					green: '#2e7d32',
					blue: '#0070ba',
				},
			},
			keyframes: ({ theme }) => ({
				blink: {
					from: { opacity: 1 },
					to: { opacity: 0 },
				},
				rgb: {
					'0%, 100%': {
						color: theme('colors.brand.black'),
					},
					'25%': {
						color: theme('colors.brand.red'),
					},
					'50%': {
						color: theme('colors.brand.green'),
					},
					'75%': {
						color: theme('colors.brand.blue'),
					},
				},
			}),
			animation: {
				blink: 'blink 500ms infinite alternate',
				rgb: 'rgb 4s infinite',
			},
		},
	},
	plugins: [],
};
