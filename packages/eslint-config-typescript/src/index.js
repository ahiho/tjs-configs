module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    'consistent-return': 'off',
    camelcase: 'off',
    '@typescript-eslint/naming-convention': 'off',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    'no-array-constructor': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
    'new-cap': [2, { newIsCap: true, capIsNew: false }],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/typedef': 'off',
  },
};