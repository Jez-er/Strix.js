import typescript from 'rollup-plugin-typescript2'

export default {
	input: './src/index.ts', // Входной файл
	output: [
		{
			file: 'dist/bundle.cjs.js', // CommonJS
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: 'dist/bundle.esm.js', // ES Module
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		typescript(), // Плагин для TypeScript
	],
	// external: ['express'], // Укажи внешние зависимости
}
