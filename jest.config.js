module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!<rootDir>/src/components/**/*.stories.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
