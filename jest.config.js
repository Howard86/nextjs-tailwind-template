const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const config = createJestConfig({
  moduleNameMapper: {
    '^@/((?!public).*)$': '<rootDir>/src/$1',
    '^test-utils$': '<rootDir>/test-utils',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
})

module.exports = config
