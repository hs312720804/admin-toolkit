module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    // '^@\/(.*?\.?(js|vue)?|)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/unit/__mocks__/fileMock.js', // 模拟加载静态文件
    // '\\.(css|less|scss|sass)$': '<rootDir>/test/unit/__mocks__/styleMock.js'// 模拟加载样式文件
  },
  // snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  // ['jest-serializer-vue'],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
    // '<rootDir>/test/unit/specs/*.spec.js'
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(lodash-es|other-es-lib))'
  ],
  collectCoverage: false,
  coverageDirectory: '<rootDir>/tests/unit/coverage', // 覆盖率报告的目录
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  testURL: 'http://localhost/'
}
