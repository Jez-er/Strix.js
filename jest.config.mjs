export default {
	preset: 'ts-jest/presets/default-esm', // Поддержка ES-модулей в TypeScript
	testEnvironment: 'node',
	extensionsToTreatAsEsm: ['.ts'], // Обрабатываем TypeScript как ES-модуль
	transform: {
		'^.+\\.ts$': [
			'ts-jest',
			{
				useESM: true,
			},
		],
	},
}
