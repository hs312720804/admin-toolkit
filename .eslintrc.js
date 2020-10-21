module.exports = {
  root: true,
  env: {
    node: true,
    "jest": true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 2,
    'no-debugger': 2
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
