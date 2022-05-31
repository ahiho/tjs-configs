module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:jsx-a11y/recommended'],
  rules: {
    'no-process-env': 'off',
    'functional/prefer-readonly-type': [
      'error',
      {
        ignoreInterface: true,
        ignoreCollections: true,
        allowMutableReturnType: true,
      },
    ],
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-no-duplicate-props': 'off',
    'react/jsx-no-undef': 'off',
    'react/jsx-quotes': 'off',
    'react/jsx-sort-prop-types': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-danger': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'error',
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/no-unknown-property': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-extension': 'off',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      2,
      {
        order: [
          'statics',
          'static-variables',
          'static-methods',
          'instance-variables',
          'constructor',
          'getChildContext',
          'componentDidMount',
          'shouldComponentUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          '/^handle.+$/',
          '/^on.+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
  },
};
