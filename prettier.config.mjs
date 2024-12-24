/** @type {import("prettier").Config} */
const config = {
	editorConfig: true,
	printWidth: 120,
	singleQuote: true,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
};

export default config;
