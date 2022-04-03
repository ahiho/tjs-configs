const { hasConfig } = require('./has-config');

const hasReact = hasConfig([
  { type: 'dependency', dependency: 'react' },
  { type: 'dependency', dependency: 'react', dependencyType: 'peer' },
]);

const hasTypescript = hasConfig([
  { type: 'dependency', dependency: 'typescript' },
  { type: 'dependency', dependency: 'typescript', dependencyType: 'dev' },
  { type: 'file', pattern: 'tsconfig.json' },
]);

module.exports = {
  extends: [
    '@ahiho/eslint-config-ecmascript',
    hasReact ? '@ahiho/eslint-config-react' : null,
    hasTypescript ? '@ahiho/eslint-config-typescript' : null,
    'prettier',
    'plugin:jest/recommended',
  ].filter((s) => !!s),
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['functional', 'import', 'jest-formatting', 'simple-import-sort'],
  rules: {
    'functional/prefer-readonly-type': 'error',
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'supertest.**.expect', 'request.**.expect'],
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jest-formatting/padding-around-all': 'error',
    curly: ['error', 'all'],
  },
};
