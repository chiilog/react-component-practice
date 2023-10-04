// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const config = require('eslint-config-next')

module.exports = {
  ...config,
  parser: 'eslint-config-next/parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    ...config.extends,
    'next',
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  overrides: [
    ...config.overrides,
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    ...config.rules,
    'jsx-a11y/anchor-is-valid': 'off',
  },
}
