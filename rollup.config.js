import typescript from 'rollup-plugin-typescript2'

export default {
	input: './src/index.ts',
	output: [
		{
			file: 'dist/bundle.cjs.js',
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: 'dist/bundle.esm.js',
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		typescript({
			tsconfig: './tsconfig.json', // Убедитесь, что используется правильный tsconfig
			useTsconfigDeclarationDir: true, // Это заставит генерировать декларации типов в папке dist
		}),
	],
}
