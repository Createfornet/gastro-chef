/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/routes/Header.svelte', './src/app.css'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			primary: '#64D370',
			navbar: '#F5FAFF',
			backlay: 'rgba(0, 0, 0, .8)',
		}
	},
	plugins: []
};
