module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: [require.resolve('whatwg-fetch')],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: ['**/*.js'],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 85,
      functions: 85,
      lines: 85
    }
  }
}
