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
  rules: Object.assign(
    {
      'jest/expect-expect': [
        'error',
        {
          assertFunctionNames: ['expect', 'supertest.**.expect', 'request.**.expect'],
        },
      ],
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'jest-formatting/padding-around-all': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      curly: ['error', 'all'],
    },
    hasReact ? { '@typescript-eslint/explicit-function-return-type': 'off' } : {},
  ),
};
