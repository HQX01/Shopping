const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  ignorePatterns: ['node_modules/*', 'dist/*', '*.css', '*.json', 'cypress/*', '*.woff', '*.woff2', '*.ttf'],
  rules: {
  },
};
