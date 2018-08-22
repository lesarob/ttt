module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['html', 'text-summary', 'lcov', 'text'],
  testEnvironment: 'node',
};
