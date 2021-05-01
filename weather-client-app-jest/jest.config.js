// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig');

module.exports = {
    verbose: true,
    roots: [
		'<rootDir>/'
    ],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    collectCoverage: true,
    reporters: [
		'default'
	],
	globals: {
		'ts-jest': {
			tsсonfig: 'tsconfig.spec.json',
			isolatedModules: true
		}
	},

    transform: {"\\.ts$": ['ts-jest']},
	preset: 'jest-preset-angular',

    //transform: {"\\.ts$": ['ts-jest']}
    moduleNameMapper: {
		'@angular/(.*)': '<rootDir>/node_modules/@angular/$1',
		'^src/(.*)': '<rootDir>/src/$1',
		'^app/(.*)': '<rootDir>/src/app/$1',
		'^assets/(.*)': '<rootDir>/src/assets/$1',
		'^environments/(.*)': '<rootDir>/src/environments/$1',
        '@spec/(.*)': '<rootDir>/src/spec/$1',
        '@shared/(.*)': '<rootDir>/src/app/shared/$1',
        '@core/(.*)': '<rootDir>/src/app/core/$1',
        '@features/(.*)': '<rootDir>/src/app/features/$1',
	},
	coverageDirectory: 'test-output/jest-coverage',
	coverageReporters: [
		'text-summary',
		'json',
		'html'
	],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/jest/',
		'/src/spec/'
	],
	collectCoverageFrom: [
		'src/app/**/*.*',
		'!src/app/**/*routing.ts',
		'!src/app/**/*routing.module.ts',
		'!src/app/**/*.html',
		'!src/app/**/*.json',
    
        '!src/app/**/index.ts',
		'!src/app/**/*.mock.ts',
		'!src/app/**/*.module.ts',
		'!src/app/**/*.model.ts',
		'!src/app/**/*.enum.ts',
		'!src/app/**/__snapshots__/*.*'
	],
	// coverageThreshold: {
	// 	'<rootDir>/src/app': {
	// 		lines: 90
	// 	},
	// 	'src/app/**/*.*': {
	// 		lines: 75
	// 	}
	// }
};
