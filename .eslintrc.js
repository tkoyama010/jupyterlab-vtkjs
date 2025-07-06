module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  ignorePatterns: [
    'lib/',
    'dist/',
    'node_modules/',
    'jupyterlab_vtkjs/',
    '*.d.ts',
    'tests/',
    'jest.config.js'
  ],
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.test.ts'],
      env: {
        jest: true
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};