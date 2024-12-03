module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/styleMock.js'
  },
  setupFiles: ['<rootDir>/jest.setup.js']
}
